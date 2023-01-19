var express = require('express');
var router = express.Router();
const controller = require("../controllers/dashboardController");

router.get("/",controller.dashboard)
module.exports = router;
