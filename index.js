const express = require("express");
const app = express();
const path = require("path");
const logger = require("./Middleware/logger");
// app.get("/", (req, res) => {
//   res.send("<h1>HELLO!</h1>");
// });

///app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING on PORT ${PORT}`);
});
