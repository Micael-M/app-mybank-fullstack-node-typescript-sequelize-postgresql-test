module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    accountId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
  });

  User.associate = (models) => {
    User.belongsTo(models.Account, { foreignKey: 'accountId', as: 'Accounts' });
  };

  return User;
};
