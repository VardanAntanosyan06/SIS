const UserModel = require("../models").Users;
const TaskModel = require('../models').Tasks;
const UniversityModel = require("../models").UniversityTable;
const SubTasks = require("../models").SubTasks
const Calendar = require("../models").Calendar;

const getAllTasks = async (req,res)=>{
    try {
        const allTasks = await TaskModel.findAll({
            include:[SubTasks]
        });

        return res.status(200).json({allTasks})
    } catch (error) {
        return res.json("something wnet wrong!")
    }
}

const getYourTasks = async (req,res)=>{
    try {
        const {authorization: token} = req.headers;
        const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
        console.log(token,user);
            if (user) {
                const university = await UniversityModel.findOne({where:{name:user.university}})
                const tasks = await TaskModel.findAll({where:{universityId:university.id},include:[SubTasks]});
                return res.status(200).json({tasks})
            }
            return res.status(404).json("not found")
    } catch (error) {
        return res.json("something wnet wrong!")
    }
}
const getYourFreeTasks = async (req,res)=>{
    try {
    const {authorization: token} = req.headers;
      const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
            if (user) {
                const university = await UniversityModel.findOne({where:{name:user.university}})
                const tasks = await TaskModel.findAll({where:{universityId:university.id,isFree:true},include:[SubTasks]});
                return res.status(200).json({tasks}) 
            }
            return res.status(404).json("user not found")
    } catch (error) {
        return res.json("something wnet wrong!")
    }
}
const getTasksInCalendar = async (req,res)=>{
    try {
        const {authorization: token} = req.headers;
      const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})
    const task = await Calendar.findAll({where:{userId:user.id},include:[TaskModel]})
            if (task) {
                return res.status(200).json({task})
            }
            return res.status(404).json("user not found")
    } catch (error) {
        console.log(error);
        return res.json("something wnet wrong!")
    }
}


module.exports = {
    getAllTasks,
    getYourTasks,
    getYourFreeTasks,
    getTasksInCalendar
}