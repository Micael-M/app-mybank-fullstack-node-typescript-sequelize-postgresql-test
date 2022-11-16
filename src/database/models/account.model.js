module.exports = (sequelize, DataTypes) => {
  const AccountModel = sequelize.define('Account', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 10000,
      allowNull: false,
    },
  });
  return AccountModel;
};