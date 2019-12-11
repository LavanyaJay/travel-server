const { Router } = require("express");
const router = new Router();
const RejectedAttractions = require("./model");

router.post("/rejectattraction", (req, res, next) => {
  const name = req.body.name;
  RejectedAttractions.create({
    name: name
  })
    .then(rejected => res.json(rejected))
    .catch(err => next(err));
});
module.exports = router;
