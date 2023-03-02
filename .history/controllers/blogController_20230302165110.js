const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const {google} = require("googleapis");
const fs = require("fs")

const addPost = async (req, res) => {
  try {
    const { fullName, email, post } = req.body;
    // const {img} = req.files;

    const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json"
    const scopes = ['https://www.googleapis.com/auth/drive']

    
    const auth = await new google.auth.GoogleAuth({
      keyFile:keyPath,
      scopes
    })
    const driveService = await google.drive({version:'v3',auth})
    let fileMetaData = {
      name:"Email.png",
    }
    let media = {
      mimeType:"image/png",
      body:fs.createReadStream("controllers/Email.png")
    }
    const response = await driveService.files.create({
      resource:fileMetaData,
      media,
      fields:"id",
      parents:['1PoLybEnFStEIU_8-C4jS8L_yIOiNcIGY']
    })
    console.log(response.data.id,"++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    await BlogModel.create({
      fullName,email,post,status:"decline",img:response.data.id
    })

    return res.json({success:true});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPost,
};
