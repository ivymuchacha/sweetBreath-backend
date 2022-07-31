"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Orders",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        UserId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        order_number: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        buyer_fullname: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        buyer_email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        buyer_phone: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        postal_code: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        buyer_address: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        is_paid: {
          type: Sequelize.BOOLEAN,
        },
        is_sent: {
          type: Sequelize.BOOLEAN,
        },
        is_done: {
          type: Sequelize.BOOLEAN,
        },
        is_cancel: {
          type: Sequelize.BOOLEAN,
        },
        status: {
          type: Sequelize.STRING,
        },
        total: {
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
    await queryInterface.dropTable("Orders");
  },
};
