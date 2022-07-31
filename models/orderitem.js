"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItem.belongsTo(models.Orders);
    }
  }
  OrderItem.init(
    {
      OrderId: DataTypes.INTEGER,
      order_number: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      product_image: DataTypes.STRING,
      product_name: DataTypes.STRING,
      product_feature: DataTypes.STRING,
      product_price: DataTypes.INTEGER,
      product_quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
