const CalendarModel = require("../models").Calendar;
const TaskModel = require("../models").Tasks;
const UserModel = require("../models").Users;

const create = async (req, res) => {
  const {authorization: token} = req.headers;
  const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

  try {
    const { taskId,startDate} =req.body;
      const newTask = await CalendarModel.create({
        taskId,
        startDate,
        userId:user.id
      });

      if (newTask) {
        const task = await CalendarModel.findOne({ where: {taskId} });

        task.status = "planed"
        await task.save();
        console.log("okkkk");
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
