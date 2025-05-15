const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    const users = await User.getAllUsers();
    res.render('users/index', { users, title: 'Danh sách người dùng' });
};

exports.getUser = async (req, res) => {
    const user = await User.getUserById(req.params.id);
    if (user) res.render('users/detail', { user, title: 'Chi tiết người dùng' });
    else res.status(404).json({ message: 'Không tìm thấy người dùng' });
};

exports.showCreateUserForm = (req, res) => {
    res.render('users/create', { title: 'Thêm người dùng' });
};
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    await User.createUser(name, email);
    res.redirect('/users');
};
exports.showEditForm = async (req, res) => {
    const user = await User.getUserById(req.params.id);
    if (user) res.render('users/edit', { user, title: 'Chỉnh sửa người dùng' });
    else res.status(404).render('users/404', { title: 'Không tìm thấy người dùng' });
};

exports.updateUser = async (req, res) => {
    const { name, email } = req.body;
    await User.updateUser(req.params.id, name, email);
    res.redirect('/users');
};
exports.deleteUser = async (req, res) => {
    try {
        const result = await User.deleteUser(req.params.id);

        // Tùy theo User.deleteUser() trả về gì, kiểm tra xem có xóa được không
        if (result.affectedRows > 0) {
            // Thành công
            req.flash('success', 'Xóa người dùng thành công!');
        } else {
            // Không tìm thấy user
            req.flash('error', 'Không tìm thấy người dùng để xóa!');
        }

        res.redirect('/users');
    } catch (error) {
        console.error('Lỗi khi xóa:', error);
        req.flash('error', 'Đã xảy ra lỗi khi xóa người dùng!');
        res.redirect('/users');
    }
};
