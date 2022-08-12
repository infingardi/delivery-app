const { Sales } = require('../../database/models');

 async function getAllSellers() {
    const sales = await Sales.findAll();
    return sales;
}

module.exports = { getAllSellers };
