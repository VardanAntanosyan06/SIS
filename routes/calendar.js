var express = require('express');
var router = express.Router();
const calendarController = require("../controllers/calendarController")

/**
 * @swagger
 * components:
 *   schema:
 *     Calendar:
 *       type: object
 *       required:
 *         - TaskName
 *         - DateOfAddTask
 *         - statusOfTask
 *         - timePoints
 *         - userId 
 *       properties:
 *         taskId:
 *           type: integer
 *           example: 110
 *         DateOfAddTask:
 *           type: date
 *           example: 2023-01-12 19:53:21.692+00
 *         statusOfTask:
 *           type: string
 *           example: in process
 *         timePoints:
 *           type: string
 *           example: up to 6 weeks
 *         userId:
 *           type: integer
 *           example: 1
 */

/**
 * @swagger
 * /calendar/add:
 *   post:
 *     summary: Add Task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Calendar'
 *     responses:
 *       200:
 *         description: object of Task
 *       500:
 *         description: something went wrong
 */

router.post("/add",calendarController.create)
/**
 * @swagger
 * /calendar/getAll:
 *   get:
 *     summary: get All Tasks wich in use
 *     responses:
 *       200:
 *         description: object Tasks
 *       500:
 *         description: something wnet wrong
 */
router.get("/getAll",calendarController.getAllTasks)


module.exports = router;