const Sequelize = require("sequelize");
const db = require("../db");
const Category = db.define(
  "category",
  {
    name: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: "category"
  }
);
module.exports = Category;
