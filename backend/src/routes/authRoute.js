const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

// API lấy thông tin người dùng đã đăng nhập
router.get('/me', isAuthenticated, (req, res) => {
  res.json({
    success: true,
    user: req.session.user
  });
});

module.exports = router;