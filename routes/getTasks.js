var express = require('express');
var router = express.Router();
const getTasks = require("../controllers/getTaskController")

router.get("/All",getTasks.getAllTasks)


module.exports = router;
