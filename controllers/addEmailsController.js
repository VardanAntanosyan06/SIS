const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users;
const DeletedUsers = require("../models").DeletedUsers;
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const randomString = crypto.randomBytes(3).toString("hex");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const { isMainThread } = require("worker_threads");
const DeactivatedUsers = require("../models").DeactivatedUsers;
const moment = require("moment")
// const updateEmail = async (req, res) => {
//   try {
//     const { email, role } = req.body;
//     const { authorization: token } = req.headers;
//     const user = await UserModel.findOne({
//       where: { token: token.replace("Bearer ", "") },
//     });
//     const myEmail = await UserEmails.findOne({
//       where: {userId: user.id},
//     });
//     const isEmail = await UserEmails.findOne({
//       where: { email },
//     });
//     if (!isEmail) {
//       let item = {};
//       if (role === "Secondary") {
//         item = await UserEmails.create({
//           email,
//           userId: user.id,
//           password: null,
//           role: "toBe" + role,
//           token: jwt.sign({ email }, process.env.SECRET),
//         });
//       } else {
//         item = await UserEmails.create({
//           email,
//           userId: user.id,
//           password: myEmail.password,
//           role: "toBe" + role,
//           token: jwt.sign({ email }, process.env.SECRET),
//         });
//       }
//       const transporter = nodemailer.createTransport({
//         host: "mail.privateemail.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: process.env.EMAIL,
//           pass: process.env.PASSWORD,
//         },
//       });
//       let mailOptions = {};
//       if (role === "Secondary") {
//         mailOptions = {
//           from: "info@sisprogress.com",
//           to: email,
//           subject: "Verify Secondary Email",
//           html: `<center>
//         <img src='cid:logo' style="width:450px;height:250px;" >
//         <h2>Reset Email</h2>
//         <p>
//          You've entered <b>${email}</b> as the secondary email address for your account.
//          Please verify this email address by clicking button below.
//         </p>
//         <br>
//         <br>
//          <button style="background-color: blue;
//          border: none;
//          border-radius:20px;
//          color: white;
//          padding: 15px 32px;
//          text-align: center;
//          text-decoration: none;
//          display: inline-block;
//          ">
//            <a href='https://sisprogress.com/secondarymailverify?token=${item.token}'
//            style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
//          </button>
//         <br>
//          <b>if the button is not working please use the link below</b>
//          <br>
//         <br>
//            <b><a href='https://sisprogress.com/secondarymailverify?token=${item.token}'>https://sisprogress.com/secondarymailverify?token=${item.token} </a></b>
//          </center>`,
//           attachments: [
//             {
//               filename: "Email.png",
//               path: "./controllers/Email.png",
//               cid: "logo",
//             },
//           ],
//         };
//       } else {
//         mailOptions = {
//           from: "info@sisprogress.com",
//           to: email,
//           subject: "Verify Email",
//           html: `<center>
//         <img src='cid:logo' style="width:450px;height:250px;" >
//         <h2>Reset Email</h2>
//         <p>
//          You've entered <b>${email}</b> as the email address for your account.
//          Please verify this email address by clicking button below.
//         </p>
//         <br>
//         <br>
//          <button style="background-color: blue;
//          border: none;
//          border-radius:20px;
//          color: white;
//          padding: 15px 32px;
//          text-align: center;
//          text-decoration: none;
//          display: inline-block;
//          ">
//            <a href='https://sisprogress.com/primaryemail?token=${item.token}'
//            style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
//          </button>
//         <br>
//          <b>if the button is not working please use the link below</b>
//          <br>
//         <br>
//            <b><a href='https://sisprogress.com/primaryemail?token=${item.token}'>https://sisprogress.com/primaryemail?token=${item.token} </a></b>
//          </center>`,
//           attachments: [
//             {
//               filename: "Email.png",
//               path: "./controllers/Email.png",
//               cid: "logo",
//             },
//           ],
//         };
//       }
//       transporter.sendMail(mailOptions);
//       return res.json("email0 is sent");
//     }
//     return res.status(403).json("Email already in use");
//   } catch (error) {
//     console.log(error);
//   }
// };

