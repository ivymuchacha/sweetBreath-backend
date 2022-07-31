"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Features",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        ProductId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        stock: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        price: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        promo_price: {
          type: Sequelize.INTEGER,
        },
        is_deleted: {
          defaultValue: false,
          type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Features");
  },
};
