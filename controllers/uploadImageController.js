const { google } = require("googleapis");
const fs = require("fs");
const stream = require("stream");
const { use } = require("passport");
const UserModel = require("../models").Users;

const uploadFile = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const { img } = req.files;
    const foo = async (fileObject) => {
      const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
      const scopes = ["https://www.googleapis.com/auth/drive"];

      const auth = await new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes,
      });
      //   console.log(fileObject.name,"--------------*************");
      const bufferStream = new stream.PassThrough();
      bufferStream.end(fileObject.data);
      //   console.log(bufferStream,"---------------------------------------------");
      const { data } = await google
        .drive({ version: "v3", auth })
        .files.create({
          media: {
            mimeType: fileObject.mimeType,
            body: bufferStream,
          },

          requestBody: {
            name: fileObject.name,
            parents: ["10s60b-rNAl9xx_Bm01kQ0P1Lc2922TVP"],
          },
          fields: "id,name",
        });

      const user = await UserModel.findOne({
        where: { token: token.replace("Bearer ", "") },
      });
      user.img = `http://drive.google.com/uc?export=view&id=${data.id}`

      user.save();
      return res.status(200).json({success:true});
    };
    foo(img);
  } catch (err) {
    console.log(err);
    return res.status(500).json("somehting wnet wrong");
  }
};



const deleteImg = async (req,res)=>{
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
    const scopes = ["https://www.googleapis.com/auth/drive"];

    const auth = await new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes,
    });

    console.log(user);
    const drive = google.drive({ version: 'v3', auth }); // Authenticating drive API
    const fileId = user.img.split("id=")[1]
    drive.files
      .delete({
        fileId,
      })
      user.img = "http://drive.google.com/uc?export=view&id=1T4h9d1wyGy-apEyrTW_D6C1UvdLSE166"
      user.save();
      res.status(200).json({success:true})
  } catch (error) {
    console.log(error);
    return res.json("something went wrong")
  }
}  
module.exports = {
  uploadFile,
  deleteImg
};
