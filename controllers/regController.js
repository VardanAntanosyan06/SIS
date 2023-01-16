const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const { where } = require("sequelize");
require("dotenv").config();

const model = require("../models").Users;
const reg = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phone,
      age,
      country,
      whichClass,
      term,
      university,
      Unyshcool,
      proffession,
      planType,
      aid,
      legacy,
      activityName,
      applyingFrom,
      testSubmit,
      recentSchool,
      report,
      hadtests,
      hobby,
      workExperience,
      addinfo,
      area,
    } = req.body;
    const user = await model.findOne({ where: { email } });

    if (whichClass == 10) {
      const isNull = Object.values({
        fullName,
        email,
        password,
        phone,
        age,
        country,
        whichClass,
        term,
        university,
        Unyshcool,
        proffession,
        planType,
        aid,
        legacy,
        activityName,
        applyingFrom,
        testSubmit,
        recentSchool,
        report,
        hadtests,
        hobby,
        workExperience,
        addinfo
      }).map((el, index) => {
        if (el == null) {
          return index;
        }
        return null;
      });
      const indexArr = isNull.filter((el) => {
        return el > 0;
      });
      let whichIsNull = [];
      indexArr.map((index) => {
        var arr = Object.keys({
          fullName,
          email,
          password,
          phone,
          age,
          country,
          whichClass,
          term,
          university,
          Unyshcool,
          proffession,
          planType,
          aid,
          legacy,
          activityName,
          applyingFrom,
          testSubmit,
          recentSchool,
          report,
          hadtests,
          hobby,
          workExperience,
          addinfo
        }).filter((element, i) => {
          return index == i;
        });
        whichIsNull.push(arr.join());
      });
      if (whichIsNull.length >= 1) {
        return res.json(whichIsNull);
      }
    } else {
      console.log("s+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      const isNull = Object.values({
        fullName,
        email,
        password,
        phone,
        age,
        country,
        whichClass,
        term,
        university,
        Unyshcool,
        proffession,
        planType,
        aid,
        legacy,
        area
      }).map((el, index) => {
        if (el == null) {
          return index;
        }
        return null;
      });
      const indexArr = isNull.filter((el) => {
        return el > 0;
      });
      let whichIsNull = [];
      indexArr.map((index) => {
        var arr = Object.keys({
          fullName,
          email,
          password,
          phone,
          age,
          country,
          whichClass,
          term,
          university,
          Unyshcool,
          proffession,
          planType,
          aid,
          legacy,
          area
        }).filter((element, i) => {
          return index == i;
        });
        whichIsNull.push(arr.join());
      });
      if (whichIsNull.length >= 1) {
        return res.json(whichIsNull);
      }
    }
    if (!user) {
      const hashEmail = bcrypt.hashSync(email, 10);
      const hashPassword = bcrypt.hashSync(password, 10);

      const item = await model.create({
        fullName,
        email,
        password: hashPassword,
        phone,
        age,
        country,
        whichClass,
        term,
        university,
        Unyshcool,
        proffession,
        planType,
        aid,
        legacy,
        activityName,
        applyingFrom,
        testSubmit,
        recentSchool,
        report,
        hadtests,
        hobby,
        workExperience,
        addinfo,
      });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: "davit.manukyan.d@tumo.org",
        to: email,
        subject: "verification",
        html:
          "<a href='http://164.90.224.111/verify?email=" +
          hashEmail +
          "?id=" +
          item.id +
          "'>click here</a>",
      };

      transporter.sendMail(mailOptions);
      return res.status(200).json("email is sent!");
    } else {
      return res.json("user alredy exit");
    }
  } catch (error) {
    console.log(error), "++++++++++++++++++++++++++++++++++++++++++++++++";
  }
};

module.exports = {
  reg,
};
