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
        placeDesc:
          "The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy.",
        placeImage: "http://www.aboutroma.com/Roman-images/colosseo.jpg",
        openDays: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "09:00:00",
        closingTime: "17:00:00",
        duration: "02:00:00",
        rating: 5,
        cityId: 1,
        categoryId: 1
      },
      {
        placeName: "Roman Forum",
        placeDesc:
          "The Roman Forum, also known by its Latin name Forum Romanum, is a rectangular forum surrounded by the ruins of several important ancient government buildings at the center of the city of Rome.",
        placeImage:
          "https://cdn.britannica.com/99/128399-050-EB6E336F/Temple-of-Saturn-Roman-Forum-Rome.jpg",
        openDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        openingTime: "09:00:00",
        closingTime: "18:30:00",
        duration: "01:00:00",
        rating: 4.5,
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
        rating: 5,
        cityId: 1,
        categoryId: 3
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
        rating: 5,
        cityId: 1,
        categoryId: 2
      },
      {
        placeName: "National Roman Museums",
        placeDesc:
          "The National Roman Museum is a museum, with several branches in separate buildings throughout the city of Rome, Italy. It shows exhibits from the pre- and early history of Rome, with a focus on archaeological findings from the period of Ancient Rome.",
        placeImage:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/56/59.jpg",
        openDays: [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "09:00:00",
        closingTime: "17:30:00",
        duration: "02:00:00",
        rating: 4,
        cityId: 1,
        categoryId: 2
      },
      {
        placeName: "Armando Al Pantheon",
        placeDesc:
          "A long-standing restaurant serving hearty, traditional Roman fare in a wood-paneled dining room.",
        placeImage:
          "https://i2.wp.com/www.liviahengel.com/wp-content/uploads/2018/11/sbanco2.jpg?resize=1000%2C500&ssl=1",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "11:00:00",
        closingTime: "22:30:00",
        duration: "02:00:00",
        rating: 4,
        cityId: 1,
        categoryId: 4
      },
      {
        placeName: "Aroma",
        placeDesc:
          "Rome is reflected in a menu of classic Italian dishes on a picturesque outdoor terrace offering an unparalleled Colosseum view.",
        placeImage:
          "https://www.bloomberg.com/features/2019-rome-best-pasta/img/lede-hp-rome-pasta.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "11:00:00",
        closingTime: "22:30:00",
        duration: "02:00:00",
        rating: 4,
        cityId: 1,
        categoryId: 4
      },
      {
        placeName: "Teatro Sistina",
        placeDesc:
          "Unlike other theaters, an immense hall without any columns and other structures characterizes Teatro Sistina, allowing the public excellent visibility from any seat. Designed by architect Marcello Piacentini, and located between Piazza Barberini and Trinità dei Monti, Teatro Sistina was inaugurated in 1949 as a cinema-theater.",
        placeImage:
          "https://www.romeing.it/wp-content/uploads/2017/11/teatro-sistina-e1510854822520.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "16:00:00",
        closingTime: "22:30:00",
        duration: "03:00:00",
        rating: 3,
        cityId: 1,
        categoryId: 3
      },
      {
        placeName: "Rocky Mountain Trail",
        placeDesc:
          "Rocky Mountain Trail is a 3.4 mile loop trail located near Rome, Georgia that features a lake. The trail is good for all skill levels and primarily used for hiking. Dogs are also able to use this trail but must be kept on leash.",
        placeImage:
          "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F161012143944-1.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "16:00:00",
        closingTime: "22:30:00",
        duration: "03:00:00",
        rating: 3,
        cityId: 1,
        categoryId: 5
      },
      {
        placeName: "Tandem Paragliding Rome",
        placeDesc:
          "Fly high over the ancient city of Rome on this half-day tandem paragliding tour. Even beginners can feel safe when strapped in with an experienced guide, enjoying views over the central Italian region. All equipment is included, as well as transportation to and from the jump-off point; you only need to bring your enthusiasm.",
        placeImage:
          "https://www.fragrancetour.com/wp-content/uploads/2017/12/Parapendio.jpg",
        openDays: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
        openingTime: "12:00:00",
        closingTime: "15:00:00",
        duration: "03:00:00",
        rating: 5,
        cityId: 1,
        categoryId: 5
      }
    ]);
});
