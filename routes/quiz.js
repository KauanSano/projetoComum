var express = require("express");
const app = require("../app.js");
var router = express.Router();

router.get("/quiz", (req, res) => {
  res.render("quiz");
});

router.get("/quiz2", (req, res) => {
  res.render("quiz2");
});

module.exports = router;
