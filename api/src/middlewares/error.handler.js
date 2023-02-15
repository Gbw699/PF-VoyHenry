function errorHandler(err, req, res, next) {
  res.status(err.status).json({
    message: err.error.message,
    stack: err.error.stack,
  });
}

module.exports = { errorHandler }
