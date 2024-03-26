const { Sequelize } = require("sequelize");

const sequelizeConfig = new Sequelize({
  host: "dpg-co17f6ud3nmc73f9k4eg-a",
  database: "ck",
  username: "ck_user",
  password: "EhMQ6BKBAKqvPl2YvqA3jgcbTSP8q4FT",
  dialect: "postgres",
  port: 5433,
});

module.exports = sequelizeConfig;
