const model = require("../models").UserEmails;
const Usermodel = require("../models").Users;
const jwt = require("jsonwebtoken");
const moment = require("moment");

const verify = async (req, res) => {
  const token = req.query.token;
  const item = await model.findOne({ where: { token } });
  try {
    if (item) {
      if (
        item.isVerified === false &&
        moment().diff(item.tokenCreatedAt, "hours") <= 24
      ) {
        item.isVerified = true;
        item.token = jwt.sign(
          { user_id: item.id, email: item.email },
          process.env.SECRET
        );
        item.tokenCreatedAt = null;
        await item.save();
        return res.status(200).json({ success: true });
      } else {
        item.token = jwt.sign(
          { user_id: item.id, email: item.email },
          process.env.SECRET
        );
        item.tokenCreatedAt = moment();
        return res.status(403).json("token timeout!");
      }
    }else{
      return res.status(404).json("user does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const token = req.query.token;
  const item = await Usermodel.findOne({ where: { token } });
  try {
    if (item) {
      if (
        item.isVerified === false &&
        moment().diff(item.deleteTime, "days") <= 5
      ) {
        item.isActive = false;
        item.token = null;
        item.deleteTime = null;
        item.UserEmails[0].token = null;
        item.UserEmails?item.UserEmails[0].token = null:null;
        await item.save();
        return res.status(200).json({ success: true });
      } else {
        item.token = jwt.sign(
          { user_id: item.id, email: item.email },
          process.env.SECRET
        );
        item.deleteTime = moment();
        return res.status(403).json("token timeout!");
      }
    }else{
      return res.status(404).json("user does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  verify,
  deleteUser
};
