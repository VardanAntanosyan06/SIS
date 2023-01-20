const TaskModel = require("../models").Tasks
const SubTaskModel = require("../models").SubTasks;
const TaskNotFree = require("../models").TasksNotFree;

const changeSubTaskStatus = async (req,res)=>{
    try {
        const {id,status} = req.body;

        const item = await SubTaskModel.findOne({where:{id}});
        if(item){
            console.log(item);
            item.done = status;
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