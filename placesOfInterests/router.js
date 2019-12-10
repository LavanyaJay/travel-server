const { Router } = require("express");
const router = new Router();
const PlacesOfInterests = require("./model");
router.get("/itinerary", async (req, res, next) => {
  const categoryId = parseInt(req.body.categoryId);
  const cityId = parseInt(req.body.cityId);
  const placeAll = await PlacesOfInterests.findAll({
    where: {
      categoryId: categoryId,
      cityId: cityId
    }
  });
  return res.json(placeAll);
});
module.exports = router;
