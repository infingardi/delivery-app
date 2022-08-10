const { statusMessage } = require('../utils/functions');
const { validateLogin, createToken } = require('../services/User.service');

const validateLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await validateLogin(email, password);
  if (!user) return next(statusMessage(404, 'Not found'));

  const token = createToken(user);
  return res.status(200).json({...user, token});
};

module.exports = {
  validateLoginController,
};
