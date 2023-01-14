const CalendarModel = require("../models").Calendar;
const TaskModel = require("../models").Tasks;
const UserModel = require("../models").Users;

const create = async (req, res) => {
  try {
    const { taskId, DateOfAddTask, statusOfTask, timePoints, userId } =
      req.body;
    const user = await UserModel.findOne({ where: { id: userId } });
    if (user) {
      const newTask = await CalendarModel.create({
        taskId,
        DateOfAddTask,
        statusOfTask,
        timePoints,
        userId,
      });
      if (newTask) {
        const task = await TaskModel.findOne({ where: { id: taskId } });

        task.isFree = false;

        await task.save();
      }
      return res.status(200).json(newTask);
    }
    return res.status(404).json("user not found");
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
