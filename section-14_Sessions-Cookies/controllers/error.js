exports.get404 = (req, res, next) => {
  const { isLoggedIn, userData } = req.session;
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: "/404",
    isLoggedIn: isLoggedIn,
    username: userData && userData.name,
  });
};
