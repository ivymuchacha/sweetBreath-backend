"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "常溫蛋糕",
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "期間限定",
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "熱銷經典",
          is_deleted: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
