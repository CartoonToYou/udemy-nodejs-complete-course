// const fs = require("fs").promises; // Don't use ('fs/promises')
/* Using Promises in Core NodeJS module instead of callback to avoid callback hell */
import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

/* Global variable => use for define path of this file name */
const __filename = fileURLToPath(import.meta.url);
/* Current folder that this file is exist */
const __dirname = dirname(__filename);

export const resHandler = (req, res, next) => {
  fs.readFile("my-page.html", "utf8")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
  // res.sendFile(path.join(__dirname, "my-page.html"));
};

// module.exports = resHandler;
// export default resHandler;
