const withAuth = (req, res, next) => {
  // What functionality are we missing?
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
