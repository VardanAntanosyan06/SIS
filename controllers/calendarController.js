const CalendarModel = require("../models").Calendar;
const TaskModel = require("../models").Tasks;
const UserModel = require("../models").Users;

const create = async (req, res) => {
  try {
    const { taskId,startDate } =req.body;
      const newTask = await CalendarModel.create({
        taskId,
        startDate
      });

      if (newTask) {
        const task = await TaskModel.findOne({ where: { id: taskId } });

        task.isFree = false;

        await task.save();
      }
      return res.status(200).json(newTask);
    
  } catch (error) {
    console.log(error);
    // return res.status(500).json("something went wrong")
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
