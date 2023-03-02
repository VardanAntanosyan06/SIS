var express = require('express');
var router = express.Router();
const changeController = require("../controllers/changeStatusController");

router.patch("/subTaskStatus",changeController.changeSubTaskStatus)
module.exports = router;
