'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          username: "micael",
          password: "123456",
          accountId: 1,
        },
        {
          username: "joaquim",
          password: "123456",
          accountId: 2,
        },
        {
          username: "jessica",
          password: "123456",
          accountId: 3,
        },
      ],
      {});
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
