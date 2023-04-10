const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const { where } = require("sequelize");
const UserEmails = require("../models").UserEmails;
const jwt = require("jsonwebtoken");
const fs = require("fs");
const moment = require("moment");

const UserModel = require("../models").Users;
const reg = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phone,
      age,
      country,
      grade,
      university,
      academicProgramFirst,
      academicProgramSecond,
      academicProgramThird,
      study,
      termOption,
      planType,
      aid,
      legacy,
      area,
      applyingFrom,
      testSubmit,
      recentSchool,
      achievements,
      admission,
      activityName,
      workExperience,
      addinfo,
      moreInfo,
    } = req.body;
    const user = await UserModel.findOne({
      include: {
        model: UserEmails,
        where: { email },
      },
    });

    if (!user) {
      const isMail = await UserEmails.findOne({ where: { email } });
      console.log(isMail);

      const hashEmail = bcrypt.hashSync(email, 10);
      console.log(hashEmail);
      const hashPassword = bcrypt.hashSync(password, 10);

      const item = await UserModel.create({
        fullName,
        phone,
        age,
        country,
        grade,
        university,
        academicProgramFirst,
        academicProgramSecond,
        academicProgramThird,
        study,
        termOption,
        planType,
        aid,
        legacy,
        area,
        applyingFrom,
        testSubmit,
        recentSchool,
        achievements,
        admission,
        activityName,
        workExperience,
        addinfo,
        moreInfo,
      });

      await UserEmails.create({
        email,
        password: hashPassword,
        userId: item.id,
        role: "First",
        token: jwt.sign({ user_id: item.id, email }, process.env.SECRET),
        tokenCreatedAt: moment(),
      });

      return res.status(200).json({ success: true });
    } else {
      return res.status(403).json("user alredy exit");
    }
  } catch (error) {
    console.log(error);
  }
};

const sendMail = async (req, res) => {
  try {
    const { email } = req.body;
    const userEmail = await UserEmails.findOne({ where: { email } });

    const transporter = nodemailer.createTransport({
      // host: "mail.privateemail.com",
      // port: 465,
      // secure: true,
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })
    let mailOptions = {};
    await fs.readFile(
      "controllers/test.html",
      { encoding: "utf-8" },
      (err, html) => {
        if (err) {
          console.log(err);
        } else {
          mailOptions = {
            from: "davit.manukyan.d@tumo.org",
            to: email,
            subject: "verification",
            html,
            attachments: [
              {
                filename: "Frame.png",
                path: "controllers/Frame.png",
                cid: "Frame",
              },
              {
                filename: "SISlogo.png",
                path: "controllers/SISlogo.png",
                cid: "SISlogo",
              },
            ],
          };
          transporter.sendMail(mailOptions);
        }
      }
    );


    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status("500").json("something went wrong");
  }
};
module.exports = {
  reg,
  sendMail,
};
