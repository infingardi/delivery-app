const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');

async function validateLogin(emailLogin, password) {
  const convertedPassword = md5(password).toString();
  const user = await User.findOne({ where: { email: emailLogin, password: convertedPassword } });

  const { email, name, role } = user;
  return { email, name, role };
}

async function createUser(name, email, password, role) {
  await User.create({ name, email, password, role });
}

function createToken(user) {
  const token = jwt.sign({ ...user }, 'password');
  return token;
}

module.exports = {
  validateLogin,
  createUser,
  createToken,
};