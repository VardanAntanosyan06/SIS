const TaskModel = require("../models").Tasks
const SubTaskModel = require("../models").SubTasks;
const CalendarModel = require("../models").Calendar

const changeSubTaskStatus = async (req,res)=>{
    try {
        const {id,status} = req.body;

        const item = await SubTaskModel.findOne({where:{id}});
        if(item){
            item.status = status;
            await item.save();

        const taskId = item.taskId;
        const calendar = await CalendarModel.findOne({ where: { id: taskId } });

        const task = await TaskModel.findOne({where:{id:taskId}});
        const isFinish = task.SubTasks.filter((el)=>{
            return el.status==true
        })
        if(item && isFinish.length == item.SubTasks.length){
            calendar.status = "done";
            await calendar.save();
            
            return res.status(200).json(task)
        }else if(item && isFinish.length == item.SubTasks.length>=1){
            calendar.status = "in process";
            await calendar.save();
            
            return res.status(200).json(task)
        }
        }
        return res.status(404).json("not found")
    } catch (error) {
        return res.json("something wnet wrong")
    }
}


module.exports = {
    changeSubTaskStatus,
}