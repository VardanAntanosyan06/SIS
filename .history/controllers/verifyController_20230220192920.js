const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    const token = req.query.token
    const item = await model.findOne({where:{token}})
    try {
        console.log(token,"++++++++++++++++++++++++++++++++++++");
        if(item){
            item.isVerified = true;
            item.token = null;
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