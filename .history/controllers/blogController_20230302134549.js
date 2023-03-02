const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const addPost = async (req, res) => {
  try {
    const { fullName, email, post } = req.body;

    const item = await BlogModel.create({
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
