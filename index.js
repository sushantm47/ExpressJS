const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const logger = require("./Middleware/logger");
// app.get("/", (req, res) => {
//   res.send("<h1>HELLO!</h1>");
// });

///app.use(logger);

//Handle-bars MiddleWare
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engoine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HomePage Route
app.get("/", (req, res) => res.render("index.handlebars"));

//STATIC pages folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING on PORT ${PORT}`);
});
