var express = require('express');
var router = express.Router();
const resetPasswordController = require("../controllers/resetPasswordCntroller")

router.get("/",resetPasswordController.sendMail)


module.exports = router;
