const FinancialAidCounselor = require("../models").FinancialAidCounselor;
const FinancialAidUser = require("../models").FinancialAidUser;
const { google } = require("googleapis");
const fs = require("fs");
const stream = require("stream");

const add = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      country,
      school,
      grade,
      gpa,
      counselorName,
      counselorEmail,
      question1,
      question2,
      applicantName,
      ApplicantEmail,
      ApplicantGrade,
      ApplicantGPA,
      question,
    } = req.body;

    const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
    const scopes = ["https://www.googleapis.com/auth/drive"];

    const auth = await new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes,
    });
    if (req.files) {
      const foo = async (fileObject) => {
        const arr = await Promise.all(fileObject.map(async(e) => {
          const bufferStream = new stream.PassThrough();
          bufferStream.end(e.data);
          let {data} = await google
            .drive({ version: "v3", auth })
            .files.create({
              media: {
                mimeType: e.mimeType,
                body: bufferStream,
              },
              requestBody: {
                name: e.name,
                parents: ["19Wlo24OlZUBM7YvIRrllLRNZG7IPHvJx"],
              },
              fields: "id,name",
            });
            return(data);
        }))

        FinancialAidUser.create({
          fullName,
          email,
          phone,
          country,
          school,
          grade,
          gpa,
          counselorName,
          counselorEmail,
          question1,
          question2,
          file1: `http://drive.google.com/uc?export=view&id=${arr[0].id}`,
          file2: `http://drive.google.com/uc?export=view&id=${arr[1].id}`,
        });
        // console.log()
        return res.status(200).json({ success: true,files:"AAAAAAAAAAAAAAAA" });
      };
      foo([req.files.file1, req.files.file2]);
    } else {
      FinancialAidUser.create({
        fullName,
        email,
        phone,
        country,
        school,
        applicantName,
        ApplicantEmail,
        ApplicantGrade,
        ApplicantGPA,
        question,
      });
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

module.exports = {
  add,
};
