var express = require('express');
var router = express.Router();
const controller = require("../controllers/blogController");


/**
 * @swagger
 * /addPost:
 *   post:
 *     summary: upload post imae
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

router.post("/",controller.addPost)

module.exports = router;
