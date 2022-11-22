module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    debitedAccountId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    creditedAccountId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    value: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account, { foreignKey: 'debitedAccountId', as: 'debited' });
    Transaction.belongsTo(models.Account, { foreignKey: 'creditedAccountId', as: 'credited' });
  };

  return Transaction;
};
