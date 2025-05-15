const multer = require('multer');

// Sử dụng memoryStorage để upload buffer lên MinIO
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;
