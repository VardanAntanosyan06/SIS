const xlsx = require("xlsx");

const addPost = async (req, res) => {
  try {
    // const { fullName, email, post } = req.body;

    const file = xlsx.readFile("./controllers/SISBlog.xlsx");
    let data = [];

    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }
    console.log(data);
    // Printing data
   return res.json(data)
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    addPost
}