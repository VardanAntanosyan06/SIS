var express = require('express');
var router = express.Router();
const controller = require("../controllers/settingsController")

router.patch("/",controller.change)
router.patch("/password",controller.changePassword)

module.exports = router;
