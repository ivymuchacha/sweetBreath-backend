"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "OrderItems",
      [
        {
          OrderId: 1,
          order_number: 160976576433222,
          product_id: 1,
          product_image: "https://imgur.com/lxWa1BS.png",
          product_name: "可麗露",
          product_feature: "3 入",
          product_price: 270,
          product_quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          OrderId: 2,
          order_number: 16097654685362,
          product_id: 1,
          product_image: "https://imgur.com/lxWa1BS.png",
          product_name: "可麗露",
          product_feature: "3 入",
          product_price: 270,
          product_quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          OrderId: 2,
          order_number: 16097654685362,
          product_id: 4,
          product_image: "https://imgur.com/YNICHSc.jpg",
          product_name: "可可貝果",
          product_feature: "2 入",
          product_price: 80,
          product_quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("OrderItems", null, {});
  },
};
