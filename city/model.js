const Sequelize = require("sequelize");
const db = require("../db");
const City = db.define(
  "city",
  {
    name: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: "city"
  }
);
module.exports = City;
