'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Transactions',
      [
        {
          debitedAccountId: 1,
          creditedAccountId: 2,
          value: 1222,
          createdAt: new Date(),
        },
        {
          debitedAccountId: 2,
          creditedAccountId: 1,
          value: 2222,
          createdAt: new Date(),
        },
        {
          debitedAccountId: 1,
          creditedAccountId: 3,
          value: 3333,
          createdAt: new Date(),
        },
      ],
      {});
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  },
};
