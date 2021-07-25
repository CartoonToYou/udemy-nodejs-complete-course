const express = require("express");

const { body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  [
    body("title", "Title must have at least 1 character!").not().isEmpty(),
    body("imageUrl")
      .not()
      .isEmpty()
      .withMessage("Image is required!")
      .isURL()
      .withMessage("Image must be only URL!"),
    body("price")
      .isFloat({ min: 0.05, max: 99.99 })
      .withMessage("Price must be decimal value with range 0.05$ to 99.99$!"),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post("/edit-product", isAuth, adminController.postEditProduct);

router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
