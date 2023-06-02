// // // const getfilelist = require("google-drive-getfilelist");
// // // const { google } = require("googleapis");
// // // // const TaskTable = require("../utils/data/data").TaskTable;
// // // const fs = require("fs");
// // // // const { log } = require("console ");

// // // // const topFolderIdforWeb = "1lYsagB53Q7MY4YhjCwNuUCg7PsLY0g3A"; // Please set the top folder ID.
// // // // const topFolderIdforMobile = "10gbs8bJm7LhBaurehmjwnwmL_gS-co0C"; // Please set the top folder ID.
// // // // const keyPath = "controllers/upbeat-airfoil-379410-ffc79425eb65.json";
// // // // const scopes = ["https://www.googleapis.com/auth/drive"];

// // // // const auth = new google.auth.GoogleAuth({
// // // //   keyFile: keyPath,
// // // //   scopes,
// // // // });
// // // // const arr = [];
// // // // getfilelist.GetFileList(
// // // //   {
// // // //     auth,
// // // //     fields: "files(id,name)",
// // // //     id: topFolderIdforMobile,
// // // //   },
// // // //   (err, res) => {
// // // //     if (err) {
// // // //       console.log(err);
// // // //       return;
// // // //     }

// // // //     res.fileList.map(({ files }) => {
// // // //       files.filter((e) => {
// // // //         return arr.push({ id: e.name.split('.')[0], imgId: "http://drive.google.com/uc?export=view&id="+e.id });
// // // //       });
// // // //     });
// // // //    let  arr2 = JSON.stringify(arr)
// // // //     fs.appendFile("test/imagesMobile.json",arr2,(err) => {
// // // //       if (err) {
// // // //         console.error(err);
// // // //       }else{
// // // //         console.log(arr.length);
// // // //       }

// // // //     });

// // // //   }
// // // // );

// // // // const pdf2html = require('pdf2html');

// // // // const myFoo = async ()=>{
// // // // const html = await pdf2html.html('controllers/Blog Post 4.pdf');

// // // //     fs.writeFile("controllers/test.html",html,(err)=>{
// // // //         err?console.log(err):console.log("ok");
// // // //     })
// // // // }

// // // // myFoo();

// // // // const xlsx = require("xlsx");

// // // // const file = xlsx.readFile("test/SIS_DB (5).xlsx");

// // // // let data = [];

// // // // const sheets = file.SheetNames;

// // // // const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[2]]);
// // // // temp.forEach((res) => {
// // // //   data.push(res);
// // // // });

// // // // data = JSON.stringify(data);
// // // // fs.appendFile("test/timeTasks.json", data, (err) => {
// // // //   err ? console.log(err) : console.log("ok");
// // // // });

// // // // webImages = JSON.parse(webImages)
// // // // mobileImages = JSON.parse(mobileImages)

// // // // let result = tasks.map((e)=>{
// // // //    let  webImage = webImages.find(item => +item.id === e.EXT_TASK_ID);
// // // //    let mobileImage = mobileImages.find(item => +item.id === e.EXT_TASK_ID);

// // // //   //  e.imgMobile = mobileImage;
// // // //    e.imgWeb = webImage ? webImage.imgId:null
// // // //    e.imgMobile = mobileImage ? mobileImage.imgId:null

// // // //    return e;
// // // // })

// // // // result = JSON.stringify(result)
// // // // fs.writeFile("test/result.json",result,(err)=>err?console.log(err):console.log("a"))

// // // // console.log(webImages.length,mobileImages.length);

