const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users
const crypto = require("crypto");
const nodemailer = require("nodemailer")
const randomString = crypto.randomBytes(3).toString('hex');
const addEmail = async (req,res)=>{
    try {
    const {authorization: token} = req.headers;
    const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})   
    const {email} = req.body;
    const isMail = await UserEmails.findOne({where:{userId:user.id,email}})
    
    if (!isMail) {
        
    UserEmails.create({
        email,
        userId:user.id
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
        to: email,
        subject: "verification",
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
}
return res.json("email is already in use")
    } catch (error) {
        console.log(error);
    }
}

const verifyEmail = async (req,res)=>{
    try {
        const {email,code} = req.body
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})   

        if(code===randomString){
            const myEmail = await UserEmails.findOne({where:{userId:user.id,email}})
            console.log(myEmail);
            myEmail.isVerified = true;
            await myEmail.save()
            return res.json({success:true})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        console.log(error);
    }
}

const updateEmail = async (req,res)=>{
    try {
        const {email,code} = req.body
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})   

        if(code===randomString){
            const myEmail = await UserEmails.findOne({where:{userId:user.id,email}})
                    myEmail.isVerified = true;
            await myEmail.save()
            return res.json({success:true})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addEmail,
    verifyEmail
}