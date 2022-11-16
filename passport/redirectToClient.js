const { catchAsync } = require("../helpers/utils");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const redirectToClient = catchAsync(async (req, res, next) => {
  let googleId = req.user.googleId;
  googleId = jwt.sign({ _id: googleId }, JWT_SECRET_KEY);

  res.redirect(`https://sneaker-store-dat.netlify.app?googleId=${googleId}`);
});

module.exports = redirectToClient;
