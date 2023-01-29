const TaskModel = require("../models").Tasks
const SubTask_per_User = require("../models").SubTask_per_User;

const changeSubTaskStatus = async (req,res)=>{
    try {
        const {id,status} = req.body;

        const item = await SubTask_per_User.findOne({where:{subTaskId:id}});
        if(item){
            item.status = status;
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