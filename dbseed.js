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
        name: "Food"
      },
      {
        name: "Theater"
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
        closingTime: "18:00:00",
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
        closingTime: "19:30:00",
        duration: "01:00:00",
        rating: 4.7,
        cityId: 1,
        categoryId: 1
      },
      {
        placeName: "Trevi Fountain",
        placeDesc:
          "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 metres high and 49.15 metres wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world.",
        placeImage:
          "https://www.tripsavvy.com/thmb/ZZ1apirALeBB1FOlwxJ3RHA-evw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/DSC_0017-5c76c3edc9e77c0001f57b49.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "09:00:00",
        closingTime: "21:00:00",
        duration: "01:00:00",
        rating: 4.5,
        cityId: 1,
        categoryId: 1
      },
      {
        placeName: "The Pantheon",
        placeDesc:
          "The Pantheon is a former Roman temple, now a church, in Rome, Italy, on the site of an earlier temple commissioned by Marcus Agrippa during the reign of Augustus. It was completed by the emperor Hadrian and probably dedicated about 126 AD.",
        placeImage: "https://rometips.nl/images/pantheon_rome.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "10:00:00",
        closingTime: "20:00:00",
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
        rating: 4.3,
        cityId: 1,
        categoryId: 2
      },
      {
        placeName: "Capitoline Museums",
        placeDesc:
          "The Capitoline Museums (Italian: Musei Capitolini) is a single museum containing a group of art and archaeological museums in Piazza del Campidoglio, on top of the Capitoline Hill in Rome, Italy.",
        placeImage:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/2b/97/32.jpg",
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
        rating: 4.5,
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
        categoryId: 3
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
        categoryId: 3
      },
      {
        placeName: "La Casa Del Caffè Tazza D'oro",
        placeDesc:
          "Classic coffee shop where baristas serve up celebrated iced granita with whipped cream layers.",
        placeImage:
          "https://propertyshutters.com/wp-content/uploads/2019/04/home-design-brilliant-15-musttry-coffee-shops-in-kansas-city.jpg",
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
        duration: "01:00:00",
        rating: 3.5,
        cityId: 1,
        categoryId: 3
      },
      {
        placeName: "CAFFÈ GRECO",
        placeDesc:
          "Caffe Greco has a Renaissance-era charm to it which is recorded in the paintings and the decor, which will surely entice you…Opened in the 1760s, it has had some popular thinkers, artists, and intellectuals like Mark Twain, Goethe, Stendhal and Casanova who have visited. You may have to shell out some extra Euros for coffee but the ambiance of the place is worth it.",
        placeImage:
          "https://bigseventravel.com/wp-content/uploads/2019/07/la-menagere.jpg",
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
        duration: "01:00:00",
        rating: 4.0,
        cityId: 1,
        categoryId: 3
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
        rating: 3.7,
        cityId: 1,
        categoryId: 4
      },
      {
        placeName: "Auditorium Parco della Musica",
        placeDesc:
          "Parco della Musica is a large public music complex in Rome, Italy, with three concert halls and an outdoor theater in a park setting, hence the name. It was designed by Italian architect Renzo Piano.",
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
        openingTime: "14:00:00",
        closingTime: "22:30:00",
        duration: "03:00:00",
        rating: 4.2,
        cityId: 1,
        categoryId: 4
      },
      {
        placeName: "Silvano Toti Globe Theatre Roma",
        placeDesc:
          "The beauty and charm of Rome reside not only in its historic artistic heritage but also in contemporary works that confirm and renew its image as the capital of world culture.",
        placeImage:
          "https://live.staticflickr.com/7136/7422762410_8b0fca0a25_b.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "14:00:00",
        closingTime: "22:30:00",
        duration: "03:00:00",
        rating: 4.7,
        cityId: 1,
        categoryId: 4
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
        openingTime: "07:00:00",
        closingTime: "16:30:00",
        duration: "02:00:00",
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
        closingTime: "18:00:00",
        duration: "03:00:00",
        rating: 5,
        cityId: 1,
        categoryId: 5
      },
      {
        placeName: "Bike Tour",
        placeDesc:
          "This is a perfect tour for all the family. Discover the beauty of Villa Borghese, located in the heart of Rome, riding a bike or E-Bike.You will be learning about the city meanwhile, you enjoy a ride with the best local guides. This is a private tour and can be totally personalized depending on the wishes of the group.",
        placeImage:
          "http://tuolumne.objects.liquidweb.services/photos/421-biking.jpg",
        openDays: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
        openingTime: "10:00:00",
        closingTime: "18:00:00",
        duration: "01:30:00",
        rating: 4,
        cityId: 1,
        categoryId: 5
      },
      {
        placeName: "Walks of Rome",
        placeDesc:
          "A Rome walking tour taking you to the top sights of Rome’s historic center and a chance to get oriented with an expert guide. Including the Spanish Steps, Trevi Fountain and Pantheon plus gelato!",
        placeImage:
          "https://mainstreetpiqua.com/wp-content/uploads/2017/03/walkingtourgraphic.jpg",
        openDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        openingTime: "09:00:00",
        closingTime: "20:00:00",
        duration: "02:30:00",
        rating: 3.5,
        cityId: 1,
        categoryId: 5
      }
    ]);
});
