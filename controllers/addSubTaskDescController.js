const SubTaskModel = require("../models").SubTasks;
const UserModel = require("../models").Users
const TaskModel = require("../models").Tasks
const CalendarModel = require("../models").Calendar


const addDescription = async (req,res)=>{
    try {
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
        const {description,id} = req.body;
        
        const newdesc = await SubTaskModel.findOne({where:{id}})

        newdesc.description = description;

        newdesc.save();
        
        return res.status(200).json(newdesc);

    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    addDescription,
}