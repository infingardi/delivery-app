const { Sale } = require('../../database/models');

 async function getAllSellers() {
    const sales = await Sale.findAll();
    return sales;
}

module.exports = { getAllSellers };
