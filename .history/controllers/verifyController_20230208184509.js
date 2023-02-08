const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    const id = req.query.email.split("id=")[1]
    const email = req.query.email.split("id=")[0]
    const item = await model.findOne({where:{userId:id}})
    if(item){
        item.isVerified = true;

        await item.save();
        return res.send(`
        <center>
        <h2>you have successfully registered</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" width:100px;height:150px>
        </center>
        `)
    }
    return res.json("something went wrong")
}

module.exports = {
    verify
}   