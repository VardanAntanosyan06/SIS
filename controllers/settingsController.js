const UserModel = require("../models").Users;

const change = async (req,res)=>{
    try {
        const {fullName,phone,country,email,age,greade,university,BusinessSchool,BusinessManager} = req.body;
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

        if(user){
            user.fullName = fullName!==undefined?fullName:user.fullName;
            item.description = description!==undefined?description:item.description;
            await item.save();
            return res.json(item)
            }    
            
            
        return res.status(404).json("user not found")
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}