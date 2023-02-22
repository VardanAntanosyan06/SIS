var express = require('express');
var router = express.Router();
const controller = require("../controllers/json")

router.get("/",resetPasswordController.sendMail)


module.exports = router;
