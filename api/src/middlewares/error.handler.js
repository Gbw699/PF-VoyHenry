function errorHandler(err, req, res, next) {
  res.status(err.errorCode || 400).json({
    message: err.message,
    stack: err.stack,
  });
}

function CustomError(message, errorCode) {
  const error = new Error(message);
  error.errorCode = errorCode;
  return error;
}

module.exports = {
  errorHandler,
  CustomError
}
