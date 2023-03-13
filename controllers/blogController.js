const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const { google } = require("googleapis");
const fs = require("fs");
const stream = require("stream");

// const addPost = async (req, res) => {
//   try {
//     const { fullName, email, post } = req.body;
//     // const {img} = req.files;

//     const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
//     const scopes = ["https://www.googleapis.com/auth/drive"];

//     const auth = await new google.auth.GoogleAuth({
//       keyFile: keyPath,
//       scopes,
//     });
//     const uploadFile = async (fileObject) => {
//       const { body, files } = req;

//       for (let f = 0; f < files.length; f += 1) {
//         await uploadFile(files[f]);
//       }
//       const bufferStream = new stream.PassThrough();
//       bufferStream.end(fileObject.buffer);
//       const { data } = await google
//         .drive({ version: "v3", auth })
//         .files.create({
//           media: {
//             mimeType: fileObject.mimeType,
//             body: bufferStream,
//           },
//           requestBody: {
//             name: fileObject.originalname,
//             parents: ["1PoLybEnFStEIU_8-C4jS8L_yIOiNcIGY"],
//           },
//           fields: "id,name",
//         });
//       console.log(`Uploaded file ${data.name} ${data.id}`);
//     };
//     uploadFile("");
//   } catch (error) {
//     console.log(error);
//   }
// };


const getBlogs = async (req,res)=>{
    try {
        const {id} = req.query;
        let Blogs;
        if(id){
          Blogs = await BlogModel.findOne({
            where:{id},
            attributes:['html'],
          });
        }else{
          Blogs = await BlogModel.findAll({
            attributes: { exclude: ["html"] },
          });
        }
        return res.json({Blogs})
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
  // addPost,
  getBlogs
};
