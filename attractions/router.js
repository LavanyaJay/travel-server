const { Router } = require("express");
const moment = require("moment");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Attractions = require("./model");
const City = require("../city/model");
const RejectedAttractions = require("../rejectedAttractions/model");
const Itinerary = require("../itinerary/model");

router.post("/attraction", async (req, res, next) => {
  const categoryIdAll = req.body.checked.map(id => parseInt(id));
  const cityName = req.body.city;
  const cityId = await City.findOne({
    where: {
      name: cityName
    }
  });
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  function convertToMinutes(time) {
    return parseInt(time.slice(0, 2) * 60) + parseInt(time.slice(3, 5));
  }

  function convertToDBTime(mins) {
    const hh = Math.floor(mins / 60);
    const mm = mins % 60;
    const dbTime = hh + ":" + mm + ":" + "00";
    return dbTime;
  }

  const timeAvailable = convertToMinutes(endTime) - convertToMinutes(startTime);

  //Get today
  const now = moment();
  const today = now.format("dddd").toString();
  const newday = today.split();

  //Extract all records for the city with required preferences and within time

  let allAttractions = await Attractions.findAll({
    where: {
      cityId: cityId.dataValues.id,
      categoryId: {
        [Op.or]: categoryIdAll
      },
      [Op.not]: {
        openingTime: {
          [Op.gt]: endTime
        }
      },
      [Op.not]: {
        closingTime: {
          [Op.lt]: startTime
        }
      },
      openDays: {
        [Op.contains]: newday
      }
    }
  });
  console.log(allAttractions.length);

  //Delete the previous itinerary
  const itinerary = await Itinerary.findAll();
  itinerary
    ? await Itinerary.destroy({
        where: {},
        truncate: "true"
      })
    : null;

  if (allAttractions.length > 0) {
    let time = 0;
    let selected = [];
    let itStartTime = 0;
    let itEndTime = 0;

    const rejectedAttractions = await RejectedAttractions.findAll({});

    //Filter attractions that are rejected by the user
    for (let i = 0; i < rejectedAttractions.length; i++) {
      for (let j = 0; j < allAttractions.length; j++) {
        if (allAttractions[j].placeName === rejectedAttractions[i].name) {
          allAttractions.splice(j, 1);
        }
      }
    }
    //if attrations after filter is null, then return empty
    const attractionsForpreference = allAttractions;
    if (attractionsForpreference.length === 0) {
      return res.json(0);
    }

    //Loop through preferred attraction and build the itinerary
    for (let i = 0; i < categoryIdAll.length; i++) {
      //filter the attractions by current category
      const attractionsForCurrentCategory = attractionsForpreference.filter(
        attraction => attraction.categoryId === categoryIdAll[i]
      );

      //sort it based on rating : highest -> lowest
      //points.sort(function(a, b){return a - b});
      attractionsForCurrentCategory.sort(function(a, b) {
        return b.rating - a.rating;
      });

      //add exactly 1 attraction to itinerrary
      for (let j = 0; j < attractionsForCurrentCategory.length; j++) {
        const max = attractionsForCurrentCategory[j];
        const durationToSee = convertToMinutes(max.dataValues.duration);

        //check if new attraction will fit in currently available time
        //if yes, then add to iti ELSE go to next attraction in the same
        //category
        if (time + durationToSee <= timeAvailable) {
          selected.push(max);
          time += durationToSee + 30;
          if (selected.length === 1) {
            itStartTime = convertToMinutes(startTime);
            itEndTime = itStartTime;
          } else {
            itStartTime = itEndTime + 30;
          }

          itEndTime = itStartTime + durationToSee;

          const dbStartTime = convertToDBTime(itStartTime);
          const dbEndTime = convertToDBTime(itEndTime);

          const itRec = await Itinerary.create({
            placeName: max.dataValues.placeName,
            fromTime: dbStartTime,
            toTime: dbEndTime,
            attractionId: max.dataValues.id
          });

          break;
        } //if < timeavailable
      } //for j
    } //for i
    return res.json(selected);
  } else {
    return res.json(0);
  }
});
module.exports = router;

module.exports = router;
