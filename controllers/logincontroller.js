const model = require("../models").Users;
const bcrypt = require("bcrypt")

const login = async (req, res) => {
  try {
    const {email, password } = req.body;

    const user = await model.findOne({where:{email}})
    if(user && user.isVerifed && (await bcrypt.compareSync(password, user.password))){
        return res.json({success:true})
    }
    return res.json("invalid email or password")
  } catch (error) {
    console.log(error);
  }
};


module.exports={
  login
}