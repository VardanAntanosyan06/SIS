const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const UserModel = require("../models").Users
const UserEmails = require("../models").UserEmails
const {Op, where} = require("sequelize")
const crypto = require("crypto");

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    let token;
    const user = await UserModel.findOne({
      include:{
        model:UserEmails,
        where:{email}
      }
    })

    if(user && user.UserEmails[0].isVerified && (await bcrypt.compareSync(password, user.UserEmails[0].password))){
      if(user.token){
        token = user.token;
      }else{
       token = jwt.sign(
        {user_id: user.id, email},
        process.env.SECRET
    )
    user.token = token;
    user.save();
  }

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
    const user = await UserModel.findOne({
      include:{
        model:UserEmails,
        where:{email}
      }
    })

    if(user){
    user.token = null
    await user.save();

    return res.json({success:true})}
    return res.json('user not found!')
  } catch (error) {
    return ("something went wrong")
  }
}

const isLogined = async (req,res)=>{
  try {
    const {token} = req.body;
    
    const user = await UserModel.findOne({where:{token},include:{
      model:UserEmails,
      attributes:['email'], 
      where:{isVerified:true}
    }})
    const SecondaryEmail = await UserEmails.findOne({where:{userId:user.id,role:"Secondary",isVerified:true}})
    const firstEmail = await UserEmails.findOne({where:{userId:user.id,role:"First",isVerified:true}})

    if(user){
      return res.json(user,{firstEmail,SecondaryEmail})
    }
    return res.status(401).json("not found")
  } catch (error) {
    console.log(error);
  }
}

const getUser = async (req,res)=>{
  try {
    const {authorization: token} = req.headers;
    const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

    return res.json(user)
  } catch (error) {
    return res.json("something went wrong"),
    console.log(error);
  }
}
module.exports={
  login,
  logOut,
  isLogined,
  getUser
}