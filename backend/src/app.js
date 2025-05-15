require('dotenv').config(); // Load biến môi trường từ file .env
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const Minio = require('minio');

const app = express();
const path = require('path');
const engine  = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

const userRoutes  = require('./routes/userRoute');
const productRoutes  = require('./routes/productRoute');
const categoryRoutes  = require('./routes/categoryRoute');

//cấu hình ejs mate
app.engine('ejs', engine );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: 'express-secret',
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());
// Middleware để biến flash thành biến dùng trong EJS
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

//cau hinh user
app.use('/users', userRoutes);
//cau hinh product
app.use('/products', productRoutes);
//cau hinh category
app.use('/categories', categoryRoutes);
// cau hinh upload

// Cấu hình MySQL
const dbConfig = {
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'myapp'
};

// Cấu hình MinIO
const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT || 'minio',
    port: parseInt(process.env.MINIO_PORT) || 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
    secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin'
});


// ✅ API kiểm tra kết nối backend
app.get('/api/checkConnection', async (req, res) => {
    let mysqlStatus = 'Error', mysqlTime = 0;
    let minioStatus = 'Error', minioTime = 0;

    try {
        // Đo thời gian kết nối MySQL
        const mysqlStart = Date.now();
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
        await connection.end();
        mysqlTime = Date.now() - mysqlStart;
        mysqlStatus = rows[0].solution === 2 ? 'OK' : 'Error';
    } catch (err) {
        mysqlStatus = 'Error';
        console.error('MySQL error:', err.message);
    }

    try {
        // Đo thời gian kết nối MinIO
        const minioStart = Date.now();
        const buckets = await minioClient.listBuckets();
        minioTime = Date.now() - minioStart;
        minioStatus = buckets ? 'OK' : 'Error';
    } catch (err) {
        minioStatus = 'Error';
        console.error('MinIO error:', err.message);
    }

    res.json({
        mysql: {
            status: mysqlStatus,
            time_ms: mysqlTime
        },
        minio: {
            status: minioStatus,
            time_ms: minioTime
        },
        message: 'Backend is working!',
        checkedAt: new Date().toISOString()
    });
});


// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
