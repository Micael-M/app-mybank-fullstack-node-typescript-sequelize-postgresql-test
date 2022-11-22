module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    balance: {
      // defaultValue: 10000,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  });

  Account.associate = (models) => {
    Account.hasOne(models.User, { foreignKey: 'accountId', as: 'Users' });
    Account.hasMany(models.Transaction, { foreignKey: 'debitedAccountId', as: 'debited' });
    Account.hasMany(models.Transaction, { foreignKey: 'creditedAccountId', as: 'credited' });
  };

  return Account;
};
