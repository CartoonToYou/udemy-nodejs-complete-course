module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    /* 401 === Not authenication */
    return res.redirect("/login");
  }
  next();
};
