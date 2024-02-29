function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode = err.statusCode || 500;

  res.setHeader("Content-Type", "application/json");

  res.status(statusCode).json({
    error: {
      message: err.message || "Internal Server Error",
      code: err.code,
    },
  });
}
