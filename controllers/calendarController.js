const e = require("express");

const CalendarModel = require("../models").Calendar;
const TaskModel = require("../models").Tasks;
const UserModel = require("../models").Users;

const create = async (req, res) => {
  const {authorization: token} = req.headers;
  const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
  const {position} = req.query;
  const {taskId,startDate} =req.body;

  try {
    if(position){
      const newTask = await CalendarModel.create({
        taskId,
        startDate,
        userId:user.id,
        position
      });

      if (newTask) {
        const task = await CalendarModel.findOne({ where: {taskId} });
        task.status = "planed"
        await task.save();

      }
      return res.status(200).json(newTask);
    }
    const today = new Date().getDay;
    const myTasks = CalendarModel.findAll();
    console.log(myTasks);
    myTasks.filter((el)=>{
      return new Date(el.startDate).getDay == today;
    })
    const newTask = await CalendarModel.create({
        taskId,
        startDate,
        userId:user.id,
        position:myTasks.length()
      });

      if (newTask) {
        const task = await CalendarModel.findOne({ where: {taskId} });
        task.status = "planed"
        await task.save();

      }
      return res.status(200).json(newTask);
    
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
