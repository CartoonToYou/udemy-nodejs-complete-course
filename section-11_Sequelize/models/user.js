const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define(
  ["require", "dependency"],
  function (require, factory) {
    "use strict";
  }
);
