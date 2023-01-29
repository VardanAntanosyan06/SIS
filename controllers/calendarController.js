const Task_per_Users = require("../models").Task_per_User;
const SubTask_per_Users = require("../models").SubTask_per_User;
const TimeTaskModel = require("../models").timeTasks;
const UserModel = require("../models").Users

const create = async (req, res) => {
  const {authorization: token} = req.headers;
  const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
  try {
    const {taskId,startDate,position} =req.body;
    const deadlineAtWeek = await TimeTaskModel.findOne({where:{task_id:taskId}})

    const isTasks = await Task_per_Users.findOne({where:{taskId}})
    if(!isTasks){
    if(position){
      const newTask = await Task_per_Users.create({
        taskId,
        startDate,
        userId:user.id,
        deadlineAtWeek:deadlineAtWeek.taskSpentWeek,
        position
      });

      // const newSubTasks = await SubTask_per_Users.create({
      //   subTaskId,
      //   userId:user.id,

      // })
      return res.status(200).json(newTask,newSubTasks);
    }
    const today = new Date().getDate();
    const myTasks = await Task_per_Users.findAll({where:{userId:user.id}});
    const positionLength = myTasks.map((el)=>{
      if(el.startDate){
        return el.startDate.getDate() == today;
      }
    })
    
    const newTask = await Task_per_Users.create({
        taskId,
        startDate,
        userId:user.id,
        deadlineAtWeek:deadlineAtWeek.taskSpentWeek,
        position:positionLength.length>0?positionLength.length+1:1
      });
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
