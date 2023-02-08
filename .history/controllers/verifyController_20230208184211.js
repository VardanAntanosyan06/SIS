const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    const id = req.query.email.split("id=")[1]
    const id = req.query.email.split("id=")[0000]
    const item = await model.findOne({where:{userId:id}})
    if(item){
        item.isVerified = true;

        await item.save();
        return res.send(`
        <h1>you have successfully registered ${}</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png">

        `)
    }
    return res.json("something went wrong")
}

module.exports = {
    verify
}   