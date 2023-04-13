const model = require("../models").UserEmails;
const UserModel = require("../models").Users;
const jwt = require("jsonwebtoken");
const moment = require("moment");
const DeletedUsers = require("../models").DeletedUsers;

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
    } else {
      return res.status(404).json("user does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await UserModel.findOne({
      where: { token },
      include: [DeletedUsers],
    });
    if (user){
    if(user.DeletedUser && (moment().diff(user.DeletedUser.deleteTime, "days") <= 5)) {
      user.DeletedUser.isVerified = true;
      user.DeletedUser.deleteTime = null;
      user.token = null;

      user.DeletedUser.save();
      user.save()
      return res.json({ success: true });
    }else {
      return res.status(403).json("token timeout!")
    }}
    else{
      return res.status(404).json("user not found!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong")
  }
};

module.exports = {
  verify,
  deleteUser,
};
