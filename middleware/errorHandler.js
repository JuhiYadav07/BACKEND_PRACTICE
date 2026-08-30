// Catches anything that falls through and wasn't already handled
// in a controller's try/catch. Keep this mounted last in app.js.
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
}

module.exports = errorHandler;
