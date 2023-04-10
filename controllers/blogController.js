const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const { google } = require("googleapis");
const fs = require("fs");
const stream = require("stream");
const { sequelize } = require("../models");

const { Op } = require("sequelize");
const { cache } = require("ejs");

const getBlogs = async (req, res) => {
  try {
    const { id } = req.query;
    let Blogs;
    let nextUp;

    if (id) {
      Blogs = await BlogModel.findOne({
        where: { id },
      });
      nextUp = await BlogModel.findAll({
        where: { id: { [Op.ne]: id } },
        order: sequelize.random(),
        attributes: { exclude: ["html", "description"] },
        limit: 3,
      });
    } else {
      Blogs = await BlogModel.findAll({
        attributes: { exclude: ["html"] },
      });
    }
    return res.json({ Blogs, nextUp });
  } catch (error) {
    console.log(error);
  }
};

const addBlog = async (req, res) => {
  try {
    // if (req.files && req.files.file1.length > 0 && req.files.file2 > 0) {
      const { blogs, images } = req.files;
      const {
        authorname,
        title,
        UserName,
        contactEmail,
        phone,
        topic,
        twitter,
        personalLink,
      } = req.body;
      return res.json({ success: true });
      // else
      // return res.status(404).json("This field is required");
      // }
    } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getBlogs,
  addBlog,
};
