var express = require('express');
var router = express.Router();
const regController = require("../controllers/regController")
/**
 * @swagger
 * components:
 *   schema:
 *     regUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         fullName:
 *           type: string
 *           example: user A
 *         email:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: test1234
 *         phone:
 *           type: string
 *           example: +37499999999
 *         age:
 *           type: integer
 *           example: 20
 *         country:
 *           type: string
 *           example: Armenia 
 *         whichClass:
 *           type: integer
 *           example: 10 
 *         university:
 *           type: string
 *           example: Johns Hopkins University 
 *         Unyshcool:
 *           type: string
 *           example: Business school 
 *         proffession:
 *           type: string
 *           example: Business Management
 *         term:
 *           type: string
 *           example: start term
 *         planType:
 *           type: string
 *           example: Regular Desicion
 *         aid:
 *           type: boolean
 *           example: false
 *         legacy:
 *           type: boolean
 *           example: false
 *         area:
 *           type: string
 *           example: aboute me (for 9th)
 *         activityName:
 *           type: string
 *           example: values of join as ,
 *         applyingFrom:
 *           type: string
 *           example: Armenia 
 *         testSubmit:
 *           type: string
 *           example: SAT
 *         recentSchool:
 *           type: string
 *           example: my school
 *         report:
 *           type: boolean
 *           example: false 
 *         hadtests:
 *           type: boolean
 *           example: false
 *         hobby:
 *           type: string
 *           example: values of join as ,
 *         workExperience:
 *           type: string
 *           example: about my work  experience      
 *         addinfo:
 *           type: boolean
 *           example: false
 *         moreInfo:
 *           type: string
 *           example: about me                              
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: register User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/regUser'
 *     responses:
 *       200:
 *         description: email is sent!
 *       403:
 *         description: user alredy exit
 */

router.post("/",regController.reg)
router.post("/newRegister",regController.regNewPartTwo)
router.patch("/newRegister",regController.regNewPartTwo)
router.post("/sendMail",regController.sendMail)
router.post("/ForTest",regController.registerForTest)

module.exports = router;
