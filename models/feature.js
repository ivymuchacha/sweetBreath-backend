"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feature.belongsTo(models.Product);
    }
  }
  Feature.init(
    {
      ProductId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      promo_price: DataTypes.INTEGER,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Feature",
    }
  );
  return Feature;
};
