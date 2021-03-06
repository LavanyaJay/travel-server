const Sequelize = require("sequelize");
const db = require("../db");
const City = require("../city/model");
const Category = require("../category/model");
const Itinerary = require("../itinerary/model");
const Attractions = db.define(
  "attractions",
  {
    placeName: {
      type: Sequelize.STRING
    },
    placeDesc: {
      type: Sequelize.TEXT
    },
    placeImage: {
      type: Sequelize.TEXT
    },
    openDays: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    openingTime: {
      type: Sequelize.TIME
    },
    closingTime: {
      type: Sequelize.TIME
    },
    duration: {
      type: Sequelize.TIME
    },
    rating: {
      type: Sequelize.DECIMAL
    }
  },
  {
    tableName: "attractions"
  }
);
City.hasMany(Attractions);
Attractions.belongsTo(City);

Category.hasMany(Attractions);
Attractions.belongsTo(Category);

Attractions.hasMany(Itinerary);
Itinerary.belongsTo(Attractions);

module.exports = Attractions;
