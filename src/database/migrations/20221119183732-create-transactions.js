'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      debitedAccountId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
      creditedAccountId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Transactions');
  },
};
