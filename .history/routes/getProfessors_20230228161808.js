var express = require('express');
var router = express.Router();
const controller = require("../")

router.get("/",controller.json)


module.exports = router;
