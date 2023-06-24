var express = require("express");
const app = require("../app.js");
var router = express.Router();

router.get("/home/", (req, res) => {
  res.render("index");
});

router.get("/about/", (req, res) => {
  res.render("about");
});

router.get("/aulas/", (req, res) => {
  res.render("aulas");
});

router.get("/aula1/", (req, res) => {
  res.render("aula1");
});

router.get("/aula2/", (req, res) => {
  res.render("aula2");
});

router.get("/aula3/", (req, res) => {
  res.render("aula3");
});

router.get("/aula4/", (req, res) => {
  res.render("aula4");
});

router.get("/aulateste", (req, res) => {
  res.render("aulaum");
});

module.exports = router;
