## Table of content

- [Aim](#Goal)

- [How to start](#How-to-start)
- [Technologies used for this project](#Technologies-used-for-this-project)
- [Contributors](#Contributors)

## Goal

The goal of the project is to:

1. Create a 1 day itinerary in the city of choice based on time and preferred activities
2. Display the schedule to the user
3. Allow user to edit the itinerary, by deleting attractions that are not preferred.
4. Rebuild new itinerary after deletion.

## How to start

In order to run this App follow the following steps;

1. Set up a Postgres database with docker running on port 5432 using password secret:
   `$ docker run -p 5432:5432 --name travel-server -e POSTGRES_PASSWORD=secret -d postgres`

2. Clone the repository using the command `git clone https://github.com/LavanyaJay/travel-server`

3. Install all the relevant dependencies using the command `npm install`

4. Uncomment `require("./dbseed")` in index.js to populate the database with seed data.

5. Start the server using `npm start` or `npm run start`

## Models and Relations

The models which were used for the current project include;

- Category,City,Attractions,RejectedAttractions,Itinerary

The relational mapping between the models is as follows;

- Attractions
  `City.hasMany(Attractions)`
  `Attractions.belongsTo(City)`
  `Category.hasMany(Attractions)`
  `Attractions.belongsTo(Category)`
  `Attractions.hasMany(Itinerary)`
  `Itinerary.belongsTo(Attractions)`

## Api Resources

User can test the following endpoints in the backend by making requests via httpie to local server `localhost:4000`

- GET/city

* Fetches all cities

- POST/attraction

* Computes the schedule using an algorithm and creates the itinerary record

- GET/itinerary

* Fetches the itinerary record

- POST/attraction

* Computes the schedule using an algorithm and creates the itinerary record

- POST/rejectattraction

* Adds the deleted attraction to RejectedAttractions

- DELETE/rejectattraction

* Deletes RejectedAttractions

## Technologies used for this project

- Body-Parser
- Cors
- Express
- Pg
- Sequelize
- Httpie (for testing endpoints)

## To be implemented

- The current algorithm only works for 00 hrs to 24 hrs.It need to be enhanced to work across days as well.
- The current algorithm assumes 30 mins as the time taken to move from one attraction to another. This requires a change as well, maybe getting the time between locations from an api.

## Contributors

- Lavanya Jayapalan
