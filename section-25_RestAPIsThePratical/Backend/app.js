const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://node-complete:dhvd6gdiupo@node-complete-cluster.dq9dg.mongodb.net/messages?authSource=admin&replicaSet=atlas-r87bj8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
  )
  .then(() => {
    app.listen(8080);
    console.log("CONNECTED!");
  })
  .catch((err) => {
    console.error(err);
  });
