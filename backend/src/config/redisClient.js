const Redis = require('ioredis');

const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost', // Tên service trong Docker
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || undefined, // Nếu có mật khẩu
  retryStrategy: (times) => Math.min(times * 50, 2000) // Thử lại khi mất kết nối
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

module.exports = redisClient;