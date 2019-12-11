const { Router } = require("express");
const moment = require("moment");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Attractions = require("./model");
const City = require("../city/model");
const RejectedAttractions = require("../rejectedAttractions/model");

router.post("/itinerary", async (req, res, next) => {
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
  const timeAvailable = parseInt(
    endTime.slice(0, 2) * 60 +
      endTime.slice(3, 5) -
      (startTime.slice(0, 2) * 60 + startTime.slice(3, 5) * 60)
  );
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

      const durationToSee = parseInt(
        max.dataValues.duration.slice(0, 2) * 60 +
          max.dataValues.duration.slice(3, 5)
      );
      console.log("totalTime: ", time + durationToSee);

      if (time + durationToSee < timeAvailable) {
        selected.push(max);
      }
    } //if
  } //for

  //const validAttractions =

  //aHours = endTime - startTime (users)
  //tHours = 0;

  //L1:for each category
  //     L2:pick one attraction with highest rating
  //            if tHours+durationToSee < aHours
  //                 tHours = tHours+durationToSee
  //            else
  //                 continue to next attraction in same category (L2)

  return res.json(selected);
});
module.exports = router;
