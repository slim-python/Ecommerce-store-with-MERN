const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  //mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 404);
  }

  //wrong JWT error
  if (err.name === "JsonwebTokenError") {
    const message = `Json Web Token is invalid, try again`;
    err = new ErrorHandler(message, 404);
  }

  //JWT expire error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, try again`;
    err = new ErrorHandler(message, 404);
  }

  res.status(
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    })
  );
};
