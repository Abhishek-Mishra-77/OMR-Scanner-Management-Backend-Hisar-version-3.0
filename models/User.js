// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  max: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  min: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  fileId: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
});

module.exports = User;
