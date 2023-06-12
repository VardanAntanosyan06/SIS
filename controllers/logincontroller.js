const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models").Users;
const UserEmails = require("../models").UserEmails;
const { Op, where } = require("sequelize");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const moment = require("moment");
const DeletedUsers = require("../models").DeletedUsers;
const DeactivatedUsers = require("../models").DeactivatedUsers;
const DeletionReasone = require("../models").DeletionReasone;
const DeactivationReasone = require("../models").DeactivationReasone;
const Task_per_Users = require("../models").Task_per_User;
const SubTask_per_Users = require("../models").SubTask_per_User;

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase();
    let token;
    let allUserEmails = await UserModel.findAll({
      include: [
        { model: UserEmails, where: { email, role: "First" } },
        DeletedUsers,
        DeactivatedUsers,
      ],
    });

    allUserEmails = allUserEmails.filter(
      (e) => e.DeletedUser === null || e.DeletedUser.isVerified === false
    );
    const user = allUserEmails.sort((a, b) => a.id - b.id)[
      allUserEmails.length - 1
    ];
    if (
      user &&
      user.UserEmails &&
      user.UserEmails[0].isVerified &&
      (await bcrypt.compareSync(password, user.UserEmails[0].password)) &&
      (!user.DeletedUser || user.DeletedUser.isVerified === false)
    ) {
      if (
        user.DeactivatedUser !== null &&
        user.DeactivatedUser.isVerified === true &&
        moment().diff(user.DeactivatedUser.deactivateTime, "days") >= 30
      ) {
        await DeletedUsers.destroy({
          where: { userId: user.id },
        });

        await DeletedUsers.create({
          userId: user.id,
          deleteTime: moment(),
          isVerified: true,
        });
        user.token = null;

        await user.save();
        await DeactivatedUsers.destroy({ where: { userId: user.id } });
        return res.status(403).json("invalid email or password");
      } else {
        await DeactivatedUsers.destroy({ where: { userId: user.id } });
        if (user.token) {
          token = user.token;
        } else {
          token = jwt.sign({ user_id: user.id, email }, process.env.SECRET);
          user.token = token;
          user.save();
        }

        return res.status(200).json({ token: user.token, success: true });
      }
    }
    return res.status(403).json("invalid email or password");
  } catch (error) {
    console.log(error);
  }
};

const logOut = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await UserModel.findOne({
      include: {
        model: UserEmails,
        where: { email },
      },
    });

    if (user) {
      user.token = null;
      await user.save();

      return res.json({ success: true });
    }
    return res.json("user not found!");
  } catch (error) {
    return "something went wrong";
  }
};

const isLogined = async (req, res) => {
  try {
    const { token } = req.body;

    const user = await UserModel.findOne({
      where: { token },
      include: [DeletedUsers],
    });
    if (user) {
      const secondaryEmail = await UserEmails.findOne({
        where: {
          userId: user.id,
          [Op.or]: [{ role: "Secondary" }, { role: "toBeSecondary" }],
        },
        attributes: ["email", "isVerified"],
      });
      const firstEmail = await UserEmails.findOne({
        where: { userId: user.id, role: "First" },
        attributes: ["email", "isVerified"],
      });

      let be = false;
      if (
        user.img ==
        "http://drive.google.com/uc?export=view&id=1T4h9d1wyGy-apEyrTW_D6C1UvdLSE166"
      )
        be = true;
      const emails = {
        ...user.dataValues,
        firstEmail,
        secondaryEmail,
        be,
      };

      return res.status(200).json(emails);
    }
    return res.status(404).send("not found");
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong");
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
      include: {
        model: UserEmails,
      },
    });
    if (await bcrypt.compareSync(password, user.UserEmails[0].password)) {
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
        to: user.UserEmails[0].email,
        subject:
          "SIS Progress: Are you sure you want to confirm your account deletion?",
        html: `
        <center>
        <div>
        <h1 style="
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px; margin-bottom:25px;color:#0D0D0D">Delete Request: SIS Progress Account</h1>
        <p style="font-size: 18px; width:80%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">We have received your request to delete your account. To confirm the deletion of your account, please click on the confirm button or the link provided below.</p>
        <p style="font-size: 18px; width:80%; line-height: 30px; text-align:left;margin-bottom:25px;"><a href="https://sisprogress.com/deletemessage?token=${user.token}" style="color:#425DAC;font-size:18px;color:#15c">https://sisprogress.com/deletemessage?token=${user.token}</a></p>
        <a href="https://sisprogress.com/deletemessage?token=${user.token}" style="text-decoration:none"><div style="
        width:150px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 40px;
        background: #425DAC;
        color:#fff;
        border:none;
        border-radius: 5px; font-size: 18px;line-height: 30px;margin-bottom:25px;padding:7px 45px;box-sizing: border-box;">Confirm</div>
        </a>
        <p style="text-align:left;width:80%;margin-bottom:25px;"><span style="color:#355CCA; font-size: 18px; width:80%; line-height: 30px;">Notice:</span> <span style="font-size: 18px; width:80%; line-height: 30px;color:#0D0D0D"> Keep in mind that the confirmation link will remain active for 5 days. After this period, you will need to restart the account deletion process if you still wish to delete your account.</span></p>

        <p style="font-size: 18px; width:80%; line-height: 30px;text-align:left;color:#0D0D0D;">If you're facing any issues with our service or have any questions, don't hesitate to contact our support team at info@sisprogress.com or reach out to the co-founder of SIS Progress at nver.saghatelyan@sisprogress.com.</p>
        </div>
        <div
        style="
          width: 80%;
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
          <a href="mailto:info@sisprogress.com" target="_blank">info@sisprogress.com<wbr></a>
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
      <div style="width:80%">
      <p style="
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #646464;
      text-align: center;
      margin-top:15px;
      ">© 2023 SIS Progress, All rights reserved</p></div>
      </center>`,
        attachments: [
          {
            filename: "SISlogo.png",
            path: "controllers/SISlogo.png",
            cid: "SISlogo",
          },
        ],
      };
      transporter.sendMail(mailOptions);

      await DeletedUsers.destroy({
        where: { userId: user.id },
      });

      await DeletedUsers.create({
        userId: user.id,
        deleteTime: moment(),
        isVerified: false,
      });

      return res.status(200).json({ success: true });
    }
    return res.status(403).json("invalid password");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

