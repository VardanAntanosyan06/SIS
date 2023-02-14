var express = require('express');
var router = express.Router();
const controller = require("../controllers/addEmailsController")

router.post("/",controller.addEmail)
router.patch("/",controller.verifyEmail)
router.patch("/update",controller.updateEmail)


    module.exports = router;


    SOCIAL JUSTICE
    RESEARCH
    COMMUNITY SERVICE
    PUBLICATION/JOURNALISM
    DEBATE/SPEECH
    ACADEMIC
    INTERNSHIP
    SCIENCE/MATH
    RELIGIOUS
    DANCE
    STUDENT GOVT. POLITICS
    THEATRE/DRAMA
    MUSIC VOCAL
    ATHLETICS JV/VARSITY
    OTHER/CLUB ACTIVITY
    COMPUTER/TECHNOLOGY
    THEATER/DRAMA
    JOURNALISM/PUBLICATION
    OTHER CLUB/ACTIVITY
    MUSIC INSTRUMENTAL
    SCHOOL SPIRIT
    ATHLETICS CLUB
    WORK
    ART
    CAREER ORIENTED
    CULTURAL
    ENVIRONMENTAL
    STUDENTS GOVT. POLITICS