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
  const token = service.createToken({ email, password, name, role: 'customer' });

  return res.status(201).json({ token });
};

const createAdmin = async (req, res, _next) => {
  const { name, email, password, role } = req.body;
  await service.createUser(name, email, password, role);
  const token = service.createToken({ name, email, password, role });

  return res.status(201).json({ token });
};

const validateUser = async (req, _res, next) => {
  const { email, name } = req.body;
  const user = await service.validateNameOrEmail(name, email);
  if (user) next(statusMessage(409, 'Already registered'));
  next();
};

module.exports = {
  validateLogin,
  createCustomer,
  validateUser,
  createAdmin,
};
