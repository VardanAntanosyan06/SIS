var express = require('express');
var router = express.Router();
const controller = require("../controllers/notificationController")

router.get("/get",controller.getNotifications)
router.patch("/read",controller.readNotification)

module.exports = router;
