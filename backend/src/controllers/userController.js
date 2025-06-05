const User = require('../models/userModel');
const redisClient = require('../config/redisClient');

class UserController {
  async getUsers(req, res) {
    try {
      let users;

      // 1. Thử lấy từ Redis cache
      // try {
      //   const cachedData = await redisClient.get('users');
      //   if (cachedData) {
      //     users = JSON.parse(cachedData);
      //     return res.render('users/index', { users, title: 'Danh sách người dùng' });
      //   }
      // } catch (redisError) {
      //   console.error('Redis cache error:', redisError);
      // }

      // 2. Nếu không có cache, lấy từ DB
      users = await User.findAll();

      // 3. Lưu vào Redis trong 1 giờ
      try {
        await redisClient.set('users', JSON.stringify(users), 'EX', 60 * 60);
      } catch (redisError) {
        console.error('Redis cache set error:', redisError);
      }

      // res.render('users/index', { users, title: 'Danh sách người dùng' });
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      req.flash('error', 'Không thể tải danh sách người dùng');
      res.status(500).json({ message: 'Lỗi khi tải danh sách người dùng' });
    }
  }

  async getUser(req, res) {
    const user = await User.findById(req.params.id);
    if (user) {
      res.render('users/detail', { user, title: 'Chi tiết người dùng' });
    } else {
      res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
  }

  showCreateUserForm(req, res) {
    res.render('users/create', { title: 'Thêm người dùng' });
  }

  async createUser(req, res) {
    const { name, email, password } = req.body;
    await User.create(name, email, password);

    // Xóa cache để dữ liệu mới được load lại
    await redisClient.del('users');

    res.redirect('/users');
  }

  async showEditForm(req, res) {
    const user = await User.getUserById(req.params.id);
    if (user) {
      res.render('users/edit', { user, title: 'Chỉnh sửa người dùng' });
    } else {
      res.status(404).render('users/404', { title: 'Không tìm thấy người dùng' });
    }
  }

  async updateUser(req, res) {
    const { name, email, password } = req.body;
    await User.update(req.params.id, name, email, password);

    // Xóa cache
    await redisClient.del('users');

    res.redirect('/users');
  }

  async deleteUser(req, res) {
    try {
      const result = await User.delete(req.params.id);

      if (result.affectedRows > 0) {
        req.flash('success', 'Xóa người dùng thành công!');
        await redisClient.del('users');
      } else {
        req.flash('error', 'Không tìm thấy người dùng để xóa!');
      }

      res.redirect('/users');
    } catch (error) {
      console.error('Lỗi khi xóa:', error);
      req.flash('error', 'Đã xảy ra lỗi khi xóa người dùng!');
      res.redirect('/users');
    }
  }
}

module.exports = new UserController();
