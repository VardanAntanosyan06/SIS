var express = require('express');
var router = express.Router();
const controller = require("../controllers/moment")



router.get("/",controller.momentFo)


module.exports = router;