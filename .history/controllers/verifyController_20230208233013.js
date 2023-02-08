const model = require("../models").UserEmails;


const verify = async (req,res)=>{
    const id = req.query.email.split("id=")[1]
    const email = req.query.email.split("id=")[0]
    const item = await model.findOne({where:{userId:id}})
    if(item){
        item.isVerified = true;

        await item.save();
        return res.send(`
        <br>
        <br>
        <br>
        <br>
        <center>
        <h1>you have successfully registered</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" style="width:200px;height:200px">
        <a href="http://45.55.36.223:3000/login"><button style="width:300px;height:40px;border:none;border-radius:10px;background:rgb(10, 185, 11);color:#fff;font-size:30px;cursor:pointer">Back to login</button></a>
       </center>
        `)
    }
    return res.json("something went wrong")
}

module.exports = {
    verify
}   