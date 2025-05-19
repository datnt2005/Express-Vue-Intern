function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    res.locals.currentUser = req.session.user; // để dùng trong view
    return next();
  }
  req.flash('error', 'Bạn cần đăng nhập trước');
  return res.redirect('/login');
}

module.exports = {
  isAuthenticated,
};
