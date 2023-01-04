const model = require("../models").Users;
const bcrypt = require("bcrypt")

const resetPass = async (req, res) => {
  try {
    const {password} = req.body;
    const {email,id} = req.query;

    const user = await model.findOne({where:{id}})
      if(user && (await bcrypt.compareSync(email, user.email))){
      user.password = password;

      user.save();
      return res.json({success:true})
    }
    return res.json("something wnet wrong!")
  } catch (error) {
    console.log(error);
  }
};


module.exports={
  resetPass
}