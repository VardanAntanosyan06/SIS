const express = require("express");
const app = express();
const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;

const { google } = require("googleapis");
const fs = require("fs");
const stream = require("stream");
const { sequelize } = require("../models");
const formidable = require("formidable");
const { Op } = require("sequelize");
const { cache } = require("ejs");
const FormData = require("form-data");
const multer = require("multer");

app.use(multer().any());

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
    console.log(images);
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
  }
};

module.exports = {
  getBlogs,
  addBlog,
};
