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
  console.log("inside");
  const categoryIdAll = req.body.checked.map(id => parseInt(id));
  console.log("preferences: ", categoryIdAll);

  const cityName = req.body.city;
  const cityId = await City.findOne({
    where: {
      name: cityName
    }
  });
  console.log("cityId: ", cityId.dataValues.id);

  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  console.log("start:", startTime);
  console.log("start:", endTime);

  const timeAvailable =
    parseInt(endTime.slice(0, 2) * 60) +
    parseInt(endTime.slice(3, 5)) -
    (parseInt(startTime.slice(0, 2) * 60) + parseInt(startTime.slice(3, 5)));
  console.log("timeAvailable: ", timeAvailable);

  //Get today
  const now = moment();
  const today = now.format("dddd").toString();
  const newday = today.split();
  console.log(newday);
  //Extract all records for the city and required preferences and within time

  const allAttractions = await Attractions.findAll({
    where: {
      cityId: cityId.dataValues.id,
      categoryId: {
        [Op.or]: categoryIdAll
      },
      openingTime: {
        [Op.lte]: startTime
      },
      openDays: {
        [Op.contains]: newday
      }
    }
  });
  console.log(allAttractions.length);

  const rejectedAttractions = await RejectedAttractions.findAll({});

  let time = 0;
  let selected = [];
  let itStartTime = 0;
  let itEndTime = 0;
  /* parseInt(startTime.slice(0, 2) * 60) + parseInt(startTime.slice(3, 5)); */
  console.log("Ity startTime first: ", itStartTime);
  console.log("Ity endTime first: ", itEndTime);
  //Delete the existing itinerary
  const itinerary = await Itinerary.findAll();
  itinerary
    ? await Itinerary.destroy({
        where: {},
        truncate: "true"
      })
    : null;
  //Loop through preferences
  for (let i = 0; i < categoryIdAll.length; i++) {
    let attractionsForpreference = await Attractions.findAll({
      where: {
        categoryId: categoryIdAll[i]
      }
    });
    console.log("each category length: ", attractionsForpreference.length);

    //Filter attractions that are rejected by the user
    for (let i = 0; i < rejectedAttractions.length; i++) {
      for (let j = 0; j < attractionsForpreference.length; j++) {
        if (
          attractionsForpreference[j].placeName === rejectedAttractions[i].name
        ) {
          attractionsForpreference.splice(j, 1);
        }
      }
    }

    //Exit if no records exist for a selected preference
    if (attractionsForpreference.length > 0) {
      //Loop through rating
      const max = attractionsForpreference.reduce(function(prev, current) {
        return prev.rating > current.rating ? prev : current;
      });
      console.log("place: ", max.dataValues.placeName);

      const durationToSee =
        parseInt(max.dataValues.duration.slice(0, 2) * 60) +
        parseInt(max.dataValues.duration.slice(3, 5));

      console.log("totalTime: ", time + durationToSee);

      if (time + durationToSee < timeAvailable) {
        selected.push(max);

        //Add the record to itinerary(placeName, startTime and endTime)
        if (selected.length === 1) {
          itStartTime =
            parseInt(startTime.slice(0, 2) * 60) +
            parseInt(startTime.slice(3, 5));
          itEndTime = itStartTime;
        } else {
          itStartTime = itEndTime + 30;
        }

        console.log("Ity startTime: ", itStartTime);

        itEndTime = itStartTime + durationToSee;
        console.log("Ity endTime: ", itEndTime);

        const dbStartTimeHH = Math.floor(itStartTime / 60);
        const dbStartTimeMM = itStartTime % 60;
        const dbEndTimeHH = Math.floor(itEndTime / 60);
        const dbEndTimeMM = itEndTime % 60;
        const dbStartTime = dbStartTimeHH + ":" + dbStartTimeMM + ":" + "00";
        const dbEndTime = dbEndTimeHH + ":" + dbEndTimeMM + ":" + "00";
        const itRec = await Itinerary.create({
          placeName: max.dataValues.placeName,
          fromTime: dbStartTime,
          toTime: dbEndTime,
          attractionId: max.dataValues.id
        });
      }
    } //if
  } //for

  return res.json(selected);
});
module.exports = router;

module.exports = router;
