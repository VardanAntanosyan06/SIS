var express = require('express');
var router = express.Router();
const regController = require("../controllers/regController")

router.post("/",regController.reg)


module.exports = router;
