const model = require("../models").ContactUs;


const contactUs = async (req, res) => {
  try {
    const { fullName, phone, email, description } = req.body;

    await model.create({
      fullName,
      phone,
      email,
      description,
    });

    return res.json({success:true});
  } catch (error) {
    console.log(error);
    return res.json("something went wrong");
  }
};

module.exports = {
  contactUs,
};
