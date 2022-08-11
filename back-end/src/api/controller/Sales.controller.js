const SalesController = require('../services/Sales.service');

const getAllSales = async (req, res, _next) => {
    const sales = await SalesController.getAllSellers();

    return res.status(200).json(sales);
};

module.exports = {
    getAllSales,
};