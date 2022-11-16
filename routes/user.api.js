const express = require("express");
const router = express.Router();
const { validate, checkObjectId } = require("../middlewares/validator");
const { loginRequired } = require("../middlewares/authentication");
const {
  registerUser,
  updateUser,
  addProductToCart,
  getCurrentUser,
  getHistory,
} = require("../controllers/user.controllers");
const { body, param } = require("express-validator");

/**
 * @route POST /users
 * @description Register new user
 * @body {name, email, password}
 * @access Public
 */
router.post(
  "/",
  validate([
    body("name", "Invalid Name").exists().notEmpty(),
    body("email", "Invalid Email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invalid Password").exists().notEmpty(),
  ]),
  registerUser
);

/**
 * @route PUT /users/:id
 * @description Update user's profile
 * @body {name, phoneNumber, address}
 * @access Login required
 */
router.put(
  "/:id",
  loginRequired,
  validate([param("id").exists().isString().custom(checkObjectId)]),
  updateUser
);

/**
 * @route GET /users/me
 * @description Get current user Info
 * @access Login required
 **/
router.get("/", loginRequired, getCurrentUser);

/**
 * @route PUT /users/addcart
 * @description Add product to user's cart
 * @access Login required
 */
router.patch("/addcart", loginRequired, addProductToCart);

/**
 * @route GET /users/history
 * @description Get payment'history
 * @access Login required
 */
router.get("/history", loginRequired, getHistory);

module.exports = router;
