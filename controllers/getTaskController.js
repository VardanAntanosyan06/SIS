const UserModel = require("../models").Users;
const TaskModel = require("../models").Tasks;
const UniversityModel = require("../models").UniversityTable;
const SubTasks = require("../models").SubTasks;
const Calendar = require("../models").Calendar;
const TaskNotFree = require("../models").TasksNotFree;
const { Op } = require("sequelize");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.findAll({
      include: [SubTasks],
    });

    return res.status(200).json({ allTasks });
  } catch (error) {
    return res.json("something went wrong!");
  }
};

const getYourTasks = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      const university = await UniversityModel.findOne({
        where: { name: user.university },
      });
      const AllMytasks = await TaskModel.findAll({
        where: { universityId: university.id },
        include: [SubTasks],
      });
      const InCalendarTask = await TaskNotFree.findAll({
        where: { userId: user.id },
        include: [TaskModel, SubTasks],
      });

      const tasks = [];
      AllMytasks.map((e) => {
        if (InCalendarTask.length > 0) {
          InCalendarTask.map((element) => {
            if (e.id == element.TaskId) {
              tasks.push({
                TaskId: e.id,
                isFree: false,
                status: myStatus,
                facultName: e.facultName,
                positionName: e.positionName,
                compamyName: e.compamyName,
                universityId: e.universityId,
                createdAt: e.createdAt,
                updatedAt: e.updatedAt,
                SubTasks: e.SubTasks,
              });
            } else {
              tasks.push({
                TaskId: e.id,
                isFree: true,
                facultName: e.facultName,
                positionName: e.positionName,
                compamyName: e.compamyName,
                universityId: e.universityId,
                createdAt: e.createdAt,
                updatedAt: e.updatedAt,
                SubTasks: e.SubTasks,
              });
            }
          });
        } else {
          AllMytasks.map((e) => {
            tasks.push({
              TaskId: e.id,
              isFree: true,
              facultName: e.facultName,
              positionName: e.positionName,
              compamyName: e.compamyName,
              universityId: e.universityId,
              createdAt: e.createdAt,
              updatedAt: e.updatedAt,
              SubTasks: e.SubTasks,
            });
          });
        }
      });
      return res.status(200).json({ tasks });
    }
    return res.json("not found");
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
    const {taskId} = req.query;
    const mySubTasks = await SubTasks.findAll({where:{taskId}})

    return res.json(mySubTasks)
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};
module.exports = {
  getAllTasks,
  getYourTasks,
  getYourFreeTasks,
  getTasksInCalendar,
  getSubTasks
};
