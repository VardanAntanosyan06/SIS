const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const { where } = require("sequelize");
const UserEmails = require("../models").UserEmails;
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
require("dotenv").config();

const UserModel = require("../models").Users;
const reg = async (req, res) => {
  try {
    const {
      fullName,email,password,phone,age,country,grade,university,academicProgram,study,termOption,planType,aid,legacy,area,applyingFrom,testSubmit,recentSchool,achievements,admission,activityName,workExperience,addinfo,moreInfo,
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

      const item = await UserModel.create({fullName,phone,age,country,grade,university,academicProgram,study,termOption,planType,aid,legacy,area,applyingFrom,testSubmit,recentSchool,achievements,admission,activityName,workExperience,addinfo,moreInfo}); 
      

      const newEmail = await UserEmails.create({
        email,
        password:hashPassword,
        userId:item.id,
        role:"First",
        token:jwt.sign(
          {email},
          process.env.SECRET
          )
      })

      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 993,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: "info@sisprogress.com",
        to: email,
        subject: "verification",
        html:
       `
       <center>
       <img src='cid:logo' style="width:400px;height:250px;" >
       <h2>Verify your email address </h2>
       <p>
        You've entered <b>${email}</b> as the  email address for your account.
        Please verify this email address by clicking button below. 
       </p>
        <button style="background-color: blue;
        border: none;
        border-radius:20px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        ">
          <a href='http://164.90.224.111/verify?token=${newEmail.token}'
          style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
        </button>

          `,

          attachments: [{
            filename: 'Letter.png',
            path: './controllers/Letter.png',
            cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
       }]
      };


      transporter.sendMail(mailOptions);
      return res.status(200).json("email is sent!");
    } else {
      return res.json("user alredy exit");
    }
  } catch (error) {
    console.log(error)  
  }
};

module.exports = {
  reg,
};
