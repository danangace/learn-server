'use strict';
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {
      sequelize
    }
  )
  User.associate = function (models) {}
  return User;
};