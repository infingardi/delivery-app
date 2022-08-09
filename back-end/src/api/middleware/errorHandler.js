const errorHandler = (err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  console.error(err);
  return res
    .status(500)
    .json({ message: 'Internal Error Server' });
};

module.exports = errorHandler;