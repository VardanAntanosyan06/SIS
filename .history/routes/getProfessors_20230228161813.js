var express = require('express');
var router = express.Router();
const controller = require("../controllers").Pr

router.get("/",controller.json)


module.exports = router;