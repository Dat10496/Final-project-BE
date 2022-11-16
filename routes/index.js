const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to CoderSchool!");
});

const userApi = require("./user.api");
router.use("/users", userApi);

const itemApi = require("./item.api");
router.use("/items", itemApi);

const authApi = require("./auth.api");
router.use("/auth", authApi);

const paymentApi = require("./payment.api");
router.use("/payment", paymentApi);

const authPassportApi = require("./auth.passport.api");
router.use("/auth/google", authPassportApi);

module.exports = router;
