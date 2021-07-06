const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "dhvd6gdiupo",
});

module.exports = pool.promise();
