const Sequelize = require("sequelize");
const dbUrl = "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(dbUrl);
db.sync({ force: false })
  .then(() => console.log("DB Connected"))
  .catch(err => {
    console.log("Error in connecting to DB");
    process.exit(1);
  });

module.exports = db;
