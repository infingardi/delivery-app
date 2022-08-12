const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { User } = require('../../database/models');

async function validateLogin(emailLogin, password) {
  const convertedPassword = md5(password).toString();
  const user = await User.findOne({ where: { email: emailLogin, password: convertedPassword } });
  if (!user) return null;

  const { email, name, role } = user;
  return { email, name, role };
}

async function createUser(name, email, password, role) {
  const md5Password = md5(password).toString();
  await User.create({ name, email, password: md5Password, role });
}

function createToken(user) {
  const token = jwt.sign({ ...user }, 'secret_key');
  return token;
}

const validateNameOrEmail = (name, email) => {
  const user = User.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  return user;
};

module.exports = {
  validateLogin,
  createUser,
  createToken,
  validateNameOrEmail,
};