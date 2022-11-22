'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          username: "Micael",
          password: "$2b$08$$2b$08$hdejPD96EeiDKv1FLsVGAeq6hQStSAiSKTzwmXfWP7PX876uHsoWC",
          accountId: 1,
        },
        {
          username: "Joaquim",
          password: "$2b$08$FLA.xycYoID0eTZB9lDLOO.86jrz2aZ0ZOa2ZZi/JESN7OFyl2.pe",
          accountId: 2,
        },
        {
          username: "Jessica",
          password: "$2b$08$pFP4Lv6bd3qI8eWkvbmFJOe83qMuwVE2j5Rk5VH61OiMxWi5MjQF6",
          accountId: 3,
        },
      ],
      {});
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
