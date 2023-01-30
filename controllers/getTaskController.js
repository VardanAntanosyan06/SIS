const CircularJSON = require("circular-json");
const e = require("express");
const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const { QueryTypes, json } = require('sequelize');
const UserModel = require("../models").Users;
const TaskModel = require("../models").Tasks;
const UniversityModel = require("../models").UniversityTable;
const SubTasks = require("../models").SubTasks;
const Calendar = require("../models").Calendar;
//const TaskNotFree = require("../models").TasksNotFree;
const { Op } = require("sequelize");
const subtasks = require("../models/subtasks");
const Task_per_User = require("../models").Task_per_User
const SubTask_per_User = require("../models").SubTask_per_User

let sequelize = new Sequelize(config.database, config.username, config.password, config);

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = 
//     return res.status(200).json("a");
//   } catch (error) {
//     console.log(error);
//     return res.json("something went wrong!");
//   }
// };

const getYourTasks = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      const myUniversity = await UniversityModel.findOne({
         where: { name: user.university },
      });
      let tasks = await TaskModel.findAll({
        where: {
          universityId:myUniversity.id,
        },
          include: [
          {model:SubTasks,
            include:{
              model:SubTask_per_User,
              required:false,
              where:{userId:user.id}
            }
          },
          {
            model: Task_per_User,
          },]
         })

      tasks = tasks.map(e => CircularJSON.stringify(e))
    
      const newTasks = tasks.map((_task)=>{
        let task = JSON.parse(_task)
        let taskStatus = true;

        const userSpecificData = task.Task_per_Users.length === 0 ? 
        {createdAt: null, status: null} : 
        task.Task_per_Users.filter(e => +e.userId === +user.id)[0]; 

        task = {
          ...task,
          status: userSpecificData?userSpecificData.status:null,
          SubTasks: task.SubTasks.map(_subTask => 
            _subTask.SubTask_per_Users.length === 1 ? 
            (() => {
              const _sub_task = {
                ..._subTask, 
                status: _subTask.SubTask_per_Users[0].status,
                description: _subTask.SubTask_per_Users[0].description
              }

              delete _sub_task.SubTask_per_Users
              return _sub_task

            })()
           : 
              (() => {
                delete _subTask.SubTask_per_Users;
                return {..._subTask, status: false, description: null}
              })()
            ) 
        }
        if(task.Task_per_Users.length > 0 && userSpecificData){
            taskStatus = false
        }
        delete task.Task_per_Users
        return {...task, isFree: taskStatus}
      })
      return res.status(200).send({newTasks})
        }
        return res.json("user not found");
    } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};


const getYourFreeTasks = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      const university = await UniversityModel.findOne({
        where: { name: user.university },
      });
      const tasks = await TaskModel.findAll({
        where: { universityId: university.id, isFree: true, userId: user.id },
        include: [SubTasks],
      });
      return res.status(200).json({tasks});
    }
    return res.status(404).json("user not found");
  } catch (error) {
    return res.json("something went wrong!");
  }
};


const getTasksInCalendar = async (req, res) => {
  const { authorization: token } = req.headers;
  const user = await UserModel.findOne({
    where: { token: token.replace("Bearer ", "") },
  });
  if (user) {
    const myUniversity = await UniversityModel.findOne({
       where: { name: user.university },
    });
    let tasks = await TaskModel.findAll({
      where: {
        universityId:myUniversity.id,
        // isFree:false
      },
        include: [
        {model:SubTasks,
          include:{
            model:SubTask_per_User,
            required:false,
            where:{userId:user.id}
          }
        },
        {
          model: Task_per_User,
          // where:{isFee:false}
        },]
      })
    tasks = tasks.map(e => CircularJSON.stringify(e))
  
    const newTasks = tasks.map((_task)=>{
      let task = JSON.parse(_task)
      let taskStatus = true;
      const userSpecificData = task.Task_per_Users.length === 0 ? 
      {createdAt: null, status: null} : 
      task.Task_per_Users.filter(e => +e.userId === +user.id)[0]  ; 
      console.log(userSpecificData,"++++++++++++++++++++++++++=");
      task = {
        ...task,
        status: userSpecificData.status,
        startDate:userSpecificData.startDate,
        deadlineAtWeek:userSpecificData.deadlineAtWeek,
        position:userSpecificData.position,
        SubTasks: task.SubTasks.map(_subTask => 
          _subTask.SubTask_per_Users.length === 1 ? 
          (() => {
            const _sub_task = {
              ..._subTask, 
              status: _subTask.SubTask_per_Users[0].status,
              description: _subTask.SubTask_per_Users[0].description
            }

            delete _sub_task.SubTask_per_Users
            return _sub_task

          })()
         : 
            (() => {
              delete _subTask.SubTask_per_Users;
              return {..._subTask, status: false, description: null}
            })()
          ) 
      }  
      if(task.Task_per_Users.length === 1){
          taskStatus = false
      }
      delete task.Task_per_Users
      if(taskStatus===false){
        return { ...task, isFree: taskStatus}
      }else{
        return "";
      }
    })

 let myTasks = newTasks.filter((e)=>{
    return e!==""
  })

  return res.status(200).send({myTasks})
      }
      return res.json("user not found");
  }

const getSubTasks = async (req, res) => {
  try {
    const { taskId } = req.query;
    const mySubTasks = await SubTasks.findAll({ where: { taskId } });

    return res.json(mySubTasks);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};
module.exports = {
  //getAllTasks,
  getYourTasks,
  getYourFreeTasks,
  getTasksInCalendar,
  getSubTasks,
};
