var express = require('express');
var router = express.Router();
const controller = require("../controllers/blogController");

router.post("/",controller.changeSubTaskStatus)
module.exports = router;
