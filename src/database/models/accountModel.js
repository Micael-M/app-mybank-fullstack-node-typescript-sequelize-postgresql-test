module.exports = (sequelize, DataTypes) => {
  const AccountModel = sequelize.define('Account', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    balance: {
      defaultValue: 10000,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
  return AccountModel;
};