const { when } = require("@craco/craco");
const { urlencoded } = require("express");
const e = require("express");
const Task_per_Users = require("../models").Task_per_User;
const SubTask_per_Users = require("../models").SubTask_per_User;
const TimeTaskModel = require("../models").timeTasks;
const UserModel = require("../models").Users
const SubTasks = require("../models").SubTasks
const moment = require("moment")

const create = async (req, res) => {
  const {authorization: token} = req.headers;
  const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
  try {
    const {taskId,startDate,position} =req.body;
    const deadlineAtWeek = await TimeTaskModel.findOne({where:{task_id:taskId}})

    
      let myTasks = await Task_per_Users.findAll({
      where:{
          userId:user.id,
               },
         order : [
          ['position','DESC']
         ]
        });

        myTasks = myTasks.filter((e)=>e.startDate.toISOString().slice(0,10) === startDate.slice(0,10))
        if(myTasks.filter((el)=>el.taskId === taskId).length>0){
          return res.json("task already exist")
        }
        const count = myTasks.length>0?
         myTasks[0].position+1:
         1;  
        let newPosition = 0;
      if(position && myTasks.filter((el)=>el.position === position).length===0){
        newPosition = position
      }else{
      for (let i = 1; i <= count; i++) {
        if(myTasks.filter((el)=>el.position === i).length===0){
          newPosition = i;
          break;
        }
        
      }
    }
    
      const newTask = await Task_per_Users.create({
         taskId,
         startDate,
         userId:user.id,
         deadlineAtWeek:deadlineAtWeek.taskSpentWeek,
         position:newPosition,
         deadline:moment(startDate).add(deadlineAtWeek.taskSpentDays,"day"),
     });
    
     const mySubTasks = await SubTasks.findAll({where:{taskId},attributes:['id']})

     const newSubTasks = [];
     mySubTasks.map((e)=>{
    const myTas
     newSubTasks.push({subTaskId:e.id,userId:user.id,status:false})  
  })

     await SubTask_per_Users.bulkCreate(newSubTasks)
      return res.status(200).json(newTask);
    }

    catch (error) {
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
