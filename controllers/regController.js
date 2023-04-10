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
    });
    const mailOptions = {
      from: "davit.manukyan.d@tumo.org",
      to: email,
      subject: "verification",
      html:`<html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <style>
          p {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #646464;
            text-align: left;
          }
          .borderTop {
            border-top: 1px solid #d4d4d4;
          }
          .borderBottom {
            border-bottom: 1px solid #d4d4d4;
          }
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #flexStart {
            height: 250px;
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
          }
          #flexStart > span {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #646464;
          }
          span {
            text-align: left;
          }
        </style>
      </head>
      <body>
        <center>
          <div style="width: 70%; height: 1200px">
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
                  font-weight: 400;
                  font-size: 20px;
                  line-height: 30px;
                "
              >
                In order to complete your registration and start preparing for
                college admissions, you'll need to verify your email address.
              </p>
              <p
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 20px;
                  line-height: 30px;
                "
              >
                You've entered ${email} as the email address for your account.
                Please verify this email address by clicking button below.
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
              class="borderTop borderBottom"
            >
              <span
                style="font-size: 20px; line-height: 30px; font-family: 'Poppins'"
                >If the button is not working please use the link below:
                <a
                  href="https://sisprogress.com/message?token=${userEmail.token}"
                  style="color: #425dac; font-size: 'Poppins'"
                  >https://sisprogress.com/message?token=${userEmail.token}</a
                >
              </span>
            </div>
            <div style="width: 70%" id="flexStart">
              <span> Regards, </span>
              <img src="cid:SISlogo" alt="" width="90px" height="47px" />
              <span>
                You have expressed interest in or supported SIS Progress.
              </span>
              <span>
                Our mailing address is:
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLdqJpVPMGCFHQZXRljQjDczTJpzSxnxCrfjsQwRhFPPVRncHqjzjPlgcqRRZhgWPGZwJB"
                  style="color: #425dac; font-size: 'Poppins'"
                  >info@sisprogress.com</a
                >
              </span>
              <span> Want to change how you receive these emails? </span>
              <span>
                You can update your
                <a href="" style="color: #425dac; font-size: 'Poppins'"
                  >references</a
                >
                and
                <a href="" style="color: #425dac; font-size: 'Poppins'"
                  >unsubscribe.</a
                >
              </span>
            </div>
            <div
              style="
                width: 70%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                border-top: 1px solid #d4d4d4;
              "
            >
              <p>© 2023 SIS Progress, All rights reserved</p>
            </div>
          </div>
        </center>
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
