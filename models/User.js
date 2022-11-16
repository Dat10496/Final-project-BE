const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = Schema(
  {
    googleId: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String },
    password: { type: String, select: false },

    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    cart: { type: Array, default: [] },

    isDeleted: { type: Boolean, default: false },
  },
  { timestamp: true }
);

userSchema.methods.toJSON = function () {
  const user = this._doc;

  delete user.password;
  delete user.isDeleted;

  return user;
};

// Generate token for user
userSchema.methods.generateToken = async function () {
  const accessToken = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return accessToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
