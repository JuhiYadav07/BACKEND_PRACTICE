// Small helpers so every controller sends responses in the same shape.

function success(res, data, statusCode = 200) {
  return res.status(statusCode).json({ success: true, data });
}

function error(res, err) {
  console.error(err);
  const statusCode = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(statusCode).json({ success: false, message });
}

module.exports = { success, error };
