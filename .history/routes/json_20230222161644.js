var express = require('express');
var router = express.Router();
const controller = require("../controllers/")

router.get("/",resetPasswordController.sendMail)


module.exports = router;