const updateEmail = async (req, res) => {
  try {
    let { email, role } = req.body;
    email = email.toLowerCase();
    const { authorization: token } = req.headers;
    const allUserEmails = await UserModel.findAll({
      where: { token: token.replace("Bearer ", "") },
      include: [UserEmails, DeletedUsers, DeactivatedUsers],
    });
    const user = allUserEmails.filter(
      (e) => e.DeletedUser === null || e.DeletedUser.isVerified === false
    )[0];
    const isEmail = await UserEmails.findOne({
      where: { email },
    });

    if (
      !isEmail &&
      (!user.DeletedUser || user.DeletedUser.isVerified === false)
    ) {

      if (role === "Secondary") {
        let item = await UserEmails.create({
          email,
          userId: user.id,
          password: null,
          role: "toBe" + role,
          token:jwt.sign({ user_id: user.id, email }, process.env.SECRET),
          tokenCreatedAt:moment()
        });
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
          subject: "Action Required: Verify your new email address",
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
                    font-style: normal;
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 48px;
                  "
                >
                  Welcome to SIS Progress
                </h1>
                
                <img src="cid:Frame" alt="" style="width:300px;height:192px;"/>
                <div style="width: 70%">
                  <h1
                    style="
                      
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
                      
                      font-style: normal;
                      font-size: 20px;
                      text-align: left;
                      "
                  >
                    You've entered ${email} as the secondary email address for your account. Please
                    verify this email address by clicking button below.
                  </p>
                  <a href="https://sisprogress.com/secondarymailverify?token=${item.token}">
                    <button
                      style="
                        width: 130px;
                        height: 40px;
                        background: #425dac;
                        border-radius: 5px;
                        border:none;  
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 27px;
                        color: #ffffff;
                        cursor:pointer;
                      "
                    >
                      Verify
                    </button>
                  </a>
                </div>
                <div
                  style="width: 70%; margin-top: 30px"
                  style="border-top: 1px solid #d4d4d4;border-bottom: 1px solid #d4d4d4;"
                >
                  <p style="font-size: 20px; line-height: 30px;text-align:left;"
                    >If the button is not working please use the link below:
                    <a
                      href="https://sisprogress.com/secondarymailverify?token=${item.token}"
                      style="color: #425dac;text-align:left;font-size:18px;"
                      >https://sisprogress.com/secondarymailverify?token=${item.token}</a
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
        return res.status(200).json("email is sent");
      } else {
        let item = await UserEmails.create({
          email,
          userId: user.id,
          password: user.UserEmails[0].password,
          role: "toBe" + role,
          token:jwt.sign({ user_id: user.id, email }, process.env.SECRET),
          tokenCreatedAt:moment()
        });
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
          subject: "Action Required: Verify your new email address",
          html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link
                href="https://fonts.googleapis.com/css?family=Poppins"
                rel="stylesheet"
              />
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
                  Welcome to SIS Progress
                </h1>
                
                <img src="cid:Frame" alt="" style="width:300px;height:192px;"/>
                <div style="width: 70%">
                  <h1
                    style="
                      
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
                      
                      font-style: normal;
                      font-size: 20px;
                      text-align: left;
                      "
                  >
                    You've entered ${email} as the email address for your account. Please
                    verify this email address by clicking button below.
                  </p>
                  <a href="https://sisprogress.com/primaryemail?token=${item.token}">
                    <button
                      style="
                        width: 130px;
                        height: 40px;
                        background: #425dac;
                        border-radius: 5px;
                        border:none;  
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 27px;
                        color: #ffffff;
                        cursor:pointer;
                      "
                    >
                      Verify
                    </button>
                  </a>
                </div>
                <div
                  style="width: 70%; margin-top: 30px"
                  style="border-top: 1px solid #d4d4d4;border-bottom: 1px solid #d4d4d4;"
                >
                  <p style="font-size: 20px; line-height: 30px;text-align:left;"
                    >If the button is not working please use the link below:
                    <a
                      href="https://sisprogress.com/primaryemail?token=${item.token}"
                      style="color: #425dac;text-align:left;font-size:18px;"
                      >https://sisprogress.com/primaryemail?token=${item.token}</a
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
        return res.status(200).json("email is sent");
      }
    } else {
      return res.status(403).json("email already in use");
    }
  } catch (error) {
    console.log(error);
  }
};
const verify = async (req, res) => {
  try {
    const { token } = req.body;
    const myEmail = await UserEmails.findOne({ where: { token } });
    if (myEmail && moment().diff(myEmail.tokenCreatedAt, "hours") <= 24
      ) {
        const role = myEmail.role.split("toBe")[1];
        await UserEmails.destroy({
        where: {
          userId: myEmail.userId,
          role,
          token: { [sequelize.Op.ne]: token },
        },
      });
      (myEmail.isVerified = true),
        (myEmail.role = role),
        (myEmail.token = jwt.sign(
          { email: myEmail.email },
          process.env.SECRET
        ));
      myEmail.tokenCreatedAt = null;
      await myEmail.save();
      return res.json({
        success: true,
        newEmail: myEmail.email,
        emailType: role,
      });
    } else {
      return res.status(403).json("token timeout!");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteSecondaryEmail = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const secondaryEmail = await UserEmails.destroy({
      where: {
        [sequelize.Op.or]: [{ role: "Secondary" }, { role: "toBeSecondary" }],
        userId: user.id,
      },
    });
    console.log(secondaryEmail);
    return res.json("email has been successfuly deleted!");
  } catch (error) {
    console.log(error);
  }
};

const isEmailFree = async (req, res) => {
  try {
    let { email } = req.query;
    email = email.toLowerCase();

    const user = await UserModel.findOne({
      include: [{ model: UserEmails, where: { email } }, DeletedUsers],
    });
    if (!user || (user.DeletedUser && user.DeletedUser.isVerified === true)) {
      return res.status(200).json("Free");
    }
    return res.status(403).json("existing email address");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateEmail,
  verify,
  deleteSecondaryEmail,
  isEmailFree,
};
