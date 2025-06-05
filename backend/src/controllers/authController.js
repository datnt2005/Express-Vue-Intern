const User = require('../models/userModel');
const redisClient = require('../config/redisClient');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Kiểm tra thông tin đăng nhập
      const user = await User.loginUser(email, password);

      if (!user) {
        return res.status(401).json({
          status: 'error',
          message: 'Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.'
        });
      }

      // Gán thông tin người dùng vào session
      req.session.userId = user.id;
      req.session.user = {
        id: user.id,
        email: user.email,
        role: user.role || 'user',
        name: user.name,
      };

      req.session.save((err) => {
        if (err) {
          console.error('Session save error:', err);
          return res.status(500).json({
            status: 'error',
            message: 'Không thể lưu phiên đăng nhập.'
          });
        }

        console.log(`[LOGIN] Session created with SID: ${req.sessionID}`);

        return res.json({
          status: 'success',
          message: 'Đăng nhập thành công!',
          data: {
            user: req.session.user
          }
        });
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({
        status: 'error',
        message: 'Có lỗi xảy ra, vui lòng thử lại.'
      });
    }
  }

  async logout(req, res) {
    try {
      const sid = req.sessionID;

      if (!sid) {
        return res.status(400).json({
          status: 'error',
          message: 'Không tìm thấy session hiện tại.'
        });
      }

      console.log(`[LOGOUT] Destroying session: ${sid}`);

      // Gọi hủy session
      req.session.destroy(async (err) => {
        if (err) {
          console.error('Session destroy error:', err);
          return res.status(500).json({
            status: 'error',
            message: 'Đăng xuất thất bại!'
          });
        }

        // Xoá cookie phía client
        res.clearCookie('connect.sid', {
          path: '/',
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        });

        try {
          const redisKey = `sess:${sid}`;
          const delResult = await redisClient.del(redisKey);

          console.log(`[LOGOUT] Redis key deleted (${redisKey}):`, delResult);

          return res.json({
            status: 'success',
            message: 'Đăng xuất thành công!'
          });
        } catch (redisErr) {
          console.error('Redis delete error:', redisErr);
          return res.status(500).json({
            status: 'error',
            message: 'Đăng xuất thành công nhưng không thể xóa session khỏi Redis.'
          });
        }
      });
    } catch (err) {
      console.error('Logout crash:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Có lỗi xảy ra khi đăng xuất.'
      });
    }
  }
}

module.exports = new AuthController();
