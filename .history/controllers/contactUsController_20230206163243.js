const model = require("../models").ContactUs;
const nodemailer = require("nodemailer")
const sendEmail = async (req,res)=>{
    try {
        const {fullName,phone,email,description} = req.body;

        const item = await model.create({
            fullName,
            phone,
            email,
            description
        })

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
          });
          const mailOptions = {
            from: "davit.manukyan.d@tumo.org",
            to: "vantanosyan99@gmail.com",
            subject: "SIS progress Contact Us",
            html:`
            <span style = "font-size:30px;   font-weight: bold;">Full Name - </span>
            <span>${fullName}</span>
            <span>    email - </span>
            <span>${phone}</span>
            <span> Phone - </span>
            <span>${phone}</span>            
            <span> Email - </span>
            <span>${email}</span>
            <span> description - </span>
            <span>${description}</span>
            `,
          };
    
        transporter.sendMail(mailOptions);
        return res.json("email is sent")
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}

module.exports = {
    sendEmail
}