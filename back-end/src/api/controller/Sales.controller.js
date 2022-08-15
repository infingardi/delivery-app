const SalesController = require('../services/Sales.service');

const getAllSalesUser = async (req, res, _next) => {
    const { id } = req.body;
    const sales = await SalesController.getAllSalesCustomer(id);

    return res.status(200).json(sales);
};

const getAllSalesSeller = async (req, res, _next) => {
    const { id } = req.body;
    const sales = await SalesController.getAllSalesSeller(id);

    return res.status(200).json(sales);
};

const getSale = async (req, res, _next) => {
    const { id } = req.params;
    const sale = await SalesController.getSale(id);

    return res.status(200).json(sale);
};

module.exports = {
    getAllSalesUser,
    getAllSalesSeller,
    getSale,
};