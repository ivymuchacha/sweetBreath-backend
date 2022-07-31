"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Features",
      [
        {
          ProductId: 1,
          name: "3 入",
          stock: 10,
          price: 300,
          promo_price: 270,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ProductId: 2,
          name: "4 吋",
          stock: 5,
          price: 400,
          promo_price: 350,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ProductId: 3,
          name: "4 吋",
          stock: 5,
          price: 400,
          promo_price: 350,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ProductId: 4,
          name: "2 入",
          stock: 5,
          price: 80,
          promo_price: null,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ProductId: 5,
          name: "4 吋",
          stock: 2,
          price: 500,
          promo_price: 450,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ProductId: 6,
          name: "1 入",
          stock: 10,
          price: 120,
          promo_price: 99,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Features", null, {});
  },
};
