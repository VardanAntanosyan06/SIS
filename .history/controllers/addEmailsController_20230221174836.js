  const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users;
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const randomString = crypto.randomBytes(3).toString("hex");
const jwt = require("jsonwebtoken");

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
        userId: user.id,
        password: null,
        role: "toBeSecundary",
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
        subject: "Reset Email",
        html: `<center>
        <img src='cid:logo' style="width:450px;height:250px;" >
        <h2>Reset Email</h2>
        <p>
         You've entered <b>${email}</b> as the  email address for your account.
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
           <a href='http://45.55.36.223/message?token=${item.token}'
           style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
         </button>
        <br>
         <b>if the button is not working please use the link below</b>
         <br>
        <br>
           <b><a href='http://45.55.36.223/message?token=${item.token}'></a></b>
         </center>`,
        attachments: [
          {
            filename: "Email.png",
            path: "./controllers/Email.png",
            cid: "logo",
          },
        ],
      };

      transporter.sendMail(mailOptions);
      return res.json("email is sent");
    }
    return res.json("Email already in use");
  } catch (error) {
    console.log(error);
  }
};


const verify = async (req,res)=>{
  try {
    const {token} = req.body;
    const myEmail = await UserEmails.findOne({where:{token}})
    console.log(myEmail);
    const myEmails = await UserEmails.destroy(({where:{userId:myEmail.userId,role:"Secondary"}}))
    myEmail.isVerified = true,
    myEmail.role = "Secondary",
    myEmail.token = jwt.sign({ email:myEmail.email }, process.env.SECRET)


    return res.json({succ})
} catch (error) {
      console.log(error);
}
}

module.exports = {
  updateEmail,
  verify
};
