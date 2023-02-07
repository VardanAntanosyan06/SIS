var express = require('express');
var router = express.Router();
const controller = require("../controllers/co");

router.get("/",controller.dashboard)

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
