module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    urlImage: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'products',
    underscored: true,
    timestamps: false,
  })
  
  return Product;
};