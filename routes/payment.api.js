const express = require("express");
const router = express.Router();
const {
  createPayment,
  getPaymentDetail,
} = require("../controllers/payment.controllers");
const { loginRequired } = require("../middlewares/authentication");
const { validate, checkObjectId } = require("../middlewares/validator");
const { body, param } = require("express-validator");

/**
 * @route POST /payment
 * @description Post info of user's payment
 * @access Login
 */
router.post("/", loginRequired, createPayment);

/**
 * @route GET /payment
 * @description Get payment's detail
 * @access Login
 */
router.get(
  "/:id",
  loginRequired,
  validate([param("id").exists().isString().custom(checkObjectId)]),
  getPaymentDetail
);
module.exports = router;
