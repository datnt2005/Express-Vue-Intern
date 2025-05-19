const User = require('../models/userModel');
const redisClient = require('../config/redisClient');

class AuthController {
  async showLoginForm(req, res) {
    res.render('auth/login', { title: 'Đăng nhập' });
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      // Kiểm tra thông tin đăng nhập
      const user = await User.loginUser(email, password);

      if (!user) {
        req.flash('error', 'Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.');
        return res.redirect('/login');
      }

      // Gán vào session
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
          req.flash('error', 'Không thể lưu phiên đăng nhập.');
          return res.redirect('/login');
        }
        req.flash('success', 'Đăng nhập thành công!');
        res.redirect('/users');
      });
    } catch (error) {
      console.error('Login error:', error);
      req.flash('error', 'Có lỗi xảy ra, vui lòng thử lại.');
      res.redirect('/login');
    }
  }
async logout(req, res) {
  try {
    req.flash('success', 'Đăng xuất thành công!');
    const sid = req.sessionID;

    req.session.destroy((err) => {
      if (err) {
        console.error('Logout error:', err);
        req.flash('error', 'Đăng xuất thất bại!');
        return res.redirect('/users');
      }

      // Xoá cookie
      res.clearCookie('connect.sid', {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      });

      // Gọi xoá Redis key tường minh
      req.sessionStore.destroy(sid, (err) => {
        if (err) console.error('Redis destroy failed:', err);
        res.redirect('/login');
      });
    });
  } catch (err) {
    console.error('Logout crash:', err);
    res.redirect('/login');
  }
}


}

module.exports = new AuthController();
