require("dotenv").config();

// Default admin
const DEFAULT_ADMIN = {
  email: process.env.EMAIL_ADMIN,
  password: process.env.PASSWORD_ADMIN,
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

module.exports = authenticate;
