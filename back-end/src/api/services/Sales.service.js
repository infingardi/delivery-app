const { Sale } = require('../../database/models');

async function getAllSalesSeller(id) {
    const sales = await Sale.findAll({ where: { sellerId: id } });
    return sales;
}

async function getAllSalesCustomer(id) {
    const sales = await Sale.findAll({ where: { userId: id } });
    return sales;
}
async function getSale(id) {
    const sale = await Sale.findOne({ where: { id } });
    return sale;
}

module.exports = { getAllSalesSeller, getAllSalesCustomer, getSale };
