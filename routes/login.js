var express = require('express');
var router = express.Router();
const loginController = require("../controllers/logincontroller")


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
 * /login:
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
 *         description: success true
 * 
 *       403:
 *         description: invalid email or password
 */

router.post("/",loginController.login)


module.exports = router;
