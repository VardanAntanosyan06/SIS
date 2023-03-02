const xlsx = require("xlsx");

const addPost = async (req, res) => {
  try {
    const { fullName, email, post } = req.body;

    const myFile = xlsx.readFile(
      "https://docs.google.com/spreadsheets/d/1sqn3yRtOalBsRqMJgOappU8HOVL11zmpxH8GZxHoO6c/edit?usp=sharing"
    );
    let data = [];

    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }

    // Printing data
    console.log(data);
  } catch (error) {}
};
