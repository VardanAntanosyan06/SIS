const tasksnotfree = require("../models/tasksnotfree");


const CalendarModel = require("../models").Calendar;
const TaskModel = require("../models").Tasks;
const UserModel = require("../models").Users;
const TasksNotFree = require("../models").TasksNotFree;

const create = async (req, res) => {
  const {authorization: token} = req.headers;
  const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
  const {taskId,startDate,position} =req.body;
  const isTasks = await TasksNotFree.findOne({where:{TaskId:taskId,userId:user.id}})

  try {
    if(!isTasks){
    if(position){
      const newTask = await TasksNotFree.create({
        TaskId:taskId,
        startDate:new Date(startDate),
        userId:user.id,
        position
      });

    if (newTask) {
      newTask.status = "planed"
      newTask.isFree = false;
      await task.save();
      }
      return res.status(200).json(newTask);
    }
    const today = new Date().getDate();
    
    const myTasks = await TasksNotFree.findAll({where:{userId:user.id}});
    console.log(myTasks.length);
    const positionLength = myTasks.map((el)=>{
      if(el.startDate){
        return el.startDate.getDate() == today;
      }
    })
    
    const newTask = await TasksNotFree.create({
        TaskId:taskId,
        startDate:new Date(startDate),
        userId:user.id,
        position:positionLength.length>0?positionLength.length+1:1
      });

      if (newTask) {
        console.log("okkkkkkkkkkkkkkkkkkkkkkk");
        const task = await TaskModel.findOne({ where: {id:taskId} });
        newTask.status = "planed"
        newTask.isFree = false;
        await newTask.save();
        const myTask = await TaskModel.findOne({where:{id:taskId}})
        await myTask.save();
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
