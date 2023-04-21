var express = require("express");
const app = express()
var router = express.Router();
const controller = require("../controllers/blogController");

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))
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

// router.post("/", controller.addPost);
router.get("/",controller.getBlogs)
router.post("/add",controller.addBlog)

module.exports = router;
