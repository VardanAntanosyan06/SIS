const express = require("express");
const app = express();
const xlsx = require("xlsx");
const BlogModel = require("../models").Blogs;
const toBeBlogs = require("../models").toBeBlogs;
const { google } = require("googleapis");
const fs = require("fs");
const stream = require("stream");
const { sequelize } = require("../models");
const formidable = require("formidable");
const { Op } = require("sequelize");
const { cache } = require("ejs");
const FormData = require("form-data");

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
    } = req.body;

    const {blogs,images} = req.files

    const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
      const scopes = ["https://www.googleapis.com/auth/drive"];

      const auth = await new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes,
      });

     let NewImages =  await Promise.all(images.map(async (e)=>{
      const bufferStream = new stream.PassThrough();
      bufferStream.end(e.data);
        const { data } = await google
        .drive({ version: "v3", auth })
        .files.create({
          media: {
            mimeType: e.mimeType,
            body: bufferStream,
          },

          requestBody: {
            name: e.name,
            parents: ["1hzdBtjI_lMzQfzT0ugmbqHuWJd5N070s"],
          },
          fields: "id,name",
        });
        return {data:data.name,id:"http://drive.google.com/uc?export=view&id="+data.id};
     }))

     let NewBlogs = await Promise.all(blogs.map(async (e)=>{
      const bufferStream = new stream.PassThrough();
      bufferStream.end(e.data);

      const { data } = await google
      .drive({ version: "v3", auth })
      .files.create({
        media: {
          mimeType: e.mimeType,
          body: bufferStream,
        },

        requestBody: {
          name: e.name,
          parents: ["1hzdBtjI_lMzQfzT0ugmbqHuWJd5N070s"],
        },
        fields: "id,name",
      });
      return {data:data.name,id:"http://drive.google.com/uc?export=view&id="+data.id};
   }));
   
   toBeBlogs.create({
    authorname,
    title,
    UserName,
    contactEmail,
    phone,
    topic,
    twitter,
    personalLink,
    blogs:NewBlogs,
    images:NewBlogs
  })
    return res.json({ success: true});
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getBlogs,
  addBlog,
};
