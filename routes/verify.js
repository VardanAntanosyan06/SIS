var express = require('express');
var router = express.Router();
const controller = require("../controllers/verifyController")


router.get("/",controller.verify)


module.exports = router;
