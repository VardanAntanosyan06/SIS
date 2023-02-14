const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    console.log(req.query);
    const token = req.query.token
    const item = await model.findOne({where:{token}})
    if(item){
        item.isVerified = true;

        await item.save();
        return res.send(`
        <center>
        <h1>you have successfully registered</h1>
       </center>
        `)
    }
    res.redire==
    return res.json("something went wrong")
}

module.exports = {
    verify
}   