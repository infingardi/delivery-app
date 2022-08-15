const { Sale, SalesProduct } = require('../../database/models');

async function getAllSalesSeller(id) {
    const sales = await Sale.findAll({ where: { sellerId: id } });
    return sales;
}

async function getAllSalesCustomer(id) {
    const sales = await Sale.findAll({ where: { userId: id } });
    return sales;
}

async function createSale({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, cart }) {
    const obj = {
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
    };
    const sale = await Sale.create({ ...obj });
    Object.values(cart).forEach(async ({ id, quantity }) => {
        await SalesProduct.create({ saleId: sale.dataValues.id, productId: id, quantity });
    });
    return sale;
}

module.exports = { getAllSalesSeller, getAllSalesCustomer, createSale };
