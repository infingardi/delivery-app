const { statusMessage } = require('../utils/functions');
const { validateLogin } = require('../services/User.service');

const validateLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await validateLogin(email, password);
  if (!user) return next(statusMessage(404, 'user not found'));
  return res.status(200).json(user);
};

module.exports = {
  validateLoginController,
};