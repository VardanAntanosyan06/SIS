const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const {google} = require("googleapis");
const fs = require("fs")

const addPost = async (req, res) => {
  try {
    const { fullName, email, post } = req.body;
    const {img} = req.files;

    const keyPath = "./upbeat-airfoil-379410-ffc79425eb65.json"
    const scopes = ['https://www.googleapis.com/auth/drive']

    const auth = new google.auth.GoogleAuth({
      keyFile:keyPath,
      scopes
    })
    const driveService = google.drive({version:'v3',auth})
    let fileMetaData = {
      name:"Email.png",
    }
    let media = {
      mimeType:"image/png",
      body:fs.createReadStream("./Email.png")
    }
    const response = await driveService.files.create({
      resource:fileMetaData,
      media,
      fields:"id"
    })
    console.log(response);
    await BlogModel.create({
      fullName,email,post,status:"decline",img:res
    })

    return res.json({success:true});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPost,
};
