const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users;
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const DeletedUsers = require("../models").DeletedUsers;
const DeactivatedUsers = require("../models").DeactivatedUsers;

const sendMail = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.toLowerCase();
    const allUserEmails = await UserModel.findAll({
      include: [
        { model: UserEmails, where: { email } },
        DeletedUsers,
        DeactivatedUsers,
      ],
    });
    const user = allUserEmails.filter(
      (e) => e.DeletedUser === null || e.DeletedUser.isVerified === false
    )[0];
    if (
      user &&
      user.UserEmails &&
      user.UserEmails[0].isVerified &&
      (!user.DeletedUser || user.DeletedUser.isVerified === false)
    ) {
      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: "info@sisprogress.com",
        to: email,
        subject: "SIS Progress: Reset Password",
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
            <style>
            #button{
              width:230px;
              height:40px;
              background:#425dac;
              border-radius:8px;
              border:none;
              font-style:normal;
              font-weight:500;
              font-size:18px;
              line-height:27px;
              color:#ffffff;
              padding: 6px;
              box-sizing: border-box;
            }
            </style>
          </head>
          <body>
            <center>
              <h1
                style="

                  font-style: normal;
                  font-weight: 600;
                  font-size: 32px;
                  line-height: 48px;
                "
              >
              Password Reset
              </h1>
              
              <img src='cid:logo' style="width:450px;height:250px;" >
              <div style="width: 70%">
                <p
                  style="
                    font-style: normal;
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 48px;
                    text-align:left;
                  "
                >
                Seems like you forget your password for SIS Progress. If this is true, click below to reset your password. 
                </p>
                <a href="https://sisprogress.com/changepassword?token=${user.token}"style="text-decoration:none;">
                <div id="button">
                Reset My Password
                </div>
                  
                </a>
              </div>

              <div
                style="width: 70%;margin-top: 30px"
                style="border-top: 1px solid #d4d4d4;border-bottom: 1px solid #d4d4d4;"
              >
                <p style="font-size: 20px; line-height: 30px;text-align:left;"
                  >If the button is not working please use the link below:
                  <a
                    href="https://sisprogress.com/changepassword?token=${user.token}"
                    style="color: #425dac;text-align:left;font-size:18px;"
                    >https://sisprogress.com/changepassword?token=${user.token}</a
                  >
                </p>
              </div>
              <div
              style="
                width: 70%;
                margin-top: 25px;
                margin-bottom: 25px;
                border-top: 1px solid #d4d4d4;
                border-bottom: 1px solid #d4d4d4;
                ">
              <p
              style="
              display:flex;
              
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
                  style="color: #425dac;"
                  >info@sisprogress.com</a
                >
              </p>
              <p
                style="
                display:flex;
                
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
                
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                color: #646464;
                text-align: left;
               "
              >
                You can update your
                <a href="" style="color: #425dac;">references</a>
                and 
                <a href="" style="color: #425dac;"
                  > unsubscribe.</a
                >
              </p>
            </div>
            <div style="width:70%">
            <p style="
            
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #646464;
            text-align: center;
            margin-top:15px;
            ">© 2023 SIS Progress, All rights reserved</p></div>
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
            filename: "Password.png",
            path: "./controllers/Password.png",
            cid: "logo",
          },
          {
            filename: "SISlogo.png",
            path: "controllers/SISlogo.png",
            cid: "SISlogo",
          },
        ],
      };
      transporter.sendMail(mailOptions);
      return res.status(200).json("email is sent!");
    }
    return res.status(403).json("invalid email!");
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const user = await UserEmails.findOne({ where: { token } });
    if (user) {
      user.password = bcrypt.hashSync(password, 10);
      user.token = jwt.sign(
        { user_id: user.id, email: UserEmails.email },
        process.env.SECRET
      );

      await user.save();
      return res.json("YEAH! Your password is changed successfully");
    } else {
      return res.json("user not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
  resetPassword,
};
