const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const {google} = require("./js");


const addPost = async (req, res) => {
  try {
    const { fullName, email, post } = req.body;
    const {img} = req.files;

    const keyPath = "./un"
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