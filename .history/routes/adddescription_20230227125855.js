var express = require('express');
var router = express.Router();
const controller = require("../controllers/addSubTaskDescController");

router.post("/feedback",controller.addDescription);
router.get("/feedback",controller.getfeedback);

module.exports = router;
