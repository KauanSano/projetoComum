var express = require("express");
var path = require("path");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/index"));
app.use(require("./routes/quiz"));
//views engine
var mustacheExpress = require("mustache-express");
var engine = mustacheExpress();
app.engine("mustache", engine);
app.set("view engine", "mustache");
//app.set("views", path.join(__dirname, "views"));
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "aulas"),
]);

app.listen(3000, () => {
  console.log("Porta 3000");
});

module.exports = app;
