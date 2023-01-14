var express = require('express');
var router = express.Router();
const getTasks = require("../controllers/getTaskController")

/**
 * @swagger
 * /getTasks/All:
 *   get:
 *     summary: get All Tasks with subtasks
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
 *     summary: get my Tasks with subtasks wich will be in explore more goals
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

/**
 * @swagger
 * /getTasks/myFree:
 *   get:
 *     summary: get my Tasks with subtasks wich will be in Calendar (not selected)
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
router.get("/myFree",getTasks.getYourFreeTasks)

module.exports = router;
