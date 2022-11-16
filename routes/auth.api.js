const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validator");
const { loginAsUser } = require("../controllers/auth.controllers");
const { body } = require("express-validator");

/**
 * @route POST /users/login
 * @description Login with username and password
 * @body {email, password}
 * @access Public
 */
router.post(
  "/login",
  validate([
    body("email", "Invalid Email")
      .exists()
      .normalizeEmail({ gmail_remove_dots: false })
      .isEmail(),
    body("password", "Invalid Password").exists().notEmpty(),
  ]),
  loginAsUser
);

module.exports = router;
