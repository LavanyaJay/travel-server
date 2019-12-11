const Sequelize = require("sequelize");
const db = require("../db");
const RejectedAttractions = db.define(
  "rejectedAttractions",
  {
    name: {
      type: Sequelize.TEXT
    }
  },
  {
    tableName: "rejectedAttractions"
  }
);
module.exports = RejectedAttractions;
