const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie") ? req.get("Cookie").split("=")[1] : null;
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isLoggedIn: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  /* set key values in cookies */
  // res.setHeader("Set-Cookie", "loggedIn=true; Max-Age=10; HttpOnly");
  /* use express-session */
  // req.session.isLoggedIn = true
  // res.redirect("/");
  const { email } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      /* save session in middleware before go to other routes */
      req.session.save((err) => {
        console.error(err);
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.error(err);
    res.redirect("/");
  });
};
