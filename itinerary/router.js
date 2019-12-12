const { Router } = require("express");
const router = new Router();
const Itinerary = require("./model");
const Attractions = require("../attractions/model");
const Sequelize = require("sequelize");
router.get("/itinerary", async (req, res, next) => {
  const itinerary = await Itinerary.findAll({
    include: [
      {
        model: Attractions
      }
    ]
  });
  return res.json(itinerary);
});
module.exports = router;
