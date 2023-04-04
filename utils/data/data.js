const bcrypt = require("bcrypt");
const xlsx = require("xlsx");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const testUserExample = [
  {
    fullName: "User",
    phone: "+37499999999",
    age: "2002-03-25",
    country: "Armenia",
    grade: 10,
    university: "Johns Hopkins University",
    academicProgramFirst:"some info",
    academicProgramSecond:"some info",
    academicProgramThird:"some info", 
    study: "some info",
    termOption: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "[Art (2)]",
    applyingFrom: true,
    testSubmit: "[ACT,SAT].toString()/no",
    recentSchool: "my school",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    fullName: "User",
    phone: "+37499999999",
    age: "2002-03-25",
    country: "Armenia",
    grade: 10,
    university: "Johns Hopkins University",
    academicProgramFirst:"some info",
    academicProgramSecond:"some info",
    academicProgramThird:"some info",
    
    study: "some info",
    termOption: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "[Art (2)]",
    applyingFrom: true,
    testSubmit: "[ACT,SAT].toString()/no",
    recentSchool: "my school",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    fullName: "User",
    phone: "+37499999999",
    age: "2002-03-25",
    country: "Armenia",
    grade: 10,
    university: "Johns Hopkins University",
    academicProgramFirst:"some info",
    academicProgramSecond:"some info",
    academicProgramThird:"some info",
    study: "some info",
    termOption: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "[Art (2)]",
    applyingFrom: true,
    testSubmit: "[ACT,SAT].toString()/no",
    recentSchool: "my school",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    fullName: "Gevorg Khachatryan",
    phone: "+37499999999",
    age: "2005-12-14",
    country: "Armenia",
    grade: 10,
    university: "Johns Hopkins University",
    academicProgramFirst:"some info",
    academicProgramSecond:"some info",
    academicProgramThird:"some info",
    study: "some info",
    termOption: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "[Art (2)]",
    testSubmit: "[ACT,SAT].toString()/no",
    recentSchool: "my school",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const emails = [
  {
    email: "user@test.com",
    password: bcrypt.hashSync("test1234", 10,),
    isVerified: true,
    role: "First",
    userId: 1,
    token: jwt.sign({ user_id: 1, email: "user@test.com" }, process.env.SECRET),
  },
  {
    email: "user@example.com",
    password: bcrypt.hashSync("test1234", 10,),
    isVerified: true,
    role: "First",
    userId: 2,
    token: jwt.sign(
      { user_id: 2, email: "user@example.com" },
      process.env.SECRET
    ),
  },
  {
    email: "user@admin.com",
    password: bcrypt.hashSync("test1234", 10,),
    isVerified: true,
    role: "First",
    userId: 3,
    token: jwt.sign(
      { user_id: 3, email: "user@admin.com" },
      process.env.SECRET
    ),
  },
  {
    email: "gevorg.t.khachatryan@gmail.com",
    password: bcrypt.hashSync("test1234", 10,),
    isVerified: true,
    role: "First",
    userId: 4,
    token: jwt.sign(
      { user_id: 4, email: "gevorg.t.khachatryan@gmail.com" },
      process.env.SECRET
    ),
  },
];
//xlsx.readFile("https://docs.google.com/spreadsheets/d/1zb4NWZy9W2GXq4BPiGwkOjT-r7U8MIn0J5lcS32L3d4/edit#gid=231289614")
const faculty = [
  {
    facultyName: "SOCIAL JUSTICE",
  },
  {
    facultyName: "RESEARCH",
  },
  {
    facultyName: "COMMUNITY SERVICE",
  },
  {
    facultyName: "PUBLICATION/JOURNALISM",
  },
  {
    facultyName: "DEBATE/SPEECH",
  },
  {
    facultyName: "ACADEMIC",
  },
  {
    facultyName: "INTERNSHIP",
  },
  {
    facultyName: "SCIENCE/MATH",
  },
  {
    facultyName: "RELIGIOUS",
  },
  {
    facultyName: "DANCE",
  },
  {
    facultyName: "STUDENT GOVT. POLITICS",
  },
  {
    facultyName: "THEATER/DRAMA",
  },
  {
    facultyName: "MUSIC VOCAL",
  },
  {
    facultyName: "ATHLETICS JV/VARSITY",
  },
  {
    facultyName: "OTHER CLUB/ACTIVITY",
  },
  {
    facultyName: "COMPUTER/TECHNOLOGY",
  },
  {
    facultyName: "THEATER/DRAMA",
  },
  {
    facultyName: "JOURNALISM/PUBLICATION",
  },
  {
    facultyName: "OTHER CLUB/ACTIVITY",
  },
  {
    facultyName: "MUSIC INSTRUMENTAL",
  },
  {
    facultyName: "SCHOOL SPIRIT",
  },
  {
    facultyName: "ATHLETICS CLUB",
  },
  {
    facultyName: "WORK",
  },
];
const successMessages = [
  {
    status: "Excellent",
    textPart1:
      "With your progress, you will unlock your true potential and make the most of your university application with our AI-powered App. ",
    textPart2: "Keep up the exceptional work by Preparing Differently.",
  },
  {
    status: "Good",
    textPart1:
      "With our cutting-edge technology, you are on your way to securing a spot at your dream university soon. We hope to see you rise to an Excellent level soon ",
    textPart2: "Keep up the good work. Sky's the limit, so Prepare Different.",
  },
  {
    status: "Unsatisfactory",
    textPart1:
      "The AI hints to us that your current progress toward your dream university needs to be improved. Thus, we encourage you to use the application more actively, follow app’s recommendations, and complete tasks promptly. ",
    textPart2: "Sky's the limit, so Prepare Different.",
  },
];
const UniversityTable = [
  {
    name: "Stanford University",
    dreamPointMin: 320,
    targetPointMin: 360,
    sefetyPointMin: 390,
  },
  {
    name: "Yale University",
    dreamPointMin: 325,
    targetPointMin: 365,
    sefetyPointMin: 400,
  },
  {
    name: "Duke University",
    dreamPointMin: 300,
    targetPointMin: 330,
    sefetyPointMin: 370,
  },
  {
    name: "Princeton University",
    dreamPointMin: 320,
    targetPointMin: 360,
    sefetyPointMin: 390,
  },
  {
    name: "Dartmouth University",
    dreamPointMin: 310,
    targetPointMin: 320,
    sefetyPointMin: 375,
  },
  {
    name: "Columbia University",
    dreamPointMin: 320,
    targetPointMin: 360,
    sefetyPointMin: 390,
  },
  {
    name: "University of Chicago",
    dreamPointMin: 320,
    targetPointMin: 365,
    sefetyPointMin: 400,
  },
  {
    name: "Harvard University",
    dreamPointMin: 335,
    targetPointMin: 375,
    sefetyPointMin: 410,
  },
  {
    name: "Johns Hopkins University",
    dreamPointMin: 315,
    targetPointMin: 355,
    sefetyPointMin: 385,
  },
  {
    name: "University of Pennsylvania",
    dreamPointMin: 305,
    targetPointMin: 3350,
    sefetyPointMin: 375,
  },
  // {
  //   name: "Grinnell College",
  //   dreamPointMin: 1350,
  //   targetPointMin: 1380,
  //   sefetyPointMin: 1320,
  // },
];


module.exports = {
  UniversityTable,
  testUserExample,
  emails,
  successMessages,
  faculty,
};
