const model = require("../models").UserEmails;
const bcrypt = require("bcrypt")

const sendMail = async (req, res) => {
  try {
    const {email} = req.body;
    
    
    const user = await UserEmails.findOne({where:{}})
  } catch (error) {
    console.log(error);
  }
};
  

module.exports={
  resetPass
}