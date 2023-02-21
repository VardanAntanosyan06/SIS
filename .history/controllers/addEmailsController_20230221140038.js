const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users;
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const randomString = crypto.randomBytes(3).toString("hex");
const jwt = require("jsonwebtoken");

const addEmail = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const { email } = req.body;
    const isMail = await UserEmails.findOne({
      where: { userId: user.id, email },
    });

    if (!isMail) {
      const newEmail = await UserEmails.create({
        email,
        userId: user.id,
        token: jwt.sign({ email }, process.env.SECRET),
      });
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
        subject: "verification",
        html: `<button style="  background-color: blue;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;">${randomString}</button>`,
      };

      transporter.sendMail(mailOptions);
      return res.json("email is sent");
    }
    return res.json("email is already in use");
  } catch (error) {
    console.log(error);
  }
};

const sendMail = async (req, res) => {
  try {
    const { email } = req.body;
    const isMail = await UserEmails.findOne({
      where: { email },
    });
    if (!isMail) {
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
        subject: "verification",
        html: `<button style="  background-color: blue;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;">${randomString}</button>`,
      };

      transporter.sendMail(mailOptions);
      return res.json("email is sent");
    }
    return res.json("email is already in use");
  } catch (error) {
    console.log(error);
  }
};
const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });

    if (code === randomString) {
      const myEmail = await UserEmails.findOne({
        where: { userId: user.id, email },
      });
      console.log(myEmail);
      myEmail.isVerified = true;
      await myEmail.save();
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateEmail = async (req, res) => {
  try {
    const { email, newEmail } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });

    const isEmail = await UserEmails.findOne({
      where: { email },
    });
    if (!isEmail) {
      const item = await UserEmails.create({
        email,
        
      })
    }
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addEmail,
  verifyEmail,
  updateEmail,
  sendMail,
};
