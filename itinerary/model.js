const Sequelize = require("sequelize");
const db = require("../db");
const City = require("../city/model");
const Category = require("../category/model");
const Itinerary = db.define(
  "itinerary",
  {
    placeName: {
      type: Sequelize.STRING
    },
    fromTime: {
      type: Sequelize.TIME
    },
    toTime: {
      type: Sequelize.TIME
    }
  },
  {
    tableName: "itinerary"
  }
);

module.exports = Itinerary;
