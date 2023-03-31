const UserModel = require("../models").Users;
const bcrypt = require("bcrypt");
const UserEmails = require("../models").UserEmails;
const jwt = require("jsonwebtoken");
const change = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      country,
      email,
      age,
      grade,
      university,
      academicProgramFirst,
      academicProgramSecond,
      academicProgramThird,
      study,
    } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
      include: [UserEmails],
    });
    if (user) {
      user.fullName = fullName !== undefined ? fullName : user.fullName;
      user.phone = phone !== undefined ? phone : user.phone;
      user.country = country !== undefined ? country : user.country;
      user.email = email !== undefined ? email : user.email;
      user.age = age !== undefined ? age : user.age;
      user.grade = grade !== undefined ? grade : user.grade;
      user.university = university !== undefined ? university : user.university;
      user.academicProgramFirst =
        academicProgramFirst !== undefined
          ? academicProgramFirst
          : user.academicProgramFirst;
      user.academicProgramSecond =
        academicProgramSecond !== undefined
          ? academicProgramSecond
          : user.academicProgramSecond;
      user.academicProgramThird =
        academicProgramThird !== undefined
          ? academicProgramThird
          : user.academicProgramThird;
      user.study = study !== undefined ? study : user.study;
      await user.save();
      return res.status(200).json({ success: true });
    }
    return res.status(404).json("user not found!");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, password } = req.body;
    const { authorization: token } = req.headers;

    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      const UserEmail = await UserEmails.findOne({
        where: { userId: user.id, role: "First", isVerified: true },
      });
      if (
        currentPassword !== undefined &&
        (await bcrypt.compareSync(currentPassword, UserEmail.password))
      ) {
        if (password) {
          UserEmail.password = bcrypt.hashSync(password, 10);
          UserEmail.token = jwt.sign(
            { email: UserEmail.email },
            process.env.SECRET
          );
          user.token = jwt.sign({ email: UserEmail.email }, process.env.SECRET);
          await UserEmail.save();
          await user.save();
          return res.json({ success: true, newToken: user.token });
        } else {
          return res.status(401).json("password cannot be empty!");
        }
      } else {
        return res.json("invalid current password");
      }
    }
    return res.status(404).json("user not found");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

module.exports = {
  change,
  changePassword,
};
