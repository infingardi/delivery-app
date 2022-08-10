const md5 = require('md5');
const { User } = require('../../database/models');
const jwt = require('jsonwebtoken');

async function validateLogin(emailLogin, password) {
  const convertedPassword = md5(password).toString();
  const user = await User.findOne({ where: { email: emailLogin, password: convertedPassword } });

  const { email, name, role } = user;
  return { email, name, role };
}

function createToken(user) {
  const token = jwt.sign({...user}, 'password');
  return token;
}

module.exports = {
  validateLogin,
  createToken
};