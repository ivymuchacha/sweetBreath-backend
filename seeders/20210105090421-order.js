"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orders",
      [
        {
          UserId: 2,
          order_number: 160976576433222,
          buyer_fullname: "安安",
          buyer_email: "AnnAnn@AnnAnn.com",
          buyer_phone: 12345678,
          postal_code: 1111,
          buyer_address: "安安里安安路",
          is_paid: null,
          is_sent: null,
          is_done: null,
          is_cancel: null,
          status: null,
          total: 270,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 3,
          order_number: 16097654685362,
          buyer_fullname: "肯肯肯",
          buyer_email: "ken@kenken.com",
          buyer_phone: 12345679,
          postal_code: 1111,
          buyer_address: "肯肯里肯肯路",
          is_paid: null,
          is_sent: null,
          is_done: null,
          is_cancel: null,
          status: null,
          total: 860,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orders", null, {});
  },
};
