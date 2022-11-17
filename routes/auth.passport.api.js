const express = require("express");
const router = express.Router();
const passport = require("passport");
const { loginWithGoogle } = require("../controllers/auth.controllers");
const { sendResponse } = require("../helpers/utils");
const redirectToClient = require("../passport/redirectToClient");

/**
 * @route POST /auth/google/login/success
 * @description Get user's information after login by google
 */
router.post("/login/success", loginWithGoogle);

/**
 * @route GET /auth/google
 * @description Direct to login google page
 */
router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

/**
 * @route GET /auth/google/login/failed
 * @description Response if login error
 */
router.get("/login/failed", function (req, res, next) {
  sendResponse(res, 401, false, null, true, "Login with google failed");
});

/**
 * @route GET /auth/google/callback
 * @description Receive google'response after login via google account
 */
router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect:
      "https://sneaker-app-dat.herokuapp.com/v1/auth/google/login/failed",
  }),
  redirectToClient
);

module.exports = router;
