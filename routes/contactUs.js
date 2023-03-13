var express = require('express');
var router = express.Router();
const controller = require("../controllers/contactUsController");

router.post("/",controller.contactUs)


module.exports = router;
