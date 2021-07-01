const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ entend: false }));
app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

app.use(homeRoutes);
app.use(userRoutes.router);

app.listen(3000);
