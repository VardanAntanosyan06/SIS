var express = require("express");
var router = express.Router();
const controller = require("../controllers/blogController");

/**
 * @swagger
 * /addPost:
 *   post:
 *      summary: upload post image
requestBody:
  content:
    application/octet-stream:
      # any media type is accepted, functionally equivalent to `*/*`
      schema:
        # a binary file of any type
        type: string
 *       format: binary
 *     responses:
 *       200:
 *         description: object university
 *       404:
 *         description: not found
 */

router.post("/", controller.addPost);

module.exports = router;