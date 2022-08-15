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

const createSale = async (req, res, _next) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, cart } = req.body;

    const sale = await SalesController.createSale(
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
        cart
    );

    return res.status(201).json(sale);
};

module.exports = {
    getAllSalesUser,
    getAllSalesSeller,
    createSale
};