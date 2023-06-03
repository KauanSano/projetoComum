var express = require('express');
const app = require("../app.js");
var router = express.Router();

router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname+'\index.html'));
})

router.get("/quiz", (req, res) => {
    res.render('quiz');
})

module.exports = router