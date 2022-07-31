"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.User);
      Orders.hasMany(models.OrderItem);
    }
  }
  Orders.init(
    {
      UserId: DataTypes.INTEGER,
      order_number: DataTypes.INTEGER,
      buyer_fullname: DataTypes.STRING,
      buyer_email: DataTypes.STRING,
      buyer_phone: DataTypes.INTEGER,
      postal_code: DataTypes.INTEGER,
      buyer_address: DataTypes.STRING,
      is_paid: DataTypes.BOOLEAN,
      is_sent: DataTypes.BOOLEAN,
      is_done: DataTypes.BOOLEAN,
      is_cancel: DataTypes.BOOLEAN,
      status: DataTypes.STRING,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
