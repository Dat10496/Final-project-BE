const { catchAsync } = require("../helpers/utils");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


const redirectToClient = catchAsync(async (req, res, next) => {
  let googleId = req.user.googleId;
  googleId = jwt.sign({ _id: googleId }, JWT_SECRET_KEY);

  const redirectUrl = `${process.env.REDIRECT_CLIENT_URL}?googleId=${googleId}`;
  res.redirect(redirectUrl);
});

module.exports = redirectToClient;
  