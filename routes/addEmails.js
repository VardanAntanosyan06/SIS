var express = require("express");
var router = express.Router();
const controller = require("../controllers/addEmailsController");

router.post("/update", controller.updateEmail);
router.post("/verify", controller.verify);
router.delete("/delete",controller.deleteSecondaryEmail)
router.get("/isFree",controller.isEmailFree)

module.exports = router;