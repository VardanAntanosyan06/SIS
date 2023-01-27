const Task_per_Users = require("../models").Task_per_User;
const UserModel = require("../models").Users

const create = async (req, res) => {
  const {authorization: token} = req.headers;
  const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
  try {
    const {taskId,startDate,position} =req.body;
    const isTasks = await Task_per_Users.findOne({where:{taskId}})
    if(!isTasks){
    if(position){
      const newTask = await Task_per_Users.create({
        taskId,
        startDate:new Date(startDate),
        userId:user.id,
        position
      });

      return res.status(200).json(newTask);
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
        startDate:new Date(startDate),
        userId:user.id,
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