// // // const timeTasks = [
// // //   {
// // //     task_id: 1,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 1,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 1,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 1,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 2,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 2,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 2,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 2,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 3,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 3,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 3,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 3,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 4,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 4,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 4,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 4,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 5,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 5,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 5,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 5,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 6,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 6,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 6,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 6,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 7,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 7,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 7,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 7,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 8,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 8,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 8,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 8,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 9,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 9,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 9,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 9,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 10,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 10,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 10,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 10,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 11,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 11,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 11,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 11,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 12,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 12,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 12,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 12,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 13,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 13,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 13,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 13,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 14,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 14,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 14,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 14,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 15,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 15,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 15,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 15,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 16,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 16,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 16,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 16,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 17,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 17,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 17,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 17,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 19,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 19,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 19,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 19,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 18,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 20,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 20,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 20,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 20,
// // //     taskSpentWeek: "|10",
// // //     taskSpentDays: "0,5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 21,
// // //     taskSpentWeek: "8|10",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 21,
// // //     taskSpentWeek: "11|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 21,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 21,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 22,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 22,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 22,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 22,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 23,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 23,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 23,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 23,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 24,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 24,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 24,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 24,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 25,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 25,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 25,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 25,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 26,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 26,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 26,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 26,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 27,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 27,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 27,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 27,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 28,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 28,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 28,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 28,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 29,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 29,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 29,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 29,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 30,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 30,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 30,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 30,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 31,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 31,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 31,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 31,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 32,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 32,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 32,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 32,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 33,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 33,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 33,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 33,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 34,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 34,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 34,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 34,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 35,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 35,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 35,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 35,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 36,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 36,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 36,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 36,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 37,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 37,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 37,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 37,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 38,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 38,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 38,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 38,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 39,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 39,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 39,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 39,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 40,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 40,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 40,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 40,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 41,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 41,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 41,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 41,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 42,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 42,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 42,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 42,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 43,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 43,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 43,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 43,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 44,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 44,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 44,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 44,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 45,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 45,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 45,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 45,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 46,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 46,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 46,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 46,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 47,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 47,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 47,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 47,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 48,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 48,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 48,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 48,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 49,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 49,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 49,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 49,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 50,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 50,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 50,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 50,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 51,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 51,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 51,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 51,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 52,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 52,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 52,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 52,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 53,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 53,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 53,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 53,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 54,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 54,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 54,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 54,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 55,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 55,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 55,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 55,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 56,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 56,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 56,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 56,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 57,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 57,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 57,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 57,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 58,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 58,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 58,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 58,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 59,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 59,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 59,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 59,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 60,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 60,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 60,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 60,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 61,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 61,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 61,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 61,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 62,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 62,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 62,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 62,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 63,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 63,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 63,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 63,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 64,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 64,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 64,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 64,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 65,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 65,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 65,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 65,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 66,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 66,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 66,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 66,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 67,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 67,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 67,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 67,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 68,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 68,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 68,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 68,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 69,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 69,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 69,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 69,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 70,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 70,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 70,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 70,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 71,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 71,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 71,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 71,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 72,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 72,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 72,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 72,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 73,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 73,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 73,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 73,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 74,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 74,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 74,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 74,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 75,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 75,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 75,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 75,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 76,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 76,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 76,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 76,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 77,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 77,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 77,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 77,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 78,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 78,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 78,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 78,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 79,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 79,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 79,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 79,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 80,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 80,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 80,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 80,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 81,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 81,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 81,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 81,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 82,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 82,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 82,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 82,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 83,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 83,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 83,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 83,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 84,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 84,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 84,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 84,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 85,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 85,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 85,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 85,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 86,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 86,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 86,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 86,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 87,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 87,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 87,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 87,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 88,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 88,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 88,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 88,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 89,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 89,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 89,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 89,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 90,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 90,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 90,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 90,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 91,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 91,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 91,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 91,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 92,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 92,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 92,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 92,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 93,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 93,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 93,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 93,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 94,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 94,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 94,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 94,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 95,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 95,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 95,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 95,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 96,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 96,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 96,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 96,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 97,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 97,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 97,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 97,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 98,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 98,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 98,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 98,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 99,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 99,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 99,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 99,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 100,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 100,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 100,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 100,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 101,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 101,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 101,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 101,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 102,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 102,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 102,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 102,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 103,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 103,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 103,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 103,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 104,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 104,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 104,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 104,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 105,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 105,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 105,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 105,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 106,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 106,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 106,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 106,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 107,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 107,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 107,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 107,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 108,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 108,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 108,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 108,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 109,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 109,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 109,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 109,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 110,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 110,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 110,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 110,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 111,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 111,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 111,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 111,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 112,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 112,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 112,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 112,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 113,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 113,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 113,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 113,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 114,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 114,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 114,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 114,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 115,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 115,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 115,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 115,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 116,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 116,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 116,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 116,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 117,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 117,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 117,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 117,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 118,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 118,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 118,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 118,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 119,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 119,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 119,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 119,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 120,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 120,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 120,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 120,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 121,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 121,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 121,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 121,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 122,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 122,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 122,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 122,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 123,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 123,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 123,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 123,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 124,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 124,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 124,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 124,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 125,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 125,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 125,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 125,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 126,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 126,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 126,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 126,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 127,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 127,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 127,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 127,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 128,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 128,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 128,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 128,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 129,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 129,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 129,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 129,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 130,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 130,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 130,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 130,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 131,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 131,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 131,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 131,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 132,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 132,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 132,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 132,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 133,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 133,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 133,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 133,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 134,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 134,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 134,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 134,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 135,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 135,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 135,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 135,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 136,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 136,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 136,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 136,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 137,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 137,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 137,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 137,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 138,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 138,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 138,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 138,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 139,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 139,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 139,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 139,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 140,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 140,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 140,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 140,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 141,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 141,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 141,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 141,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 142,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 142,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 142,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 142,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 143,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 143,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 143,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 143,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 144,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 144,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 144,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 144,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 145,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 145,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 145,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 145,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 146,
// // //     taskSpentWeek: "|6",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 146,
// // //     taskSpentWeek: "7|9",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 146,
// // //     taskSpentWeek: "10|12",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 146,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 147,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 147,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 147,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 147,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 148,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 148,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 148,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 148,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 149,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 2.5,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 149,
// // //     taskSpentWeek: "6|8",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 149,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "1,5|2,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 149,
// // //     taskSpentWeek: "11|",
// // //     taskSpentDays: "1|1,5",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 150,
// // //     taskSpentWeek: "|4",
// // //     taskSpentDays: 2,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 150,
// // //     taskSpentWeek: "5|7",
// // //     taskSpentDays: "1|1,5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 150,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: "1|1,5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 150,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5|1",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 151,
// // //     taskSpentWeek: "|12",
// // //     taskSpentDays: 6,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 151,
// // //     taskSpentWeek: "13|14",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 151,
// // //     taskSpentWeek: "15|16",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 151,
// // //     taskSpentWeek: "17|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 152,
// // //     taskSpentWeek: "|32",
// // //     taskSpentDays: 4,
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 152,
// // //     taskSpentWeek: "33|34",
// // //     taskSpentDays: "2|3",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 152,
// // //     taskSpentWeek: "35|36",
// // //     taskSpentDays: "2|3",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 152,
// // //     taskSpentWeek: "37|",
// // //     taskSpentDays: "1|2",
// // //     point: 0.5
// // //   },
// // //   {
// // //     task_id: 153,
// // //     taskSpentWeek: "|28",
// // //     taskSpentDays: 3,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 153,
// // //     taskSpentWeek: "29|30",
// // //     taskSpentDays: "1|2",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 153,
// // //     taskSpentWeek: "31|32",
// // //     taskSpentDays: "1|2",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 153,
// // //     taskSpentWeek: "33|",
// // //     taskSpentDays: "0.5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 154,
// // //     taskSpentWeek: "|24",
// // //     taskSpentDays: 3,
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 154,
// // //     taskSpentWeek: "25|26",
// // //     taskSpentDays: "1|2",
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 154,
// // //     taskSpentWeek: "27|28",
// // //     taskSpentDays: "1|2",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 154,
// // //     taskSpentWeek: "29|",
// // //     taskSpentDays: "0.5",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 155,
// // //     taskSpentWeek: "|12",
// // //     taskSpentDays: 6,
// // //     point: 3.5
// // //   },
// // //   {
// // //     task_id: 155,
// // //     taskSpentWeek: "13|14",
// // //     taskSpentDays: 5,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 155,
// // //     taskSpentWeek: "15|16",
// // //     taskSpentDays: 45050,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 155,
// // //     taskSpentWeek: "17|",
// // //     taskSpentDays: 4,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 156,
// // //     taskSpentWeek: "|36",
// // //     taskSpentDays: 3,
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 156,
// // //     taskSpentWeek: "37|18",
// // //     taskSpentDays: 2,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 156,
// // //     taskSpentWeek: "39|40",
// // //     taskSpentDays: 1,
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 156,
// // //     taskSpentWeek: "41|",
// // //     taskSpentDays: "0.5",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 157,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 7,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 157,
// // //     taskSpentWeek: "6|7",
// // //     taskSpentDays: 6,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 157,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: 1,
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 157,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: "0.5",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 158,
// // //     taskSpentWeek: "|24",
// // //     taskSpentDays: 3,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 158,
// // //     taskSpentWeek: "25|26",
// // //     taskSpentDays: 2.5,
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 158,
// // //     taskSpentWeek: "27|28",
// // //     taskSpentDays: 2.5,
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 158,
// // //     taskSpentWeek: "29|",
// // //     taskSpentDays: 2,
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 159,
// // //     taskSpentWeek: "|12",
// // //     taskSpentDays: 3,
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 159,
// // //     taskSpentWeek: "13|14",
// // //     taskSpentDays: 2.5,
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 159,
// // //     taskSpentWeek: "15|16",
// // //     taskSpentDays: 2.5,
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 159,
// // //     taskSpentWeek: "17|",
// // //     taskSpentDays: 1.5,
// // //     point: "None"
// // //   },
// // //   {
// // //     task_id: 160,
// // //     taskSpentWeek: "|5",
// // //     taskSpentDays: 8,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 160,
// // //     taskSpentWeek: "6|7",
// // //     taskSpentDays: 6,
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 160,
// // //     taskSpentWeek: "8|9",
// // //     taskSpentDays: 5,
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 160,
// // //     taskSpentWeek: "10|",
// // //     taskSpentDays: 3,
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 161,
// // //     taskSpentWeek: "|26",
// // //     taskSpentDays: 20,
// // //     point: 5
// // //   },
// // //   {
// // //     task_id: 161,
// // //     taskSpentWeek: "28|30",
// // //     taskSpentDays: "18|19",
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 161,
// // //     taskSpentWeek: "32|34",
// // //     taskSpentDays: "16|17",
// // //     point: 3.5
// // //   },
// // //   {
// // //     task_id: 161,
// // //     taskSpentWeek: "36|",
// // //     taskSpentDays: "14|15",
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 162,
// // //     taskSpentWeek: "|26",
// // //     taskSpentDays: 20,
// // //     point: 5
// // //   },
// // //   {
// // //     task_id: 162,
// // //     taskSpentWeek: "28|30",
// // //     taskSpentDays: "18|19",
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 162,
// // //     taskSpentWeek: "32|34",
// // //     taskSpentDays: "16|17",
// // //     point: 3.5
// // //   },
// // //   {
// // //     task_id: 162,
// // //     taskSpentWeek: "36|",
// // //     taskSpentDays: "14|15",
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 163,
// // //     taskSpentWeek: "|25",
// // //     taskSpentDays: 13,
// // //     point: 5
// // //   },
// // //   {
// // //     task_id: 163,
// // //     taskSpentWeek: "27|29",
// // //     taskSpentDays: "11|12",
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 163,
// // //     taskSpentWeek: "31|33",
// // //     taskSpentDays: "10|11",
// // //     point: 3.5
// // //   },
// // //   {
// // //     task_id: 163,
// // //     taskSpentWeek: "35|",
// // //     taskSpentDays: "8|9",
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 164,
// // //     taskSpentWeek: "|24",
// // //     taskSpentDays: 6,
// // //     point: 2.5
// // //   },
// // //   {
// // //     task_id: 164,
// // //     taskSpentWeek: "26|28",
// // //     taskSpentDays: "4|5",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 164,
// // //     taskSpentWeek: "30|32",
// // //     taskSpentDays: "3|2",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 164,
// // //     taskSpentWeek: "33|",
// // //     taskSpentDays: "1|",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 165,
// // //     taskSpentWeek: "|8",
// // //     taskSpentDays: 6,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 165,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "4|5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 165,
// // //     taskSpentWeek: "11|12",
// // //     taskSpentDays: "3|2",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 165,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 166,
// // //     taskSpentWeek: "|8",
// // //     taskSpentDays: 6,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 166,
// // //     taskSpentWeek: "9|10",
// // //     taskSpentDays: "4|5",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 166,
// // //     taskSpentWeek: "11|12",
// // //     taskSpentDays: "3|2",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 166,
// // //     taskSpentWeek: "13|",
// // //     taskSpentDays: "1|",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 167,
// // //     taskSpentWeek: "|26",
// // //     taskSpentDays: 10,
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 167,
// // //     taskSpentWeek: "28|30",
// // //     taskSpentDays: "8|9",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 167,
// // //     taskSpentWeek: "32|34",
// // //     taskSpentDays: "6|7",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 167,
// // //     taskSpentWeek: "36|",
// // //     taskSpentDays: "5|6",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 168,
// // //     taskSpentWeek: "|22",
// // //     taskSpentDays: 10,
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 168,
// // //     taskSpentWeek: "24|26",
// // //     taskSpentDays: "8|9",
// // //     point: 1.5
// // //   },
// // //   {
// // //     task_id: 168,
// // //     taskSpentWeek: "28|30",
// // //     taskSpentDays: "6|7",
// // //     point: 1
// // //   },
// // //   {
// // //     task_id: 168,
// // //     taskSpentWeek: "32|",
// // //     taskSpentDays: "5|6",
// // //     point: "0.5"
// // //   },
// // //   {
// // //     task_id: 169,
// // //     taskSpentWeek: "|36",
// // //     taskSpentDays: 10,
// // //     point: 4
// // //   },
// // //   {
// // //     task_id: 169,
// // //     taskSpentWeek: "32|34",
// // //     taskSpentDays: "8|9",
// // //     point: 3
// // //   },
// // //   {
// // //     task_id: 169,
// // //     taskSpentWeek: "36|38",
// // //     taskSpentDays: "6|7",
// // //     point: 2
// // //   },
// // //   {
// // //     task_id: 169,
// // //     taskSpentWeek: "40|",
// // //     taskSpentDays: "5|6",
// // //     point: 1.5
// // //   }
// // // ]
// // // function differentiateFormat(text) {
// // //   const regex = /^\d+\|\d*$|^\d*\|\d+$/;
// // //   let newTimes = text.map((e)=>{
// // //   if (regex.test(e.taskSpentWeek)) {
// // //      if (e.taskSpentWeek.endsWith('|')) {
// // //       return {
// // //         task_id:e.task_id,
// // //         taskSpentWeek:parseInt(e.taskSpentWeek.slice(0, -1)) + " & more weeks",
// // //         taskSpentDays:7*parseInt(e.taskSpentWeek.slice(0, -1)),
// // //         point:e.point
// // //       }
// // //     } else if(e.taskSpentWeek.startsWith("|")) {
// // //       return {
// // //         task_id:e.task_id,
// // //         taskSpentWeek:"up to "+parseInt(e.taskSpentWeek.slice(1))+" weeks",
// // //         taskSpentDays:7*parseInt(e.taskSpentWeek.slice(1)),
// // //         point:e.point
// // //       }

