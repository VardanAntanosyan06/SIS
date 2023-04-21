var express = require("express");
const app = express()
var router = express.Router();
const controller = require("../controllers/blogController");
const multer = require("multer");
const upload = multer({ dest: '../public' })
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
router.post("/add",async (req, res) => {
    try {
      const {
        authorname,
        title,
        UserName,
        contactEmail,
        phone,
        topic,
        twitter,
        personalLink,
        blogs,
        images,
      } = req.body;
      console.log(req);
      // const bufferStream = new stream.PassThrough();
      // bufferStream.end(images);
      // const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
      //   const scopes = ["https://www.googleapis.com/auth/drive"];
  
      //   const auth = await new google.auth.GoogleAuth({
      //     keyFile: keyPath,
      //     scopes,
      //   });
      //   // const formData = new FormData()
      //   // formData.append('img',images)
  
      //   const { data } = await google
      //     .drive({ version: "v3", auth })
      //     .files.create({
      //       media: {
      //         mimeType: images.mimeType,
      //         body: bufferStream,
      //       },
  
      //       requestBody: {
      //         name: images.name,
      //         parents: ["1KnEWAeNDvyYmI-Qz4LvRIAKhuIXQcHvW"],
      //       },
      //       fields: "id,name",
      //     });
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
      return res.json("wrong")
    }
  })

module.exports = router;
