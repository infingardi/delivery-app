module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.NUMBER,
    sellerId: DataTypes.NUMBER,
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'Sales',
    underscored: true,
    timestamps: false,
  });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, {
      // through: Sale,
      foreignKey: 'userId',
      as: 'user',
    });
    models.Sale.belongsTo(models.User, {
      // through: Sale,
      foreignKey: 'sellerId',
      as: 'seller',
    });
  }

  return Sale;
};