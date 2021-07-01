const express = require("express");

const { users } = require("./users");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(users);
  res.render("home", {
    pageTitle: "Home",
    users,
  });
});

module.exports = router;
