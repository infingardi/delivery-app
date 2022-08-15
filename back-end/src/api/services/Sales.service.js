const { Sale, User } = require('../../database/models');

async function getAllSalesSeller(id) {
    const sales = await Sale.findAll({ where: { sellerId: id } });
    return sales;
}

async function getAllSalesCustomer(id) {
    const sales = await Sale.findAll({ where: { userId: id } });
    return sales;
}
async function getOrder(id) {
    const sale = await Sale.findOne({ 
        where: { id },
        include: [{
            model: User,
            as: 'seller',
            attributes: { exclude: ['password'] },
    }] });
    return sale;
}

module.exports = { getAllSalesSeller, getAllSalesCustomer, getOrder };
