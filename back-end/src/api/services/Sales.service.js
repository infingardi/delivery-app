const { Sales } = require('../../database/models');

async function getAllSalesSeller(id) {
    const sales = await Sales.findAll({ where: { sellerId: id } });
    return sales;
}

async function getAllSalesCustomer(id) {
    const sales = await Sales.findAll({ where: { userId: id } });
    return sales;
}

module.exports = { getAllSalesSeller, getAllSalesCustomer };
