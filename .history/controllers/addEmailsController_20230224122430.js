  const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users;
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const randomString = crypto.randomBytes(3).toString("hex");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize")


const updateEmail = async (req, res) => {
  try {
    const { email,role } = req.body;
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
        role: "toBe"+role,
        token: jwt.sign(
          { email }, 
          process.env.SECRET
          ),
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
      const mailOptions = {};
      if(role=="Secondary"){
      mailOptions = {
        from: "info@sisprogress.com",
        to: email,
        subject: "Verify Secondary Email",
        html: `<center>
        <img src='cid:logo' style="width:450px;height:250px;" >
        <h2>Reset Email</h2>
        <p>
         You've entered <b>${email}</b> as the secondary email address for your account.
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
           <a href='http://45.55.36.223/secondarymailverify?token=${item.token}'
           style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
         </button>
        <br>
         <b>if the button is not working please use the link below</b>
         <br>
        <br>
           <b><a href='http://45.55.36.223/secondarymailverify?token=${item.token}'>http://45.55.36.223/secondarymailverify?token=${item.token} </a></b>
         </center>`,
        attachments: [
          {
            filename: "Email.png",
            path: "./controllers/Email.png",
            cid: "logo",
          },
        ],
      };
    }else{
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
           <a href='http://45.55.36.223/secondarymailverify?token=${item.token}'
           style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
         </button>
        <br>
         <b>if the button is not working please use the link below</b>
         <br>
        <br>
           <b><a href='http://45.55.36.223/secondarymailverify?token=${item.token}'>http://45.55.36.223/secondarymailverify?token=${item.token} </a></b>
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
    if(myEmail){
      let role = myEmail.role.split("toBe");
      await UserEmails.destroy(({where:{
      userId:myEmail.userId,
      role:"Secondary",
      token:{[sequelize.Op.ne]: token}, 
    }}))
    myEmail.isVerified = true,
    myEmail.role = "Secondary",
    myEmail.token = jwt.sign({ email:myEmail.email }, process.env.SECRET)

    await myEmail.save()
    return res.json({success:true,newEmail:myEmail.email,emailType:"Secondary"}) 
    }
    return res.json({success:false}) 
} catch (error) {
      console.log(error);
}
}

const deleteSecundaryEmail = async (req,res)=>{
  try {
    const {authorization: token} = req.headers;
    const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

    const secundaryEmail = await UserEmails.destroy({where:{role:"Secondary",userId:user.id}})
    console.log(secundaryEmail);
    return res.json("email has been successfuly deleted!")
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  updateEmail,
  verify,
  deleteSecundaryEmail
};
