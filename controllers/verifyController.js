const model = require("../models").UserEmails;
const UserModel = require("../models").Users;
const jwt = require("jsonwebtoken");
const moment = require("moment");
const DeletedUsers = require("../models").DeletedUsers;
const DeactivatedUsers = require("../models").DeactivatedUsers;

const verify = async (req, res) => {
  const token = req.query.token;
  const item = await model.findOne({ where: { token } });
  try {
    if (item) {
      if (
        item.isVerified === false &&
        moment().diff(item.tokenCreatedAt, "hours") <= 24
      ) {
        item.isVerified = true;
        item.token = jwt.sign(
          { user_id: item.id, email: item.email },
          process.env.SECRET
        );
        item.tokenCreatedAt = null;
        await item.save();
        return res.status(200).json({ success: true });
      } else {
        item.token = jwt.sign(
          { user_id: item.id, email: item.email },
          process.env.SECRET
        );
        item.tokenCreatedAt = moment();
        return res.status(403).json("token timeout!");
      }
    } else {
      return res.status(404).json("user does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await UserModel.findOne({
      where: { token },
      include: [DeletedUsers],
    });
    if (user) {
      if (
        user.DeletedUser &&
        moment().diff(user.DeletedUser.deleteTime, "days") <= 5
      ) {
        user.DeletedUser.isVerified = true;
        user.DeletedUser.deleteTime = null;
        user.token = null;

        user.DeletedUser.save();
        user.save();
        return res.json({ success: true });
      } else {
        return res.status(403).json("token timeout!");
      }
    } else {
      return res.status(404).json("user not found!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

const deactiveUser = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await UserModel.findOne({
      where: { token },
      include: [DeactivatedUsers],
    });
    if (user) {

      if (
        user.DeactivatedUser &&
        moment().diff(user.DeactivatedUser.deactivateTime, "days") <= 5
      ) {
        user.DeactivatedUser.isVerified = true;
        user.DeactivatedUser.deactivateTime = moment();

        user.DeactivatedUser.save();

        const transporter = nodemailer.createTransport({
          host: "mail.privateemail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
        let mailOptions = {};
        if (role == "Secondary") {
          mailOptions = {
            from: "info@sisprogress.com",
            to: email,
            subject: "Verify Secondary Email",
            html: ``,
            attachments: [
              {
                filename: "Email.png",
                path: "./controllers/Email.png",
                cid: "logo",
              },
            ],
          };
        } else {
          mailOptions = {
            from: "info@sisprogress.com",
            to: email,
            subject: "Verify Email",
            html: `<center>
          <img src='cid:logo' style="width:450px;height:250px;" >
          <h2>Reset Email</h2>
          <p>
           You've entered <b>${email}</b> as the email address for your account.
           Please verify this email address by clicking button below. 
          </p>
          <br>
          <br>
           <button style="background-color: blue;
           border: none;
           border-radius:20px;
           color: white;
           padding: 15px 32px;
           text-align: center;
           text-decoration: none;
           display: inline-block;
           ">
             <a href='https://sisprogress.com/primaryemail?token=${item.token}'
             style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
           </button>
          <br>
           <b>if the button is not working please use the link below</b>
           <br>
          <br>
             <b><a href='https://sisprogress.com/primaryemail?token=${item.token}'>https://sisprogress.com/primaryemail?token=${item.token} </a></b>
           </center>`,
            attachments: [
              {
                filename: "Email.png",
                path: "./controllers/Email.png",
                cid: "logo",
              },
            ],
          };
        }
        transporter.sendMail(mailOptions);
        return res.json({ success: true });
      } else {
        return res.status(403).json("token timeout!");
      }
    } else {
      return res.status(404).json("user not found!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

module.exports = {
  verify,
  deleteUser,
  deactiveUser
};
