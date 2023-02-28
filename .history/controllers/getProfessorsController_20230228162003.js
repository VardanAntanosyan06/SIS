const Professors = require("../models").Professors

const getProfessors = async (req,res)=>{
    try {
        const professors = await Professors.findAll();

        return res.json({Professors})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProfessors
}