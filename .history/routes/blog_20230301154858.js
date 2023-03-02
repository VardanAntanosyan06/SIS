var express = require('express');
var router = express.Router();
const controller = require("../controllers/");

router.patch("/subTaskStatus",changeController.changeSubTaskStatus)
module.exports = router;
