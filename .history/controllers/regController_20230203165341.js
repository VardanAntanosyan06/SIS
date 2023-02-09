const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const { where } = require("sequelize");
const UserEmails = require("../models").UserEmails;
require("dotenv").config();

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
    const user = await UserModel.findOne({
      include:{
      model:UserEmails,
      where:{email}
    }});

    
   
    if (!user) {
      const isMail = await UserEmails.findOne({where:{email}})
      console.log(isMail);
      // if(!isMail){
      const hashEmail = bcrypt.hashSync(email, 10);
      console.log(hashEmail);
      const hashPassword = bcrypt.hashSync(password, 10);

      const item = await UserModel.create({
        fullName,
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
      

      await UserEmails.create({
        email,
        password:hashPassword,
        userId:item.id,
        role:"First"
      })

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