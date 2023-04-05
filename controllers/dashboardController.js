const UserModel = require("../models").Users;
const dashboardModel = require("../models").Dashboard;
const UniversityModel = require("../models").UniversityTable;
const Task_per_User = require("../models").Task_per_User;
const SuccessMessages = require("../models").SuccessMessages;
const Task = require("../models").Tasks;
const GreetingMessages = require("../models").GreetingMessages;
const Notifications = require("../models").Notifications;
const Sequelize = require("sequelize");
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const dashboard = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    myUni = await UniversityModel.findOne({ where: { name: user.university } });
    if (user) {
      let difference;
      if (user.trainingDate) {
        difference =
          new Date().getTime() - new Date(user.trainingDate).getTime();
      }
      let TrainingDays = 0;

      if (difference) {
        TrainingDays = Math.ceil(difference / (1000 * 3600 * 24));
      }
      const totalPoints = await myUni.dreamPointMin;
      const RandomGreetingMessages = await GreetingMessages.findOne({
        order: sequelize.random(),
        limit: 1,
        attributes: ["text"],
      });
      const myTasks = await Task_per_User.findAll({
        where: { userId: user.id },
      });
      const Tasks = await Task.findAll();

      const doneTasks = myTasks.filter((e) => e.status === "Completed");
      const inProgressTasks = myTasks.filter((e) => e.status === "In Progress");
      const LateDoneTasks = myTasks.filter((e) => e.status === "Late Done");
      const overdueTasks = myTasks.filter((e) => e.status === "Overdue");
      const myNotificationAboutTask = await Notifications.findAll({where:{userId:user.id,notificationTitle:"Congrats on Maxing Extracurricular Task Points in 'Dream' Stage!",notification:"Extra tasks count towards SIS after transition to 'Target' stage. Focus on other categories to progress."}})
      const notificationCount = await Notifications.findAll({where:{userId:user.id,notificationTitle:"The Dream Point has been reached successfully !",notification:"Extra tasks count towards SIS after transition to 'Target' stage. Focus on other categories to progress.",read:false}})
      const safetyPoints = myUni.dreamPointMin;
      const safetyPointsExtra = (safetyPoints * 30) / 100;
      let myPoints = 0;

      console.log(myNotificationAboutTask);
      myTasks.forEach((el) => {
        if (myPoints <= safetyPointsExtra) {
          myPoints += el.point;
        }
      });
      if(myNotificationAboutTask.length===0){
        Notifications.create({
          userId:user.id,
          notificationTitle:"Congrats on Maxing Extracurricular Task Points in 'Dream' Stage!",
          notification:"Extra tasks count towards SIS after transition to 'Target' stage. Focus on other categories to progress.",
          read:false
        })
      }
      const completedTask = await Task_per_User.findAll({
        where: { userId: user.id, status: "Completed" },
      });
      const completed = completedTask.length;

      let extraculicular = 0;
      if((Math.round((myPoints / safetyPointsExtra) * 100 * 10) / 10)>100){
        extraculicular = 100;
      }else{
        extraculicular = Math.round((myPoints / safetyPointsExtra) * 100 * 10) / 10;
      }    
      const progressWithPercent =
        Math.round((myPoints / safetyPoints) * 100 * 10) / 10;
      const overAllProgressDone =
        Math.round((doneTasks.length / Tasks.length) * 100 * 10) / 10;
      const overAllProgressInProgress =
        Math.round((inProgressTasks.length / Tasks.length) * 100 * 10) / 10;
      let successMesange = {};

      if (doneTasks.length > LateDoneTasks.length + overdueTasks.length) {
        successMesange = await SuccessMessages.findOne({
          where: { status: "Excellent" },
          attributes: { exclude: ["id"] },
        });
      } else if (
        doneTasks.length ===
        LateDoneTasks.length + overdueTasks.length
      ) {
        successMesange = await SuccessMessages.findOne({
          where: { status: "Good" },
          attributes: { exclude: ["id"] },
        });
      } else if (
        doneTasks.length <
        LateDoneTasks.length + overdueTasks.length
      ) {
        successMesange = await SuccessMessages.findOne({
          where: { status: "Unsatisfactory" },
          attributes: { exclude: ["id"] },
        });
      }
      return res.json({
        TrainingDays,
        totalPoints,
        completed,
        extraculicular,
        myPoints,
        RandomGreetingMessages,
        progressWithPercent,
        overAllProgressDone,
        overAllProgressInProgress,
        successMesange,
        notificationCount:notificationCount.length
      });
    } else {
      return res.json("user not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dashboard,
};
