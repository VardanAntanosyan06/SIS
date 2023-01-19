const UserModel = require("../models").Users;
const dashboardModel = require("../models").Dashboard;
const UniversityModel = require("../models").UniversityTable;

const dashboard = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    myUni = await UniversityModel.findOne({ where: { name: user.university } });
    const userData = UserModel.findOne({ where: { id: user.id } });
    if (user) {
      let difference = new Date().getTime() - new Date(user.createdAt).getTime();
      let TrainingDays = Math.ceil(difference / (1000 * 3600 * 24));
      const totalPoints = await myUni.sefetyPointMin;
      complitedTask = 0;
      return res.json({ TrainingDays, totalPoints,complitedTask});
    } else {
      return res.json("user not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dashboard,
};
