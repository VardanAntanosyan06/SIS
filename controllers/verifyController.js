const model = require("../models").Users;


const verify = async (req,res)=>{
    const id = req.query.email.slice(-1)
    const item = await model.findOne({where:{id}})
    if(item){
        item.isVerifed = true;

        await item.save();
        return res.json({success:true})
    }
    return res.json("something went wrong")
}

module.exports = {
    verify
}