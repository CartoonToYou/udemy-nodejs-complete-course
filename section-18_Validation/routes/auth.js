const express = require("express");
const { check, body } = require("express-validator/check");

const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  /* use array for many fields to validate */
  [
    check("email")
      .isEmail()
      /* withMessage will show error after method that it chained */
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        if (value === "test@test.com") {
          throw new Error("This is email address is forbidden.");
        }
        return true;
      }),
    /* 2nd argument in check, body or ... will show error message in all validation condition */
    body(
      "passsword",
      "Please enter a password with only numbers and text and at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
