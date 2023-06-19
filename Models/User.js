const sequelize = require("sequelize");
const db = require("./index");

const User = db.define(
  "users",
  {
    first_name: {
      type: sequelize.STRING,
    },
    last_name: {
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
    },
    cell_phone: {
      type: sequelize.NUMBER,
    },
    age: {
      type: sequelize.NUMBER,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);
module.exports = User;
