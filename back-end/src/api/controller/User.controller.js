const { statusMessage } = require('../utils/functions');
const service = require('../services/User.service');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await service.validateLogin(email, password);
  if (!user) return next(statusMessage(404, 'Not found'));

  const token = service.createToken(user);
  return res.status(200).json({ ...user, token });
};

const createCustomer = async (req, res, _next) => {
  const { email, password, name } = req.body;
  await service.createUser(name, email, password, 'customer');
  return res.status(201).json();
};

module.exports = {
  validateLogin,
  createCustomer,
};
