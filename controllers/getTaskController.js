const UserModel = require("../models").Users;
const TaskModel = require('../models').Tasks;
const UniversityModel = require("../models").UniversityTable;

const getAllTasks = async (req,res)=>{
    try {
        const allTasks = await TaskModel.findAll();

        return res.status(200).json({allTasks})
    } catch (error) {
        return res.json("something wnet wrong!")
    }
}

const getYourTasks = async (req,res)=>{
    try {
        const {id} = req.query;
        const user = await UserModel.findOne({where:{id}})
        const university = await UniversityModel.findOne({where:{name:user.university}})
        const tasks = await TaskModel.findAll({where:{universityId:university.id}});

        return res.status(200).json({tasks})
    } catch (error) {
        return res.json("something wnet wrong!")
    }
}

module.exports = {
    getAllTasks,
    getYourTasks
}