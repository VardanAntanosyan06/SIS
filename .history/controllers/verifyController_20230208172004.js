const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    const id = req.query.email.split("id=")[1]
    console.log(id);
    const item = await model.findOne({where:{userId:id}})
    if(item){
        item.isVerified = true;

        await item.save();
        return res.send(`
        <h1>Success</h1>
        
        `)
    }
    return res.json("something went wrong")
}

module.exports = {
    verify
}   