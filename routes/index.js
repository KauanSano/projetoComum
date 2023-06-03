var express = require('express');
const app = require("../app.js");
var router = express.Router();

router.get("/home/", (req, res) => {
    res.render("index");
})    

router.get("/about/", (req, res) => {
    res.render("about");
})

module.exports = router;