const model = require("../models").Users;
const bcrypt = require("bcrypt")

const resetPass = async (req, res) => {
  try {
    const {password} = req.body;
    const reqQuery = req.query;
    const email = reqQuery.email.split("?id=")[0]
    const id = reqQuery.email.split("?id=")[1]

    const user = await model.findOne({where:{id}})
    if(user){
      user.password = bcrypt.hashSync(password,10);

      user.save();
      return res.json({success:true})
    }
    return res.json("user not found!")
  } catch (error) {
    console.log(error);
  }
};


module.exports={
  resetPass
}