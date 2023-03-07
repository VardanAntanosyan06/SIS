const Professors = require("../models").Professors

const getProfessors = async (req,res)=>{
    try {
        const {id} = req.query;
        let professors;
        if(id){
            professors = await Professors.findOne({where:{id}});
        }else{
            professors = await Professors.findAll();
        }
        return res.json({professors})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProfessors
}