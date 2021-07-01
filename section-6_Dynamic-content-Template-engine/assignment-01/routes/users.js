const express = require("express");

const router = express.Router();

const users = [];

router.get("/add-user", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users",
  });
});

router.post("/add-user", (req, res, next) => {
  users.push({ username: req.body.username });
  res.redirect("/");
});

module.exports = { router, users };
