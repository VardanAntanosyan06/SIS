var express = require('express');
var router = express.Router();
const controller = require("../controllers/contactUsController");

router.post("/",controller.dashboard)

/**
 * @swagger
 * /dashboard/:
 *   get:
 *     summary: dashboard
 *     responses:
 *       200:
 *         description: object of  dashboard
 *       500:
 *         description: something wnet wrong
 */

module.exports = router;
