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
 *         description: something went wrong
 */
//router.get("/All",getTasks.getAllTasks)

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


router.get("/myFree",getTasks.getYourFreeTasks)

/**
 * @swagger
 * /getTasks/inCalendar:
 *   get:
 *     summary: get my Tasks with subtasks wich in Calendar
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

router.get("/inCalendar",getTasks.getTasksInCalendar)
router.get("/subTasks",getTasks.getSubTasks)
router.get("/filter",getTasks.getTasksFilter)
router.get("/description",getTasks.taksDescription)

router.get("/rest",getTasks.getRestTask)
router.get("/rest",getTasks.getRestTask)

module.exports = router;

