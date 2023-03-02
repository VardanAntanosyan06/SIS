const xlsx = require("xlsx");

const addPost = async (req,res)=>{
    try {
    const {fullName,email,post} = req.body;

    const myFile = xlsx.readFile("https://docs.google.com/spreadsheets/d/1sqn3yRtOalBsRqMJgOappU8HOVL11zmpxH8GZxHoO6c/edit?usp=sharing")
    } catch (error) {
        
    }
}