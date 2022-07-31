"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "OrderItems",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        OrderId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        order_number: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        product_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        product_image: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        product_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        product_feature: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        product_price: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        product_quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        engine: "MYISAM",
        charset: "utf8",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("OrderItems");
  },
};
