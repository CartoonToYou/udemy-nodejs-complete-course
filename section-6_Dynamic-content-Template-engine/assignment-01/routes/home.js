const path = require("path");

const express = require("express");

router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

module.exports = router;
