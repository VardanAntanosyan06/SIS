var express = require('express');
var router = express.Router();
const controller = require("../controllers/changeStatusController");

/**
 * @swagger
 * components:
 *   schema:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: test1234
 */

/**
 * @swagger
 * user/login:
 *   post:
 *     summary: Login User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/User'
 *     responses:
 *       200:
 *         description: success true,token
 * 
 *       403:
 *         description: invalid email or password
 */

router.patch("/TaskStatus",controller.changeTaskStatus)

/**
 * @swagger
 * /user/logOut:
 *   get:
 *     summary: logOut user
 *     parameters:
 *      - name: email
 *        in: query
 *        description: email of user
 *        required: true
 *        schema:
 *          type: string
 *          example: user@test.com
 *     responses:
 *       200:
 *         description: succes:true
 *       500:
 *         description: something went wrong..
 */

router.patch("/SubTaskStatus",controller.changeSubTaskStatus)

/**
 * @swagger
 * /user/isLogined:
 *   post:
 *     summary: is logined User?
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Token'
 *     responses:
 *       200:
 *         description: user object
 * 
 *       404:
 *         description: not found
 */

router.post("/isLogined",loginController.isLogined)




module.exports = router;
