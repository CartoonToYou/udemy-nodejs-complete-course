const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always run!");
  next();
});

app.use("/product", (req, res, next) => {});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(`<html>
    <body>
      <form action="/product" method="POST">
        <input type="text" name="title">
        <button type="submit">Add Product</button>
      </form>
    </body>
  </html>`);
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
