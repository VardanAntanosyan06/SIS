const { where } = require("sequelize");

const TaskModel = require("../models").Tasks
const SubTaskModel = require("../models").SubTasks
const SubTask_per_User = require("../models").SubTask_per_User;
const Task_per_User = require("../models").Task_per_User;
const TimeTaskModel = require("../models").timeTasks;


const UserModel = require("../models").Users;

const changeSubTaskStatus = async (req,res)=>{
    try {
        const {subTaskId,status,description} = req.body;
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
        
        const mySubTask = await SubTaskModel.findOne({
                where:{id:subTaskId},
        })
  
        const item = await SubTask_per_User.findOne({where:{subTaskId,userId:user.id}});
        const thisSubtask = await SubTaskModel.findOne({where:{id:subTaskId}})
        const thisTask = await Task_per_User.findOne({where:{taskId:mySubTask.taskId,userId:user.id}})

        if(item){
            item.status = status!==undefined?status:item.status;
            item.description = description!==undefined?description:item.description;
            await item.save();

            const myTask = await SubTaskModel.findAll({
                where:{taskId:mySubTask.taskId},
                include:{
                    model:SubTask_per_User,
                    attributes:['status'],
                    where:{userId:user.id}
                }
            })   
            if(status!==undefined){
                if(status===true){
                    thisTask.point += thisSubtask.points
                    await thisTask.save()
                }else if(status===false){
                    thisTask.point -= thisSubtask.points;
                    await thisTask.save()
                }
            }

            let completedSubTasks = myTask.filter((e)=>e.SubTask_per_Users[0].status===true)
            let taskStatus = "";
            if(completedSubTasks.length>0){
                if(new Date()>thisTask.deadline){
                    if(completedSubTasks.length<myTask.length){
                        taskStatus = "Overdue"
                    }
                    if(completedSubTasks.length===myTask.length){
                        taskStatus = "Late Done"
                        thisTask.point += 0.5
                        await thisTask.save()
                    }
                }else{
                if(completedSubTasks.length<myTask.length){
                    taskStatus = "In Progress"
                }
                if(completedSubTasks.length===myTask.length){
                    const taskPoint = await TimeTaskModel.findOne({where:{task_id:mySubTask.taskId}})
                    taskStatus = "Completed";
                    thisTask.point += taskPoint.point
                    await thisTask.save()
                }}
                
            }
            if(taskStatus!==""){
                thisTask.status = taskStatus

                thisTask.save();
            }
            return res.json(myTask)
            }    
            
            
        return res.status(404).json("not found")
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}


const addDescription = async (req,res)=>{
    try {
    const {id} = req.query;
    const {authorization: token} = req.headers;
    const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

        const myTask = await Task_per_User.findOne({where:user.id})

    } catch (error) {
        
    }
}
module.exports = {
    changeSubTaskStatus,
}