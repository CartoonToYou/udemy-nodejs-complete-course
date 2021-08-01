const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// Monolith with nodejs
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded or send req from <form>

// RestAPIs
app.use(bodyParser.json()); // application/json

/* allow CORS => Middleware for change header not to block another domain that want to request to this APIs */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080);
