const utilsHelper = {};

utilsHelper.sendResponse = (res, status, success, data, errors, message) => {
  const response = {};

  if (success) response.success = success;
  if (data) response.data = data;
  if (errors) response.err = errors;
  if (message) response.message = message;

  res.status(status).json(response);
};

utilsHelper.catchAsync = (func) => (res, req, next) => {
  func(res, req, next).catch((err) => next(err));
};

class AppError extends Error {
  constructor(statusCode, message, errorType) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    //  All errors using this class are operational errors
    this.isOperational = true;
    // Create a stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

utilsHelper.AppError = AppError;

module.exports = utilsHelper;
