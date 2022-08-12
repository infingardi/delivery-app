const { statusMessage } = require('../utils/functions');
const { createUser, validateLogin, createToken } = require('../services/CreateUser.service');

const validateLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await validateLogin(email, password);
  if (!user) return next(statusMessage(404, 'Not found'));

  const token = createToken(user);
  return res.status(200).json({ ...user, token });
};

const createAdmin = async (req, _res, next) => {
  const { name, email, password, role } = req.body;
  const createdUser = createUser(name, email, password, role);
  return next(statusMessage(201, createdUser));
};

module.exports = {
  validateLoginController,
  createAdmin,
};
