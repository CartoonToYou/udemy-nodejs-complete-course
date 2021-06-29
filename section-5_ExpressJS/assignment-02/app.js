const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

app.use(homeRoutes);
app.use(userRoutes);

app.listen(3000);
