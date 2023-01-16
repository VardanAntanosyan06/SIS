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

    return res.status(200).json({token:user.token,success:true});
    }
    return res.status(403).json("invalid email or password")
  } catch (error) {
    console.log(error);
  }
};

const logOut = async (req,res)=>{
  try {
    const {email} = req.query;
    const user = await model.findOne({
        where:{email}
    })
    user.token = null
    await user.save();

    return res.json({success:true})
  } catch (error) {
    return ("something wnet wrong")
  }
}

const isLogined = async (req,res)=>{
  try {
    const {token} = req.headers.authorization;

    const user = await model.findOne({where:{token}})

    if(user){
      return res.status(200).json(user)
    }
    return res.status(404).json("not found")
  } catch (error) {
    console.log(error);
  }
}

module.exports={
  login,
  logOut,
  isLogined
}