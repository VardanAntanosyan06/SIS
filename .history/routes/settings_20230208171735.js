var express = require('express');
var router = express.Router();
const controller = require("../controllers/settingsController")

router.patch("/",controller.change)

module.exports = router;
