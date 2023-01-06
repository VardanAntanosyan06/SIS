const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
require("dotenv").config();
const model = require("../models").Users


const sendMail = async (req,res)=>{
    try {
        const {email} = req.body
        const user = await model.findOne({where:{email}})
    if(user){
    const hashEmail = bcrypt.hashSync(email, 10);
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },  
    });
    const mailOptions = {
      from: "davit.manukyan.d@tumo.org",
      to: email,
      subject: `reset Password user ${user}`,
      html: "<a href='http://164.90.224.111/resetPassword?email=" +hashEmail+ "?id="+user.id+"'>reset password</a>",
    };


      transporter.sendMail(mailOptions, (err) => {
      err?console.log(err):null
    });
    return res.json("email is sent!")
    }   
    return res.json("user not found") 
} catch (error) {
        console.log(error);
    }
}

module.exports = {
  sendMail
}