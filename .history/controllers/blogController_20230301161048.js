const xlsx = require("xlsx");

const addPost = async (req, res) => {
  try {
    // const { fullName, email, post } = req.body;

    const file = xlsx.readFile("./controllers/SISBlog.xlsx");
    const workbook = xlsx.readFile(file);
    const sheetNames = workbook.SheetNames;
    
    // Get the data of "Sheet1"
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
    
    /// Do what you need with the received data
    data.map(person => {
      console.log(`${person.Name} is ${person.Age} years old`);
    })
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    addPost
}