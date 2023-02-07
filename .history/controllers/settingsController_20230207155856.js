const UserModel = require("../models").Users;

const change = async (req,res)=>{
    try {
        const {fullName,phone,country,email,age,grade,university,academicProgram,study} = req.body;
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

        if(user){
            user.fullName = fullName!==undefined?fullName:user.fullName;
            user.phone = phone!==undefined?phone:user.phone;
            user.country = country!==undefined?country:user.country;
            user.email = email!==undefined?email:user.email;
            user.age = age!==undefined?age:user.age;x
            user.grade = grade!==undefined?grade:user.grade;
            user.university = university!==undefined?university:user.university;
            user.academicProgram = academicProgram!==undefined?academicProgram:user.academicProgram;
            user.study = study!==undefined?study:user.study;
            await user.save();
            return res.json(user)
            }    
            
        return res.status(404).json("user not found")
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}

module.exports = {
    change
}