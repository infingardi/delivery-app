'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SalesProducts', [{
      sale_id: 3,
      product_id: 4,
      quantity: 6,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  }
};
