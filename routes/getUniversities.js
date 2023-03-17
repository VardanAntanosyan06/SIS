var express = require('express');
var router = express.Router();
const controller = require("../controllers/getUniversitiesController")


/**
 * @swagger
 * /get/AllUniversities:
 *   get:
 *     summary: get All universities
 *     responses:
 *       200:
 *         description: object universities
 *       500:
 *         description: something went wrong
 */
router.get("/AllUniversities",controller.getAllUniversities)

/**
 * @swagger
 * /get/myUniversity:
 *   get:
 *     summary: get my universiy
 *     parameters:
 *      - name: name
 *        in: query
 *        description: name of university
 *        required: true
 *        schema:
 *          type: string
 *          example: "Harvard University"
 *     responses:
 *       200:
 *         description: object university
 *       404:
 *         description: not found
 */

router.get("/myUniversity",controller.getMyUniversity)
router.get("/userUniversity",controller.getUserUniversity)

module.exports = router;
