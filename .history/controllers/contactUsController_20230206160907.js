const model = require("../models").ContactUs;

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
            html:`<button style="  background-color: blue;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 30px;">${randomString}</button>`,
          };
    
        transporter.sendMail(mailOptions);
        return res.json("email is sent")
    } catch (error) {
        
    }
}