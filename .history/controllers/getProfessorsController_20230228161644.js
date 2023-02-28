const Professors = require("../models").Professors

const getProfessors = async (req,res)=>{
    try {
        const Professors = await Professors.findAll()
    } catch (error) {
        
    }
}