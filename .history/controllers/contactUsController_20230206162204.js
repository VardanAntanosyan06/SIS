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
            <h3>Full Name - </h3>
            <span>${fullName}</span>
            <h3>    email - </h1>
            <span>${phone}</span>
            <h1> Phone - </h1>
            <span>${phone}</span>            
            <h1> Email - </h1>
            <span>${email}</span>
            <h1> description - </h1>
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