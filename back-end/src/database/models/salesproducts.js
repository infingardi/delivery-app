'use strict';
const {
  Model
} = require('sequelize');
const sales = require('./sales');
const users = require('./users');

module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalesProducts.init({
    sale_id: DataTypes.NUMBER,
    product_id: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'salesProducts',
    underscored: true,
    sequelize: db,
    timestamps: false,
  });

  SalesProducts.belongsTo(sales, {foreignKey: 'sale_id', as: 'saleId'})
  SalesProducts.belongsTo(sales, {foreignKey: 'product_id', as: 'productId'})

  return SalesProducts;
};