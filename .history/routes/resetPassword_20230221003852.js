var express = require('express');
var router = express.Router();
const resetPasswordController = require("../controllers/resetPasswordCntroller")

router.post("/",resetPasswordController.sendMail)


module.exports = router;
