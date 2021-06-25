const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log('Call "/users" from middleware');
  next();
});

app.use("/", (req, res, next) => {
  console.log('Call "/" from middleware');
  next();
});

app.use("/users", (req, res, next) => {
  console.log('"/users" Response html tags');
  res.send(`
  <h1>Users page from ExpressJS</h1>
  <ul>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
  </ul>`);
});

app.use("/", (req, res, next) => {
  console.log('"/" Response html tags');
  res.send(`
  <h1>First page from ExpressJS</h1>
  <p>Welcome!!!</p>`);
});

app.listen(3000);
