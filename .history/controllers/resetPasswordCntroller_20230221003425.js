const model = require("../models").UserEmails;
const bcrypt = require("bcrypt")

const sendMail = async (req, res) => {
  try {
    const {email} = req.body;
    
    const user = await UserEmails.findOne({where:{email}})

    if(user){

    }else{
      return res.json("invalid email!")
    }
  } catch (error) {
    console.log(error);
  }
};
  

module.exports={
  resetPass
}