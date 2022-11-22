'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Accounts',
      [
        {
          balance: 10000,
        },
        {
          balance: 10000,
        },
        {
          balance: 10000,
        },
      ],
      {});
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  },
};
