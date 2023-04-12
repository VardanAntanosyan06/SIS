var express = require("express");
var router = express.Router();
const controller = require("../controllers/uploadImageController");

router.patch("/",controller.uploadFile)
router.delete("/delete",controller.deleteImg)
module.exports = router;
