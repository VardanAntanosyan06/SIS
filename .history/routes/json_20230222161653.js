var express = require('express');
var router = express.Router();
const controller = require("../controllers/json")

router.get("/",controller.sendMail)


module.exports = router;
