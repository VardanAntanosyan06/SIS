const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const { where } = require("sequelize");
const UserEmails = require("../models").UserEmails;
const jwt = require("jsonwebtoken");

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

    if (!user || user.isActive === false) {
      const isMail = await UserEmails.findOne({ where: { email } });

      const hashEmail = bcrypt.hashSync(email, 10);
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
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      service: "privateemail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: "info@sisprogress.com",
      to: email,
      subject: "verification",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
        </head>
        <body>
          <center>
            <h1
              style="
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 48px;
              "
            >
              Welcome to SIS Progress
            </h1>
            <img src="cid:Frame" />
            <div style="width: 70%">
              <h1
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 32px;
                  line-height: 48px;
                "
              >
                Please verify your email address.
              </h1>
              <p
                        style="
                          font-family: 'Poppins';
                          font-style: normal;
                          font-size: 20px;
                          text-align: left;
                        "
                      >
                        In order to complete your registration and start preparing for
                        college admissions, you'll need to verify your email address.
                      </p> 
              <p
                style="
                  display:flex;
                  font-family: 'Poppins';
                  font-style: normal;
                  font-size: 20px;
                  text-align: left;
                  "
              >
                You've entered ${email} as the email address for your account. Please
                verify this email address by clicking button below.
              </p>
              <a href="https://sisprogress.com/message?token=${userEmail.token}">
                <button
                  style="
                    width: 130px;
                    height: 40px;
                    background: #425dac;
                    border-radius: 5px;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 27px;
                    color: #ffffff;
                  "
                >
                  Verify
                </button>
              </a>
            </div>
            <div
              style="width: 70%; height: 110px; margin-top: 30px"
              style="border-top: 1px solid #d4d4d4;border-bottom: 1px solid #d4d4d4;"
            >
              <p style="font-size: 20px; line-height: 30px; font-family: 'Poppins'"
                >If the button is not working please use the link below:
                <a
                  href="https://sisprogress.com/message?token=${userEmail.token}"
                  style="color: #425dac;display:flex;text-align:left;"
                  >https://sisprogress.com/message?token=${userEmail.token} </a
                >
              </p>
            </div>
            <div
              style="
                width: 70%;
                height: 250px;
                margin-top: 25px;
                margin-bottom: 30px;
              "      >
              <p
              style="
              display:flex;
              font-family: 'Poppins';
              font-weight: 500;
              font-size: 18px;
              line-height: 27px;
              color: #646464;
              text-align: left;
             "
              >
                Regards,
              </p>
              <div style="display:flex;">
              <img src="cid:SISlogo" alt="" width="90px" height="47px"/>
              </div>
              <p
              style="
              display:flex;
              font-family: 'Poppins';
              font-weight: 500;
              font-size: 18px;
              line-height: 27px;
              color: #646464;
              text-align: left;
             "
              >
                You have expressed interest in or supported SIS Progress.
              </p>
              <p
              style="
              display:flex;
              font-family: 'Poppins';
              font-weight: 500;
              font-size: 18px;
              line-height: 27px;
              color: #646464;
              text-align: left;
             "
              >
                Our mailing address is:
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLdqJpVPMGCFHQZXRljQjDczTJpzSxnxCrfjsQwRhFPPVRncHqjzjPlgcqRRZhgWPGZwJB"
                  style="color: #425dac; font-family: 'Poppins'"
                  >info@sisprogress.com</a
                >
              </p>
              <p
                style="
                display:flex;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                color: #646464;
                text-align: left;
               "
              >
                Want to change how you receive these emails?
              </p>
              <p
                style="
                display:flex;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                color: #646464;
                text-align: left;
               "
              >
                You can update your 
                <a href="" style="color: #425dac; "> references</a>
                and 
                <a href="" style="color: #425dac; "
                  > unsubscribe.</a
                >
              </p>
            </div>
            <div
              style="
                display:flex;
                width: 70%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                border-top: 1px solid #d4d4d4;
              "
            >
              <p style="
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 27px;
              color: #646464;
              text-align: center">© 2023 SIS Progress, All rights reserved</p>
            </div>
          </center>
      
          <style>
            div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            p {
              text-align: left;
            }
          </style>
      
        </body>
      </html>
      `,
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
