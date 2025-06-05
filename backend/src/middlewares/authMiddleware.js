function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    res.locals.currentUser = req.session.user; // để dùng trong view
    return next();
  }
  // Nếu không có session, chuyển hướng đến trang đăng nhập
  // req.flash('error', 'Bạn cần đăng nhập để truy cập trang này');
  //json
  res.status(401).json({ message: 'Unauthorized' });
  // return res.redirect('/login');
}

module.exports = {
  isAuthenticated,
};
