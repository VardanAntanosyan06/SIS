const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const { QueryTypes } = require('sequelize');
const UserModel = require("../models").Users;
const TaskModel = require("../models").Tasks;
const UniversityModel = require("../models").UniversityTable;
const SubTasks = require("../models").SubTasks;
const Calendar = require("../models").Calendar;
const TaskNotFree = require("../models").TasksNotFree;
const { Op } = require("sequelize");
const Task_per_User = require("../models").Task_per_User

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
      const tasks = await TaskModel.findAll({
        where: {
          
        },
        //include: [Task_per_User]
        include: [
          {
              model: Task_per_User,
              require:true,
              where: {userId: {
                [Op.eq]: user.id
              }},
          }]
      })

      return res.json({tasks})
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
      const uxniversity = await UniversityModel.findOne({
        where: { name: user.university },
      });
      const tasks = await TaskModel.findAll({
        where: { universityId: university.id, isFree: true, userId: user.id },
        include: [SubTasks],
      });
      return res.status(200).json({ tasks });
    }
    return res.status(404).json("user not found");
  } catch (error) {
    return res.json("something went wrong!");
  }
};
const getTasksInCalendar = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    console.log(user.id);

    const task = await TaskNotFree.findAll({
      where: { userId: user.id },
      include: [TaskModel, SubTasks],
    });
    if (task) {
      return res.status(200).json({ task });
    }
    return res.status(404).json("user not found");
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};

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
