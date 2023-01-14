const model = require("../models").Users;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  try {
    const {email, password } = req.body;

    const user = await model.findOne({where:{email}})
    if(user && user.isVerifed && (await bcrypt.compareSync(password, user.password))){
      const token = jwt.sign(
        {user_id: user.id, email},
        process.env.SECRET
    );
    user.token = token;
    user.save();

    return res.status(200).json({user,success:true});
    }
    return res.status(403).json("invalid email or password")
  } catch (error) {
    console.log(error);
  }
};


module.exports={
  login
}