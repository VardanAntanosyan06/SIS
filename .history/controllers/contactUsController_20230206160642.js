const model = require("../models").ContactUs;

const sendEmail = async (req,res)=>{
    try {
        const {fullName,phone,email,description} = req.body;

        const item = await model.create({
            fullName,
            phone,
            email,
            description
        })
        
    } catch (error) {
        
    }
}