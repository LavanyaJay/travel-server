const Sequelize = require("sequelize");
const db = require("../db");
const City = require("../city/model");
const Category = require("../category/model");
const PlacesOfInterests = db.define(
  "placesofinterests",
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
      type: Sequelize.INTEGER
    }
  },
  {
    tableName: "placesofinterests"
  }
);
City.hasMany(PlacesOfInterests);
PlacesOfInterests.belongsTo(City);
Category.hasMany(PlacesOfInterests);
PlacesOfInterests.belongsTo(Category);
module.exports = PlacesOfInterests;
