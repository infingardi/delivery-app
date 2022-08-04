'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sales.init({
    user_id: DataTypes.NUMBER,
    seller_id: DataTypes.NUMBER,
    total_price: DataTypes.NUMBER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sales',
    underscored: true,
    sequelize: db,
    timestamps: false,
  });
  
  Sales.belongsTo(users, {foreignKey: 'user_id', as: 'userId' })
  Sales.belongsTo(users, {foreignKey: 'seller_id', as: 'sellerId' })
  
  return Sales;
};