const UserEmails = require("../models").UserEmails;
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")

const sendMail = async (req, res) => {
  try {
    const {email} = req.body;
    
    const user = await UserEmails.findOne({where:{email}})

    if(user){
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
        html:
       `<center>
       <img src='cid:logo' style="width:450px;height:250px;" >
       <h2>Verify your email address </h2>
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
          <a href='http://45.55.36.223/message?token=${user.token}'
          style="color:#fff;text-decoration-line: none;font-size:20px;">Verify your email address</a>
        </button>
       <br>
        <b>if the button is not working please use the link below</b>
        <br>
       <br>
          <b><a href='http://45.55.36.223/message?token=${user.token}'></a></b>
        </center>
          `,

          attachments: [{
            filename: 'Password.png',
            path: './controllers/Password.png',
            cid: 'logo' 
       }]
      };


      transporter.sendMail(mailOptions);
      return res.status(200).json("email is sent!");
    }else{
      return res.json("invalid email!")
    }
  } catch (error) {
    console.log(error);
  }
};
  
const resetPassword = async (req,res)=>{
  try {
    const {token,password} = req.body;
    console.log(token);
    const user = await UserEmails.findOne({where:{token}})
    if (user) {
      
    
    user.password = bcrypt.hashSync(password, 10);
    user.token = jwt.sign(
      {email},
      process.env.SECRET
      )

      await user.save()
      return res.json({success:true})
    }else{
      return res.json("user not found!")
    }
  } catch (error) {
      console.log(error);
  }
}
module.exports={
  sendMail,
  resetPassword
}