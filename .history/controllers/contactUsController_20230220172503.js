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
            to: "vantanosyan99@gmail.com",
            subject: "SIS progress Contact Us",
            html:`
            <span style = "font-size:18px; font-weight: bold;">Full Name - </span>
            <span>${fullName}</span>
            <br/>
            <span style = "font-size:18px; font-weight: bold;">Email - </span>
            <span>${email}</span>   
            <br/>
            <span style = "font-size:18px; font-weight: bold;"> Phone - </span>
            <span>${phone}</span>        
            <br/>
            <span style = "font-size:18px; font-weight: bold;"> Description - </span>
            <span style = "font-size:18px">${description}</span>
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