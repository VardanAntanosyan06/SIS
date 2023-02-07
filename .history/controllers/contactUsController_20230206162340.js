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
            <div>
            <h3>Full Name - </h3>
            <span>${fullName}</span>
            </div>

            <div>
            <h3> Phone - </h3>
            <span>${phone}</span>      
            </div> 
            <div>     
            <h3> Email - </h3>
            <span>${email}</span>
            </div>
            <div
            <h3> description - </h3>
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