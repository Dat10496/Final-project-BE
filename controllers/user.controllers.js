const User = require("../models/User");
const Payment = require("../models/Payment");
const { sendResponse, AppError, catchAsync } = require("../helpers/utils");
const bcrypt = require("bcryptjs");

const userControllers = {};

userControllers.registerUser = catchAsync(async (req, res, next) => {
  // Get data from client
  let { name, email, password } = req.body;

  // Validation
  let user = await User.findOne({ email });
  if (user)
    throw new AppError(400, "User already exist", "Register user error");

  // Process
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  user = await User.create({ name, email, password });
  const accessToken = await user.generateToken();

  // Send response
  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "Create User successfully"
  );
});

userControllers.updateUser = catchAsync(async (req, res, next) => {
  // Get data from client
  const { name, phoneNumber, address } = req.body;

  // Validate
  const userId = req.params.id;
  let user = await User.findById(userId);
  if (!user) throw new AppError(404, "User not found", "Update User error");

  const allows = ["name", "phoneNumber", "address"];
  const allowsKeys = Object.keys(req.body);

  allowsKeys.forEach((field) => {
    if (!allows.includes(field))
      throw new AppError(401, "Path field invalid", "Update user error");
  });

  // Process
  user = await User.findByIdAndUpdate(
    userId,
    { name, phoneNumber, address },
    { new: true }
  );

  // Send Response
  return sendResponse(
    res,
    200,
    true,
    { user },
    null,
    "Update User successfully"
  );
});

userControllers.addProductToCart = catchAsync(async (req, res, next) => {
  // Get data from client
  const { cart } = req.body;
  const userId = req.userId;

  // Validate
  let user = await User.findById(userId);
  if (!user) throw new AppError(404, "User not found", "Update User error");

  // Process
  user = await User.findByIdAndUpdate(userId, { cart: cart }, { new: true });

  // Send Response
  return sendResponse(
    res,
    200,
    true,
    { user },
    null,
    "Add to cart successfully"
  );
});

userControllers.getCurrentUser = catchAsync(async (req, res, next) => {
  const currentUser = req.userId;

  const user = await User.findById(currentUser);
  if (!user)
    throw new AppError(400, "Current user not found", "Get current User error");

  return sendResponse(
    res,
    200,
    true,
    user,
    false,
    "Get current user successfully"
  );
});

userControllers.getHistory = catchAsync(async (req, res, next) => {
  const userId = req.userId;

  const user = await User.findById(userId);
  if (!user)
    throw new AppError(400, "Current user not found", "Get User history error");

  const history = await Payment.find({ user_id: userId }).sort({
    createdAt: -1,
  });

  return sendResponse(
    res,
    200,
    true,
    history,
    false,
    "Get user history successfully"
  );
});

module.exports = userControllers;
