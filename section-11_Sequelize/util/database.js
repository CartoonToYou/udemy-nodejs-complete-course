const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "dhvd6gdiupo", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
