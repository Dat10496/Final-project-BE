const { catchAsync, sendResponse, AppError } = require("../helpers/utils");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");

const authControllers = {};

authControllers.loginAsUser = catchAsync(async (req, res, next) => {
  // Get data from client
  const { email, password } = req.body;

  // Validation
  let user = await User.findOne({ email }, "+password");
  if (!user) throw new AppError(400, "Invalid Credential", "User Login Error");

  // Process
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError(400, "Wrong Password", "Login Error");
  const accessToken = await user.generateToken();

  // Send Response
  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "User Login Successfully"
  );
});

authControllers.loginWithGoogle = catchAsync(async (req, res, next) => {
  let { googleId } = req.body;

  jwt.verify(googleId, JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        throw new AppError(401, "Login Error", "Login with google error");
      }
    }

    googleId = payload._id;
  });

  // Process
  let user = await User.findOne({ googleId: googleId });
  if (!user)
    throw new AppError(400, "Login Error", "User Login with Google Error");

  const accessToken = await user.generateToken();

  // Send Response
  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "User Login Successfully"
  );
});

module.exports = authControllers;
