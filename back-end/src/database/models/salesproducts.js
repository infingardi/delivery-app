'use strict';
const {
  Model
} = require('sequelize');
const sales = require('./sales');

module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  salesProducts.init({
    saleId: DataTypes.NUMBER,
    productId: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'salesProducts',
    underscored: true,
    sequelize: db,
    timestamps: false,
  });

  salesProducts.belongsTo(sales, {foreignKey: 'sale_id', as: 'saleId'})
  salesProducts.belongsTo(sales, {foreignKey: 'product_id', as: 'productId'})

  return salesProducts;
};