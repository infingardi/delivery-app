const { SalesProduct, Product } = require('../../database/models');

async function getSalesProducts(id) {
  const sales = await SalesProduct.findAll({ 
    where: { saleId: id },
    include: [{
      as: 'product',
      model: Product,
    }], 
  });
  return sales;
}

module.exports = { getSalesProducts };
