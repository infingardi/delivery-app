const service = require('../services/User.service');

const getAllSellers = async (req, res, _next) => {
  const users = await service.getAllSellers();
  return res.status(200).json(users);
};

module.exports = {
  getAllSellers,
};