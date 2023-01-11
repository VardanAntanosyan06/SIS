var express = require('express');
var router = express.Router();
const getTasks = require("../controllers/getTaskController")

/**
 * @swagger
 * /getTasks/All:
 *   get:
 *     summary: get All Tasks
 *     responses:
 *       200:
 *         description: object Tasks
 *       500:
 *         description: something wnet wrong
 */
router.get("/All",getTasks.getAllTasks)

/**
 * @swagger
 * /getTasks/my:
 *   get:
 *     summary: get my Tasks
 *     parameters:
 *      - name: id
 *        in: query
 *        description: id of user
 *        required: true
 *        schema:
 *          type: integer
 *          example: 1
 *     responses:
 *       200:
 *         description: object Tasks
 *       404:
 *         description: not found
 */
router.get("/my",getTasks.getYourTasks)


module.exports = router;
