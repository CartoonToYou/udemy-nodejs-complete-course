/**
 * Add {"type": "module"} to package.json
 * if import owned file will needed .js ***
 */

// const express = require('expess')
import express from "express";

// const resHandler = require("./response-handler");
import { resHandler } from "./response-handler.js";

const app = express();

app.get("/", resHandler);

app.listen(3000);
