const express = require("express");

const userController = require("../controllers/user");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/status", isAuth, userController.getStatus);

router.put("/status/:userId", isAuth, userController.editStatus);

module.exports = router;
