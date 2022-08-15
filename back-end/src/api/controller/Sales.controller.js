const SalesService = require('../services/Sales.service');
const SalesProductService = require('../services/SalesProduct.service');

const getAllSalesUser = async (req, res, _next) => {
    const { id } = req.body;
    const sales = await SalesService.getAllSalesCustomer(id);

    return res.status(200).json(sales);
};

const getAllSalesSeller = async (req, res, _next) => {
    const { id } = req.body;
    const sales = await SalesService.getAllSalesSeller(id);

    return res.status(200).json(sales);
};

const getOrderAndProducts = async (req, res, _next) => {
    const { id } = req.params;
    const saleOrder = await SalesService.getOrder(id);
    const sales = await SalesProductService.getSalesProducts(id);
    return res.status(200).json({ saleOrder, sales });
};

const updateStatus = async (req, res, _next) => {
    const { status } = req.body;
    const { id } = req.params;
    await SalesService.updateStatus(id, status);
    return res.status(204).json({ message: 'Success' });
};

module.exports = {
    getAllSalesUser,
    getAllSalesSeller,
    getOrderAndProducts,
    updateStatus,
};