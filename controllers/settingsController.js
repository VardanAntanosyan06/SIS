const UseMrodel = require("../models").Users;
const bcrypt = require("bcrypt");
const UserEmails = require("../models").UserEmails;

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
      academicProgram,
      study,
      currentPassword,
      password,
    } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    // const userEmail = await UserEmails.findOne({where:{email:user.email}});
    console.log(user);
    if (user) {
      if (
        currentPassword &&
        (await bcrypt.compareSync(currentPassword, user.UserEmails[0].password))
      ) {
        user.password = password;
      } else {
        return res.status(401).json("invalid current password");
      }
      user.fullName = fullName !== undefined ? fullName : user.fullName;
      user.phone = phone !== undefined ? phone : user.phone;
      user.country = country !== undefined ? country : user.country;
      user.email = email !== undefined ? email : user.email;
      user.age = age !== undefined ? age : user.age;
      user.grade = grade !== undefined ? grade : user.grade;
      user.university = university !== undefined ? university : user.university;
      user.academicProgram =
        academicProgram !== undefined ? academicProgram : user.academicProgram;
      user.study = study !== undefined ? study : user.study;
      await user.save();
      return res.json(user);
    }

    return res.status(404).json("user not found");
  } catch (error) {
    console.log(error);
    return res.json("something went wrong");
  }
};

module.exports = {
  change,
};
