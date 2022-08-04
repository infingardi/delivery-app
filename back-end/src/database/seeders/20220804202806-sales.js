'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [{
      userId: 3,
      sellerId: 4,
      totalPrice: 6,
      deliveryAddress: 'Rua augusta',
      deliveryNumber: '99999999',
      saleDate: '20-03-1999',
      status: 'sell'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
