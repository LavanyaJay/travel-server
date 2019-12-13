const { Router } = require("express");
const router = new Router();
const RejectedAttractions = require("./model");

router.post("/rejectattraction", (req, res, next) => {
  const name = req.body.name;
  console.log(name);
  RejectedAttractions.create({
    name: name
  })
    .then(rejected => res.json(rejected))
    .catch(err => next(err));
});

router.delete("/deleteReject", (req, res, next) => {
  RejectedAttractions.destroy({
    where: {},
    truncate: "true"
  })
    .then(rejected => res.json(rejected))
    .catch(err => next(err));
});

module.exports = router;