const deactivate = async (req, res) => {
  try {
    const { password } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
      include: {
        model: UserEmails,
      },
    });
    if (await bcrypt.compareSync(password, user.UserEmails[0].password)) {
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
        to: user.UserEmails[0].email,
        subject:
          "SIS Progress: Are you sure you want to confirm your account deactivation?",
        html: `
        <center>
        <div>
        <h1 style="
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px; margin-bottom:25px;color:#0D0D0D">Deactivate Request: SIS Progress Account</h1>
        <p style="font-size: 18px; width:80%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">We have received your request to deactivate your account. To confirm the deactivation of your account, please click on the confirm button or the link provided below.</p>
        <p style="font-size: 18px; width:80%; line-height: 30px; text-align:left;margin-bottom:25px;"><a href="https://sisprogress.com/deactivatemessage?token=${user.token}" style="color:#425DAC;font-size:18px;color:#15c">https://sisprogress.com/deactivatemessage?token=${user.token}</a></p>
        <a href="https://sisprogress.com/deactivatemessage?token=${user.token}" style="text-decoration:none"><div style="
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #425DAC;
        color:#fff;
        border:none;
        border-radius: 5px; font-size: 18px;line-height: 30px;margin-bottom:25px;padding:7px 45px;box-sizing: border-box">Confirm</div></a>

        <p style="text-align:left;width:80%;margin-bottom:25px;"><span style="color:#355CCA; font-size: 18px; width:80%; line-height: 30px;">Notice:</span> <span style="font-size: 18px; width:80%; line-height: 30px;color:#0D0D0D"> Keep in mind that the confirmation link will remain active for 5 days. After this period, you will need to restart the account deactivation process if you still wish to deactivate your account.</span></p>

        <p style="font-size: 18px; width:80%; line-height: 30px;text-align:left;color:#0D0D0D;">If you're facing any issues with our service or have any questions, don't hesitate to contact our support team at info@sisprogress.com or reach out to the co-founder of SIS Progress at nver.saghatelyan@sisprogress.com.</p>
        </div>
        <div
        style="
          width: 80%;
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
 
          <a href="mailto:info@sisprogress.com" target="_blank">info@sisprogress.com<wbr></a>
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
      <div style="width:80%">
      <p style="
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #646464;
      text-align: center;
      margin-top:15px;
      ">© 2023 SIS Progress, All rights reserved</p></div>
      </center>`,
        attachments: [
          {
            filename: "SISlogo.png",
            path: "controllers/SISlogo.png",
            cid: "SISlogo",
          },
        ],
      };
      transporter.sendMail(mailOptions);

      await DeactivatedUsers.destroy({
        where: { userId: user.id },
      });

      await DeactivatedUsers.create({
        userId: user.id,
        deactivateTime: moment(),
        isVerified: false,
      });

      return res.status(200).json({ success: true });
    }
    return res.status(403).json("invalid password");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

const deletionReasone = async (req, res) => {
  try {
    const { reasone, type } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (type === "Delete") {
      await DeletionReasone.create({
        userId: user.id,
        reasone,
      });
      return res.json({ success: true });
    }
    await DeactivationReasone.create({
      userId: user.id,
      reasone,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const deleteForTesting = async (req, res) => {
  try {
    const { email, password,text } = req.query;

    const user = await UserEmails.findOne({ where: { email } });
    console.log(user);
    if(user && text==="$2b$10$5yjnqNn/RxYamiu0ZhhZzuL9SztPRwSpq4tzpojToQl.WHRJvguf6" &&  (await bcrypt.compare(password, user.password))){
      await UserEmails.destroy({ where: { userId: user.userId } });
      await UserModel.destroy({ where: { id: user.userId } });
      await Task_per_Users.destroy({
      where: { userId: user.userId },
    });
    await SubTask_per_Users.destroy({
      where: { userId: user.userId },
    });
    return res.json({success:true})
  }
  return res.status(403).json("invalid email or password")
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong!");
  }
};
module.exports = {
  login,
  logOut,
  isLogined,
  getUser,
  deleteAccount,
  deactivate,
  deletionReasone,
  deleteForTesting
};
