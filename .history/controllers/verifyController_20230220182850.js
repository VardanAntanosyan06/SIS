const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    const token = req.query.token
    const item = await model.findOne({where:{token}})
    try {
        
        if(item){
            item.isVerified = true;
            
            await item.save();
            return res.json
    }
    return res.js
} catch (error) {
    
}
}

module.exports = {
    verify
}   