const { Router } = require("express");
const router = new Router();
const City = require("./model");
router.get("/city", async (req, res, next) => {
  const cities = await City.findAll();
  return res.json(cities);
});
module.exports = router;
