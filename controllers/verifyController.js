const model = require("../models").UserEmails;
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


module.exports = {
  verify,
};
