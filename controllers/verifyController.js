const model = require("../models").UserEmails;
const UserModel = require("../models").Users;
const jwt = require("jsonwebtoken");
const moment = require("moment");
const DeletedUsers = require("../models").DeletedUsers;
const DeactivatedUsers = require("../models").DeactivatedUsers;
const nodemailer = require("nodemailer");

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
      include: [DeletedUsers,model],
    });
    if (user) {
      if (
        user.DeletedUser &&
        moment().diff(user.DeletedUser.deleteTime, "days") <= 5
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
        let mailOptions = {
            from: "info@sisprogress.com",
            to: user.UserEmails[0].email,
            subject: "Farewell and a Special Thank You",
            html: `<center>
            <div>
            <p style="
            font-style: normal;
            font-weight: 600;
            line-height: 48px; margin-bottom:19px;text-align:left;margin-bottom:25px;color:#0D0D0D;width:70%;font-size: 20px;">Dear <b>${user.fullName}</b> </p>
            <p style="font-size: 18px; width:70%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">We're saddened by your departure and truly appreciate the time you spent as part of our college admissions consulting community. We respect your decision to delete your account and understand the gravity of this choice</p>
            <p style="font-size: 18px; width:70%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D"> Your feedback is invaluable to us, and we'd be grateful if you could share the reasons behind your decision. Please take a few moments to complete our brief survey, which will help us improve our services. Upon completion, you'll receive a $10 Amazon Gift Card as a token of our gratitude.</p>
            
            <p style="font-size: 18px; width:70%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">Thank you once again for your time, and we wish you all the best in your future endeavors.</p>
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
          </center>`,
          attachments: [
            {
              filename: "SISlogo.png",
              path: "controllers/SISlogo.png",
              cid: "SISlogo",
            },
          ],
        }
        transporter.sendMail(mailOptions);
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
      include: [DeactivatedUsers,model],
    });
    if (user) {
      if (
        user.DeactivatedUser &&
        moment().diff(user.DeactivatedUser.deactivateTime, "days") <= 5
      ) {
        user.DeactivatedUser.isVerified = true;
        user.DeactivatedUser.deactivateTime = moment();

        user.DeactivatedUser.save();
        // console.log(user.UserEmails);
        const transporter = nodemailer.createTransport({
          host: "mail.privateemail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
        let mailOptions = {
            from: "info@sisprogress.com",
            to: user.UserEmails[0].email,
            subject: " We Hope to See You Again Soon!",
            html: `<center>
            <div>
            <p style="
            font-style: normal;
            font-weight: 600;
            line-height: 48px; margin-bottom:19px;text-align:left;margin-bottom:25px;color:#0D0D0D;width:70%;font-size: 20px;">Dear <b>${user.fullName}</b> </p>
            <p style="font-size: 18px; width:70%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">We noticed that you've chosen to deactivate your account for a month. We appreciate the time you've spent with us as part of our college admissions consulting community and understand that sometimes a break is needed. We value your feedback and would love to learn more about the reasons behind your decision to deactivate your account. Please consider taking a few moments to complete our brief survey, which will help us improve our services. As a token of gratitude, you'll receive a $10 Amazon Gift Card upon completion.</p>
            <p style="font-size: 18px; width:70%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">We value your feedback and would love to learn more about the reasons behind your decision to deactivate your account. Please consider taking a few moments to complete our brief survey, which will help us improve our services. As a token of gratitude, you'll receive a $10 Amazon Gift Card upon completion.</p>
            
            <p style="font-size: 18px; width:70%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">Remember, you can reactivate your account within a month by simply logging back in. We hope to see you return soon and continue to support you in your college admissions journey.</p>
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
          </center>`,
          attachments: [
            {
              filename: "SISlogo.png",
              path: "controllers/SISlogo.png",
              cid: "SISlogo",
            },
          ],
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