// // //     }
// // //     if (e.taskSpentWeek.includes('|')) {
// // //       const [left, right] = e.taskSpentWeek.split('|');
// // //       return {
// // //         task_id:e.task_id,
// // //         taskSpentWeek:parseInt(left) +"-" + parseInt(right) + " weeks",
// // //         taskSpentDays:7*parseInt(right),
// // //         point:e.point
// // //       }
// // //     }
// // //   }
// // //   return null;
// // // })
// // // newTimes = JSON.stringify(newTimes)
// // // fs.writeFile("test/timeTasks.js",newTimes,(err)=>err?console.log(err):console.log("a"))
// // // }

// // // differentiateFormat(timeTasks)

const { Users } = require("../models");

const changeUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    users.map((user) => {
      if (user.grade === 10) {
        user.activityName =
    ["SOCIAL JUSTICE","SOCIAL JUSTICE","COMMUNITY SERVICE","COMMUNITY SERVICE","JOURNALISM/PUBLICATION","DEBATE/SPEECH","COMMUNITY SERVICE","ACADEMIC","SCIENCE/MATH","RELIGIOUS"]

        return user.save();
      } else {
        user.activityName = null;
        return user.save();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

changeUsers();



// const UserEmails = require("../models").UserEmails;
// const jwt = require("jsonwebtoken");
// const DeletedUsers = require("../models").DeletedUsers;
// const moment = require("moment");
// const Task_per_Users = require("../models").Task_per_User;
// const SubTask_per_Users = require("../models").SubTask_per_User;
// const UserModel = require("../models").User

// const foo = async(req,res)=>{
//   try {
//     let OldUserEmail = await UserEmails.findAll({
//       where: { email: "userweb@test.com" },
//     });
//     await Promise.all(
//     OldUserEmail.map(async(e)=>{
//       await UserEmails.destroy({ where: { userId: e.userId } });
//       await UserModel.destroy({ where: { id: e.userId } });
//       await Task_per_Users.destroy({ where: { userId: e.userId } });
//       await SubTask_per_Users.destroy({
//         where: { userId: e.userId },
//       });
//     }))
//   } catch (error) {
//     console.log(error);
//   }
// }


// foo()