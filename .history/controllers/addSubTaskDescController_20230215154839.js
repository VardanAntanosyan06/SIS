const { request } = require("express");

const SubTaskModel = require("../models").SubTasks;
const UserModel = require("../models").Users
const TaskModel = require("../models").Tasks
const feedback_of_Task_per_User = require("../models").feedback_of_Task_per_User;

const CalendarModel = require("../models").Calendar


const addDescription = async (req,res)=>{
    try {
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
        const {feedback,taskId} = req.body;
        const Task = await TaskModel.findOne({where:{userId:user.id,id:taskId}})

        const newDesc = await feedback_of_Task_per_User.create({
            taskId,
            userId:user.id,
            feedback: DataTypes.STRING
        })

        return res.status(200).json(newdesc);

    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    addDescription,
}