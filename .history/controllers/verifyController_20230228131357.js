const model = require("../models").UserEmails;
const jwt = require("jsonwebtoken");


const verify = async (req,res)=>{
    const token = req.query.token
    const item = await model.findOne({where:{token}})
    try {
        if(item){
            item.isVerified = true;
            item.token = jwt.sign(
                {user_id: item.id, email:item.email},
                process.env.SECRET
            );
            await item.save();
            return res.json({success:true})
        }
        return res.json({success:false})
} catch (error) {
    console.log(error);
}
}

module.exports = {
    verify
}   