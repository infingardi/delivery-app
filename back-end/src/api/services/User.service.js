const md5 = require('md5');
const { User } = require('../../database/models')

async function validateLogin(email, password) {
  const convertedPassword = md5(password).toString();
  console.log(convertedPassword);
  const user = await User.findOne({ where: { email, password: convertedPassword }});
  return user;
}


module.exports = {
  validateLogin
};