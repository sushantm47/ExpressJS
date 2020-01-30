const express = require("express");
const app = express();
const path = require("path");
const moment = require("moment");
const members = require("./members.js");

// app.get("/", (req, res) => {
//   res.send("<h1>HELLO!</h1>");
// });

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }:${moment().format()}`
  );
  next();
};

app.use(logger);

app.get("/api/members", (req, res) => {
  res.json(members);
});

// app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING on PORT ${PORT}`);
});
