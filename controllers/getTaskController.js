const UserModel = require("../models").Users;
const TaskModel = require('../models').Tasks;
const UniversityModel = require("../models").UniversityTable;
const SubTasks = require("../models").SubTasks

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
        const {id} = req.query;
        const user = await UserModel.findOne({where:{id}})
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

module.exports = {
    getAllTasks,
    getYourTasks
}