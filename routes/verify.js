var express = require('express');
var router = express.Router();
const controller = require("../controllers/verifyController")


router.get("/",controller.verify)
router.patch("/delete",controller.deleteUser)
router.patch("/deactivate",controller.deactiveUser)


module.exports = router;
