// const getfilelist = require("google-drive-getfilelist");
// const { google } = require("googleapis");
// const TaskTable = require("../utils/data/data").TaskTable;
const fs = require("fs");
// const { log } = require("console");

// const topFolderIdforWeb = "1XkZYszcam3WEdobHoS3Yy2byWUyipslQ"; // Please set the top folder ID.
// const topFolderIdforMobile = "1IRWGrZ9E7RBQmSh4SqT7VQYbr70OVUn7"; // Please set the top folder ID.
// const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
// const scopes = ["https://www.googleapis.com/auth/drive"];

// const auth = new google.auth.GoogleAuth({
//   keyFile: keyPath,
//   scopes,
// });
// const arr = [];
// getfilelist.GetFileList(
//   {
//     auth,
//     fields: "files(id,name)",
//     id: topFolderIdforWeb,
//   },
//   (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     res.fileList.map(({ files }) => {
//       files.filter((e) => {
//         return arr.push({ id: e.name.split('.')[0], imgId: "http://drive.google.com/uc?export=view&id="+e.id });
//       });
//     });
//     fs.appendFile("utils/data/mobile.json",JSON.stringify(arr),(err) => {
//       if (err) {
//         console.error(err);
//       }
//     });

//   }
// );

// const pdf2html = require('pdf2html');

// const myFoo = async ()=>{
// const html = await pdf2html.html('controllers/Blog Post 1.pdf');

//     fs.writeFile("controllers/test.html",html,(err)=>{
//         err?console.log(err):console.log("ok");
//     })
// }

// myFoo();

const xlsx = require("xlsx");

const file = xlsx.readFile("public/stylesheets/SIS_DB (2).xlsx");

let data = [];

// read(filename) {
//     const wb = xlsx.readFile(filename);
//     for (let i = 0, l = wb.SheetNames.length; i < l; i += 1) {
//      this.processSheet(wb.Sheets[wb.SheetNames[i]]);
//     }
//    }
// }

// data.map((e) =>
//   fs.writeFile("controllers/test.html", e, (err) => {
//     err ? console.log(err) : console.log("ok");
//   })
// );

console.log(data);