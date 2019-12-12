const express = require("express");
const app = express();
const port = 4000;

//Use body-parser to receive req.body
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require("cors");
const corsMiddleware = cors({ origin: true });
app.use(corsMiddleware);

const cityRouter = require("./city/router");
app.use(cityRouter);

const categoryRouter = require("./category/router");
app.use(categoryRouter);

const attractionsRouter = require("./attractions/router");
app.use(attractionsRouter);

const rejectedAttractionsRouter = require("./rejectedAttractions/router");
app.use(rejectedAttractionsRouter);

const itineraryRouter = require("./itinerary/router");
app.use(itineraryRouter);

//require("./dbseed");

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
