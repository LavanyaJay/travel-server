const { Router } = require("express");
const router = new Router();
const RejectedAttractions = require("./model");

router.post("/attraction", (req, res, next) => {
  RejectedAttractions.create({
    name: name
  })
    .then(rejected => res.json(rejected))
    .catch(err => next(err));
});
module.exports = router;
