"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Orders);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      birthday: DataTypes.DATE,
      is_admin: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
      socialmedia_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
