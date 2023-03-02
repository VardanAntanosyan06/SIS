const xlsx = require("xlsx");

const addPost = async (req, res) => {
  try {
    // const { fullName, email, post } = req.body;

    const file = xlsx.readFile("..");
    let data = [];

    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }

    // Printing data
   return res.json(data)
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    addPost
}