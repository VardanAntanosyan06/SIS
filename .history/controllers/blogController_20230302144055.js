const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const {google} = require("googleapis");


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
    await const driveService = google.drive()
    await BlogModel.create({
      fullName,email,post,status:"decline"
    })

    return res.json({success:true});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPost,
};
