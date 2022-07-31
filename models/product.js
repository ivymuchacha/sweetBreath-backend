"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Feature);
      Product.belongsTo(models.Category);
    }
  }
  Product.init(
    {
      CategoryId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      info: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
