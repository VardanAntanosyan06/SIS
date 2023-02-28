var express = require('express');
var router = express.Router();
const controller = require("../controllers/getProfessorsController")

router.get("/",controller.getProfessors)


module.exports = router;
