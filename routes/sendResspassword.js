var express = require('express');
var router = express.Router();
const resetPasswordController = require("../controllers/sendResestPassController")

/**
 * @swagger
 * components:
 *   schema:
 *     resetPassword:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           example: user@example.com

 */

/**
 * @swagger
 * /sendResetPassword:
 *   post:
 *     summary: send Reeset password email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/resetPassword'
 *     responses:
 *       200:
 *         description: email is sent!
 *       404:
 *         description: user not found!
 */

router.post("/",resetPasswordController.sendMail)


module.exports = router;

