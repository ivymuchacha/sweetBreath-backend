"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password:
            "$2b$10$CtZYFW6ffhnWOGQMGRMdfO32FllthfXU/qoFwryNU/SaB0KddU3ea",
          fullname: "admin",
          email: "admin@admin.com",
          address: null,
          birthday: null,
          is_admin: true,
          status: true,
          socialmedia_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "QQQ",
          password:
            "$2b$10$592AsnBunpO9K0bYbehrJevlf/A8ElP1TKJuprUMQ0rQPP5mmcH/G",
          fullname: "安安",
          email: "AnnAnn@AnnAnn.com",
          address: null,
          birthday: null,
          is_admin: false,
          status: true,
          socialmedia_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Ken",
          password:
            "$2b$10$Bt38JSYfRnmcnKV88PaN7e/C0RFfj0iWv1X6c2lZLLxgX46HQ.s/.",
          fullname: "肯肯肯",
          email: "ken@kenken.com",
          address: "肯肯路肯肯街99號",
          birthday: null,
          is_admin: false,
          status: true,
          socialmedia_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
