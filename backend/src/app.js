// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const Minio = require('minio');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('./config/redisClient');
const dbConfig = require('./config/db');
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

// Import routes
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const categoryRoutes = require('./routes/categoryRoute');
const authRoutes = require('./routes/authRoute');

const app = express();


// Configure Redis store
const store = new RedisStore({
  client: redisClient,
  prefix: "sess:",
});

// Configure EJS Mate
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Basic middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Session middleware
app.use(
  session({
    store: store,
    secret: process.env.SESSION_SECRET || 'datnt2005',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set true nếu dùng HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 giờ
    },
  })
);


// Flash message middleware
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.session.user || null;
  next();
});

// Declare routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/', authRoutes);

// Configure MinIO client
const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'minio',
  port: parseInt(process.env.MINIO_PORT) || 9000,
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
  secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin'
});

// API to check MySQL and MinIO connections
app.get('/api/checkConnection', async (req, res) => {
  let mysqlStatus = 'Error', mysqlTime = 0;
  let minioStatus = 'Error', minioTime = 0;

  try {
    const mysqlStart = Date.now();
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
    await connection.end();
    mysqlTime = Date.now() - mysqlStart;
    mysqlStatus = rows[0].solution === 2 ? 'OK' : 'Error';
  } catch (err) {
    console.error('MySQL error:', err.message);
  }

  try {
    const minioStart = Date.now();
    const buckets = await minioClient.listBuckets();
    minioTime = Date.now() - minioStart;
    minioStatus = buckets ? 'OK' : 'Error';
  } catch (err) {
    console.error('MinIO error:', err.message);
  }

  res.json({
    mysql: { status: mysqlStatus, time_ms: mysqlTime },
    minio: { status: minioStatus, time_ms: minioTime },
    message: 'Backend is working!',
    checkedAt: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});