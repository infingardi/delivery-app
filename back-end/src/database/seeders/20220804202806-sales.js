'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales', [{
      user_id: 3,
      seller_id: 4,
      total_price: 6,
      delivery_address: 'Rua augusta',
      delivery_number: '99999999',
      sale_date: '2018-12-25 23:50:55.999',
      status: 'sell'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
