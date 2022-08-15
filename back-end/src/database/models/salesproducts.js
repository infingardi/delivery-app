module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true 
    },
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sale, {
      // through: SalesProduct,
      foreignKey: 'saleId',
      as: 'sale'
    });
    SalesProduct.belongsTo(models.Product, {
      // through: SalesProduct,
      foreignKey: 'productId',
      as: 'product'
    });
  }
  return SalesProduct;
}