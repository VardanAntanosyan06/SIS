var express = require('express');
var router = express.Router();
const controller = require("../c")

router.get("/",resetPasswordController.sendMail)


module.exports = router;
