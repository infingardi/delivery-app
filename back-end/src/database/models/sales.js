'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sales.init({
    userId: DataTypes.NUMBER,
    sellerId: DataTypes.NUMBER,
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sales',
    underscored: true,
    sequelize: db,
    timestamps: false,
  });
  
  sales.belongsTo(users, {foreignKey: 'user_id', as: 'userId' })
  sales.belongsTo(users, {foreignKey: 'seller_id', as: 'sellerId' })
  
  return sales;
};