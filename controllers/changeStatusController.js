const TaskModel = require("../models").Tasks
const SubTask_per_User = require("../models").SubTask_per_User;
const Task_per_User = require("../models").Task_per_User;

const UserModel = require("../models").Users;

const changeSubTaskStatus = async (req,res)=>{
    try {
        const {subTaskId,status,description} = req.body;
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

        const item = await SubTask_per_User.findOne({where:{subTaskId,userId:user.id}});
        if(item){
            item.status = status!==undefined?status:item.status;
            item.description = description!==undefined?description:item.description;
            await item.save();
            return res.json(item)
            }    
            
            
        return res.status(404).json("not found")
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}


module.exports = {
    changeSubTaskStatus,
}