const TaskModel = require("../models").Tasks
const SubTaskModel = require("../models").SubTasks;
const TaskNotFree = require("../models").TasksNotFree;

const changeSubTaskStatus = async (req,res)=>{
    try {
        const {id,status} = req.body;

        const item = await SubTaskModel.findOne({where:{id}});
        if(item){
            item.status = status;
            await item.save();

        const taskId = item.taskId;
        const calendar = await TaskNotFree.findOne({ where: {TaskId:taskId } });
    
        const task = await TaskModel.findOne({where:{id:taskId}});
        const SubTask = await SubTaskModel.findOne({where:{taskId}});
        const isFinish = SubTask.filter((el)=>{
            return el.done==true
        })
        if(item && isFinish.length == item.SubTasks.length){
            calendar.status = "done";
            await calendar.save();
            
            return res.status(200).json(SubTask)
        }else if(item && isFinish.length == item.SubTasks.length>=1){
            calendar.status = "in process";
            await calendar.save();
            
            return res.status(200).json(task)
        }
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