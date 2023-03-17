const UniModel = require("../models").UniversityTable;
const UserModel = require("../models").Users;
const UniversitiesModel = require("../models").Universities;
const NotableAlumni = require("../models").NotableAlumni;
const Advice = require("../models").Advice;
const { Op } = require("sequelize");

const getAllUniversities = async (req, res) => {
  try {
    const Universities = await UniversitiesModel.findAll({
      where: {
        id: {
          [Op.and]: [{ [Op.ne]: 8 }, { [Op.ne]: 9 }],
        },
      },
      include: [NotableAlumni, Advice],
    });

    return res.json(Universities);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong");
  }
};

const getMyUniversity = async (req, res) => {
  try {
    const { id } = req.query;

    const myUniversity = await UniversitiesModel.findOne({
      where: { id },
      include: [NotableAlumni, Advice],
    });
    if (myUniversity) {
      return res.json(myUniversity);
    }

    return res.json("not found");
  } catch (error) {
    return res.status(500).json("something went wrong");
  }
};

const getUserUniversity = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const myUni = await UniModel.findOne({where:{name:user.university}})

    return res.json(myUni)
  } catch (error) {
    return res.status(404).json("something went wrong")
  }
};
module.exports = {
  getAllUniversities,
  getMyUniversity,
  getUserUniversity
};
