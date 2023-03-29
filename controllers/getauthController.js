const getfilelist = require("google-drive-getfilelist");
const { google } = require("googleapis");
const TaskTable = require("../utils/data/data").TaskTable;
const fs = require("fs");
const { log } = require("console");

const topFolderIdforWeb = "1XkZYszcam3WEdobHoS3Yy2byWUyipslQ"; // Please set the top folder ID.
const topFolderIdforMobile = "1IRWGrZ9E7RBQmSh4SqT7VQYbr70OVUn7"; // Please set the top folder ID.
const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
const scopes = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes,
});
const arr = [];
getfilelist.GetFileList(
  {
    auth,
    fields: "files(id,name)",
    id: topFolderIdforWeb,
  },
  (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    res.fileList.map(({ files }) => {
      files.filter((e) => {
        return arr.push({ id: e.name.split('.')[0], imgId: "http://drive.google.com/uc?export=view&id="+e.id });
      });
    });
    fs.appendFile("utils/data/mobile.json",JSON.stringify(arr),(err) => {
      if (err) {
        console.error(err);
      }
    });
    
  }
);