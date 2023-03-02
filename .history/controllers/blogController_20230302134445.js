const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const addPost = async (req, res) => {
  try {
    const { fullName, email, post } = req.body;

    const item = await BlogModel.create({
      fullName
    })
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPost,
};
