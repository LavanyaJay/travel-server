const db = require("./db");
const City = require("./city/model");
const Category = require("./category/model");
const Attractions = require("./Attractions/model");

db.sync({ force: true }).then(() => {
  // Seeding a City
  City.destroy({
    where: {}
  }),
    City.bulkCreate([
      {
        name: "Rome"
      },
      {
        name: "Paris"
      },
      {
        name: "Amsterdam"
      }
    ]),
    Category.destroy({
      where: {}
    }),
    Category.bulkCreate([
      {
        name: "Monuments"
      },
      {
        name: "Music"
      },
      {
        name: "Museums"
      },
      {
        name: "Theater"
      },
      {
        name: "Food"
      },
      {
        name: "Adventure"
      }
    ]),
    Attractions.destroy({
      where: {}
    }),
    Attractions.bulkCreate([
      {
        placeName: "Colosseum",
        placeDesc: "",
        placeImage: "http://www.aboutroma.com/Roman-images/colosseo.jpg",
        openDays: ["Monday", "Tuesday"],
        openingTime: "09:00:00",
        closingTime: "17:00:00",
        duration: "02:00:00",
        rating: 5,
        cityId: 1,
        categoryId: 1
      },
      {
        placeName: "Roman Forum",
        placeDesc: "",
        placeImage:
          "https://cdn.britannica.com/99/128399-050-EB6E336F/Temple-of-Saturn-Roman-Forum-Rome.jpg",
        openDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        openingTime: "09:00:00",
        closingTime: "18:30:00",
        duration: "01:00:00",
        rating: 4,
        cityId: 1,
        categoryId: 1
      },
      {
        placeName: "Teatro dell’Opera di Roma",
        placeDesc:
          "Teatro dell’Opera di Roma, built in 1880 by Milanese architect Achille Sfrondrini, is the most iconic opera house in Rome. ",
        placeImage:
          "https://www.discoverwalks.com/blog/wp-content/uploads/2019/09/teatro_dellopera_francesca_dimajo_d0-1024x682.jpg",
        openDays: ["Monday", "Tuesday", "Thursday", "Friday"],
        openingTime: "09:00:00",
        closingTime: "18:30:00",
        duration: "01:00:00",
        rating: 4,
        cityId: 1,
        categoryId: 4
      },
      {
        placeName: "Vatican museums",
        placeDesc:
          "The Vatican,the Museum of Museums,not only houses the extensive collections of art, archaeology and ethno-anthropology gathered by the Popes over the centuries, but also contains some of the Apostolic Palace’s most extraordinary and artistically significant rooms.",
        placeImage:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/56/59.jpg",
        openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        openingTime: "09:00:00",
        closingTime: "18:30:00",
        duration: "01:00:00",
        rating: 4,
        cityId: 1,
        categoryId: 3
      }
    ]);
});
