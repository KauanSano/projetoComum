var express = require('express');
const app = require("../app.js");
var router = express.Router();

router.get("/quiz", (req, res) => {
    res.render("quiz");
})

module.exports = router;