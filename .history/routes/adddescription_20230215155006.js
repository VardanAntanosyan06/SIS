var express = require('express');
var router = express.Router();
const controller = require("../controllers/addSubTaskDescController");

router.patch("/feedback,taskId",controller.addDescription);

module.exports = router;
