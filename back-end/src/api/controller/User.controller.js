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

const validateUser = async (req, _res, next) => {
  const { email, name } = req.body;
  const user = await service.findByEmailOrName(name, email);
  if (user) next(statusMessage(409, 'Already registered'));
  next();
};

const createAdmin = async (req, _res, next) => {
  const { name, email, password, role } = req.body;
  const createdUser = service.createUser(name, email, password, role);
  return next(statusMessage(201, createdUser));
};

const getIdFromUser = async (req, res, _next) => {
  const { email, name } = req.body;
  const user = await service.findByEmailOrName(name, email);
  return res.status(200).json({ id: user.id });
};

module.exports = {
  validateLogin,
  createCustomer,
  validateUser,
  createAdmin,
  getIdFromUser,
};
