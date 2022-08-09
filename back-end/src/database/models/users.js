
module.exports = (sequelize, DataTypes) => {
  console.log(sequelize, DataTypes);
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
};