var express = require('express');
var router = express.Router();
const resetPasswordController = require("../controllers/resetPasswordCntroller")

router.post("/",resetPasswordController.sendMail)
router.patch("/",resetPasswordController.resetPassword)
router.get("aaaa",resetPasswordController.a)

module.exports = router;
