

const CalendarModel = require("../models").Calendar;
const TaskModel = require("../models").Tasks;
const UserModel = require("../models").Users;

const create = async (req, res) => {
   const {authorization: token} = req.headers;
   const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
  const {taskId,startDate,position} =req.body;
  const isTasks = await CalendarModel.findOne({where:{taskId}})
  try {
    if(!isTasks){
    if(position){
      const newTask = await CalendarModel.create({
        taskId,
        startDate:new Date(startDate),
        userId:user.id,
        position
      });

      if (newTask) {
        const task = await CalendarModel.findOne({ where: {taskId} });
        newTask.isFree = false
        task.status = "planed"
        await task.save();
        const myTask = await TaskModel.findOne({where:{id:taskId}})
        myTask.isFree = false;

        await myTask.save();
      }
      return res.status(200).json(newTask);
    }
    const today = new Date().getDate();
    
    const myTasks = await CalendarModel.findAll();
    const positionLength = myTasks.map((el)=>{
      if(el.startDate){
        return el.startDate.getDate() == today;
      }
    })
    
    const newTask = await CalendarModel.create({
        taskId,
        startDate:new Date(startDate),
        userId:user.id,
        position:positionLength.length>0?positionLength.length+1:1
      });

      if (newTask) {
        const task = await CalendarModel.findOne({ where: {taskId} });
        task.status = "planed"
        await task.save();
        const myTask = await TaskModel.findOne({where:{id:taskId}})
        myTask.isFree = false;
        

      }
      return res.status(200).json(newTask);
    }
    return res.json("task already exit");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong")
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await CalendarModel.findAll();

    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json("something went wrog");
  }
};
module.exports = {
  create,
  getAllTasks,
};
