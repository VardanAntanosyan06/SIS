const xlsx = require("xlsx");

const addPost = async (req, res) => {
  try {
    // const { fullName, email, post } = req.body;

    const workbook = xlsx.readFile("./controllers/SISBlog.xlsx");
    const sheetNames = workbook.SheetNames;
    
    // Get the data of "Sheet1"
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
    
    /// Do what you need with the received data
    data.map(person => {
      console.log(`${person.Name} is ${person.Age} years old`);
    })

    console.log(data);
    return res.json(data)
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    addPost
}