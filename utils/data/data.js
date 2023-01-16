const bcrypt = require("bcrypt");

const testUserExample = [{
    fullName: "User",
    email: "user@test.com",
    isVerifed: true, 
    password:bcrypt.hashSync("test1234",10),
    phone: "+37499999999",
    age: 17,
    country: "Armenia",
    whichClass: 10,
    university: "Johns Hopkins University",
    Unyshcool: "Business school",
    proffession: "Business Management",
    term: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "values of join as ,",
    applyingFrom: "Armenia",
    testSubmit: "SAT",
    recentSchool: "my school",
    report: false,
    hadtests: false,
    hobby: "values of join as ,",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    fullName: "User",
    email: "user@example.com",
    isVerifed: true, 
    password:bcrypt.hashSync("test1234",10),
    phone: "+37499999999",
    age: 17,
    country: "Armenia",
    whichClass: 10,
    university: "Johns Hopkins University",
    Unyshcool: "Business school",
    proffession: "Business Management",
    term: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "values of join as ,",
    applyingFrom: "Armenia",
    testSubmit: "SAT",
    recentSchool: "my school",
    report: false,
    hadtests: false,
    hobby: "values of join as ,",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt:new Date(),
    updatedAt:new Date()
}]

const UniversityTable = [{
    name: "Stanford University",
    dreamPointMin: 1510,
    targetPointMin: 1560,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Yale University",
    dreamPointMin: 1515,
    targetPointMin: 1565,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Duke University",
    dreamPointMin: 1460,
    targetPointMin: 1510,
    sefetyPointMin: 1570,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Princeton University",
    dreamPointMin: 1520,
    targetPointMin: 1570,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Dartmouth University",
    dreamPointMin: 1480,
    targetPointMin: 1530,
    sefetyPointMin: 1590,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Columbia University",
    dreamPointMin: 1510,
    targetPointMin: 1560,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "University of Chicago",
    dreamPointMin: 1490,
    targetPointMin: 1540,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Harvard University",
    dreamPointMin: 1520,
    targetPointMin: 1570,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Johns Hopkins University",
    dreamPointMin: 1515,
    targetPointMin: 1565,
    sefetyPointMin: 1601,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "University of Pennsylvania",
    dreamPointMin: 1490,
    targetPointMin: 1540,
    sefetyPointMin: 1590,
    createdAt:new Date(),
    updatedAt:new Date()
},
{
    name: "Grinnell College",
    dreamPointMin: 1350,
    targetPointMin: 1380,
    sefetyPointMin: 1320,
    createdAt:new Date(),
    updatedAt:new Date()
}
]



const TaskTable = [
    {
        facultName: "SOCIAL JUSTICE",
        positionName: "Cancer Action Network",
        compamyName: "Sec. and Spokesperson",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        facultName: "RESEARCH",
        positionName: "Australian Educational Research",
        compamyName: "University of Newcastle",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Youth Ambassador",
        compamyName: "Cancer Council  New South Wales",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "PUBLICATION/JOURNALISM",
        positionName: "Society of Freelance Journalistsk",
        compamyName: "Group Co-leader",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SOCIAL JUSTICE",
        positionName: "Community Leader",
        compamyName: "Oaktree (largest youth. led org).",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Club Leader",
        compamyName: "(MHS Speaking Club)",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Deputy Mayor",
        compamyName: "Newcastle Youth Council",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE/SPEECH",
        positionName: "Leader",
        compamyName: "MHS Debate Team",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Student",
        compamyName: "Harvard Summer School (7 week programs)",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Intern",
        compamyName: "Minister for Environment & Heritage",
        universityId: 1,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "RESEARCH",
        positionName: "Student Researcher",
        compamyName: "American Heritage Student Research Program",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "RESEARCH",
        positionName: "Researcher",
        compamyName: "MIT Research Science Institute Summer Program",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SOCIAL JUSTICE",
        positionName: "Director and Archive Founder",
        compamyName: "Butterfly Project (Genocide awareness educational initiative)",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SOCIAL JUSTICE",
        positionName: "Founder and Director",
        compamyName: "Dreams of Hope (Pen Pal program)",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "Vice President",
        compamyName: "AHS Sigma Xi (Research Honors Society)",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SOCIAL JUSTICE",
        positionName: "Co-President",
        compamyName: "Tikkun Olam (Jewish cultural group)",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "RELIGIOUS",
        positionName: "Migration Mass Activities Coordinator",
        compamyName: "Our Lady of Health Mission League ",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE/SPEECH",
        positionName: "Exec Board & Social, Humanitarian & Cultural Chair",
        compamyName: "AHS Model UN",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "President",
        compamyName: "AHS English Honors Society Organized nationa",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DANCE",
        positionName: "Bharatanatyam Dancer",
        compamyName: "Temple of Dance (Dance school) ",
        universityId: 2,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. POLITICS",
        positionName: "Prefect, House Captain, Peer Support Leader",
        compamyName: "Student Government",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATRE / DRAMA",
        positionName: "Lead Actor",
        compamyName: "Knox School Academy of Performing Arts",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATRE / DRAMA",
        positionName: "Lead Actor",
        compamyName: "Abbotsleigh School for the Performing Arts",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DANCE",
        positionName: "Team Member",
        compamyName: "Abbotsleigh Crew School of Competitive Dance",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC VOCAL",
        positionName: "Member of Choir",
        compamyName: "Jazz Ensemble, Chamber Choir",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS JV / VARSITY",
        positionName: "Tennis Varsity Doubles Player",
        compamyName: "Tildsley Rep Tennis",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS JV/VARSITY",
        positionName: "Shooting Guard",
        compamyName: "Basketball Varsity Second Team",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Volunteer",
        compamyName: "Habitat for Humanity Fiji",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. POLITICS",
        positionName: "Advocator",
        compamyName: "Petition for Women in Government",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER / CLUB ACTIVITY",
        positionName: "Diver",
        compamyName: "PADI Scuba Diving Certifications",
        universityId: 3,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC VOCAL",
        positionName: "Co-President",
        compamyName: "Allegro Council (Music Council)",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMPUTER / TECHNOLOGY",
        positionName: "Member",
        compamyName: "Lawrenceville Computer Programming Club",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC VOCAL",
        positionName: "Co-President",
        compamyName: "Rouge Acapella Group",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMPUTER / TECHNOLOGY",
        positionName: "Software Developer",
        compamyName: "Lawrenceville 24H Pass System",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC VOCAL",
        positionName: "Singer (Alto)",
        compamyName: "Lawrentians Choir",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATER / DRAMA",
        positionName: "Cast Member",
        compamyName: "Various School Musicals",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATER / DRAMA",
        positionName: "Cast Member",
        compamyName: "Various School Musicals",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "JOURNALISM / PUBLICATION",
        positionName: "Managing Editor",
        compamyName: "Working Title (Literary Magazine)",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Softball Team Captain",
        compamyName: "Lawrenceville JV Softball",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER CLUB / ACTIVITY",
        positionName: "VP of Community Service",
        compamyName: "Int. Student Association",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Basketball Team Manager",
        compamyName: "JV Girls Basketball",
        universityId: 4,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "President",
        compamyName: "Best Buddies International (WY Chapter)",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC INSTRUMENTAL",
        positionName: "Violinist",
        compamyName: "Chicago Youth Symphony Orchestra",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCHOOL SPIRIT",
        positionName: "President",
        compamyName: "WY Freshmen Mentors",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS CLUB",
        positionName: "Gymnastics Captain",
        compamyName: "IK Gymnastics Chicago",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "ESL Tutor",
        compamyName: "Heartland Alliance Human Care",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "President",
        compamyName: "NJHS (WY Chapter)",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "WORK",
        positionName: "Gymnastics Coach",
        compamyName: "IK Gymnastics",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Student",
        compamyName: "Yale Young Global Scholars",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Sailing Founding Member",
        compamyName: "WY Varsity Sailing Team",
        universityId: 5,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "JOURNALISM / PUBLICATION",
        positionName: "Creative Editor",
        compamyName: "The Picador (School Newspaper)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ART",
        positionName: "Vice Organizer",
        compamyName: "MUSE Exhibition (Hanoi)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Economics Column Intern",
        compamyName: "TienPhong.vn (VN News)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATER / DRAMA",
        positionName: "Composer, Writer, Producer",
        compamyName: "Fragments (Musical)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Co-founder",
        compamyName: "Share Org. (Sex Ed. Nonprofit)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Volunteer Mentor",
        compamyName: "Camp Blast (Children's camp)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "JOURNALISM / PUBLICATION",
        positionName: "Reporter & Photographer",
        compamyName: "Shades of Hanoi (Magazine)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATER / DRAMA",
        positionName: "Actress",
        compamyName: "Bring it On & All Shook Up (Musicals)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SOCIAL JUSTICE",
        positionName: "Leader",
        compamyName: "Annual Student-Led Conferences",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC VOCAL",
        positionName: "Soprano Vocalist",
        compamyName: "HolderNotes (A-capella)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Intern",
        compamyName: "Congresswoman office",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "CAREER ORIENTED",
        positionName: "Dir. of Outreach",
        compamyName: "The Barrio Impact (Ed.Nonprofit)",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Captain & President",
        compamyName: "MDCHS Quiz Bowl Team",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Intern & Office Manager",
        compamyName: "Ammar Campa-Najjar Campaign",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER CLUB / ACTIVITY",
        positionName: "President & Founder",
        compamyName: "College Awareness Club",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Intern",
        compamyName: "Bilateral Safety Corridor Coalition",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Lacrosse Defenseman",
        compamyName: "MDCHS Crusaders Varsity Lacrosse",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Vice President",
        compamyName: "Speech & Debate Club",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "RELIGIOUS",
        positionName: "Member",
        compamyName: "Ambassador for Christ Corps",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Team B Captain",
        compamyName: "National Ocean Sciences Bowl.",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Founder & Leader",
        compamyName: "Fun Maths Problem Solving Society",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. / POLITICS",
        positionName: "Y13 Vice-Captain",
        compamyName: "Dulwich College",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Organizer",
        compamyName: "Foundation Schools Maths Competition",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Member",
        compamyName: "Physics Society",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "CULTURAL",
        positionName: "Founder & Co-Leader",
        compamyName: "Russian Culture Society",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Competitor",
        compamyName: "Various Maths Competitions",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Reading/Maths Mentor",
        compamyName: "City Heights E-ACT Academy",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "JOURNALISM / PUBLICATION",
        positionName: "Senior Editor",
        compamyName: "DC Mathematica (Annual publication)",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER CLUB / ACTIVITY",
        positionName: "Writer",
        compamyName: "House Poetry Competition",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "RELIGIOUS",
        positionName: "Member",
        compamyName: "Religion, Theology, Ethics Society",
        universityId: 6,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{ 
        facultName: "RESEARCH",
        positionName: "Research Assistant",
        compamyName: "Research on Diet and Skin Health",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Volunteer",
        compamyName: "Stepping Stone Mission",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "CULTURAL",
        positionName: "Founder and President",
        compamyName: "Origami Club",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. POLITICS",
        positionName: "President",
        compamyName: "Student Government Association",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "Captain",
        compamyName: "Math Team",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Intern",
        compamyName: "Newnan Dermatology Institute",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "RELIGIOUS",
        positionName: "Audio Technician",
        compamyName: "Worship Team",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Selected Participant",
        compamyName: "Harvard Pre-College Program",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Chairman of Community Service",
        compamyName: "Key Club",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "President",
        compamyName: "Mu Alpha Theta",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "Microbio Research Intern",
        compamyName: "CHN Academy of Sciences",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{ 
        facultName: "OTHER CLUB / ACTIVITY",
        positionName: "Co-founder and President",
        compamyName: "Transfer Student Club",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "Captain",
        compamyName: "Math Team",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "Member",
        compamyName: "Science Olympiad Team",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Member",
        compamyName: "National Honors Society",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "Student",
        compamyName: "Stanford Pre-Collegiate Summer Institutes",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC INSTRUMENTAL",
        positionName: "Violinist",
        compamyName: "School orchestra",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMPUTER / TECHNOLOGY",
        positionName: "Member",
        compamyName: "Robotics Team",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Member",
        compamyName: "Key Club",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "WORK",
        positionName: "Private Chinese Tutor",
        compamyName: "Freelance",
        universityId: 7,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Founder",
        compamyName: "Eduklase Online Education Info Portal",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "CAREER ORIENTED",
        positionName: "VP",
        compamyName: "HK Youth Law & Current Affairs Association",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "President",
        compamyName: "School MUN Club",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SCIENCE / MATH",
        positionName: "Team Leader",
        compamyName: "Dyelectricity Science Research Team",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Captain",
        compamyName: "School Mock Trial team",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Cancer Action Network",
        compamyName: "Kalliope Organization Committee",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMIC",
        positionName: "Participant",
        compamyName: "Stanford Summer Humanities Institute",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ENVIRONMENTAL",
        positionName: "Organizing Committee member",
        compamyName: "HK Youth Environmental Summit",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Volunteer",
        compamyName: "Crossroads Foundation",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Founder and Director",
        compamyName: "IYOW Charity Converts",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Member",
        compamyName: "Victorian State Squad for Debating",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Debating Captain",
        compamyName: "Middle School and Senior School",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "JOURNALISM / PUBLICATION",
        positionName: "Writer and Editor",
        compamyName: "Various publications",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ART",
        positionName: "IB artists",
        compamyName: "Visual Arts",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC INSTRUMENTAL",
        positionName: "Musician",
        compamyName: "Piano and Viola",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Member",
        compamyName: "Local Community Service",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATRE / DRAMA",
        positionName: "Playwright and Publicist",
        compamyName: "House Drama Captain",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS CLUB",
        positionName: "Player",
        compamyName: "Badminton",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Volunteer",
        compamyName: "Hand Up Australia Udaipur",
        universityId: 9,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER / CLUB ACTIVITY",
        positionName: "Volunteer",
        compamyName: "UN and EP",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER / CLUB ACTIVITY",
        positionName: "AFI International Youth Ambassadorr",
        compamyName: "Youth-run charity",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "President and Founder",
        compamyName: "Youth-run charity",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "INTERNSHIP",
        positionName: "MEP EP Internship",
        compamyName: "One Belt One Road Initiative",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENTS GOVT. / POLITICS",
        positionName: "SRC Prefect",
        compamyName: "Students Representative Council",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ACADEMICS",
        positionName: "Publisher",
        compamyName: "Fictocritical Thesis Publishing Club",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Public Speaker",
        compamyName: "Debating Competitions and Trinity College Diploma",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "OTHER / CLUB ACTIVITY",
        positionName: "Participant",
        compamyName: "International Courses, Programmes and Leadership",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC - INSTRUMENTAL",
        positionName: "Player",
        compamyName: "Lead Cellist, Organ, Piano, Flute, Harpsichord",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "CAREER ORIENTED",
        positionName: "Youth Parliament member",
        compamyName: "Minister for Women's Affairs",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Participant",
        compamyName: "Fencing, Sports and Activities",
        universityId: 10,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. / POLITICS",
        positionName: "Senior Prefect (School Captain)",
        compamyName: "High School",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC INSTRUMENTAL",
        positionName: "Music Captain",
        compamyName: "High School Orchestran",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC INSTRUMENTAL",
        positionName: "Assistant Concertmaster",
        compamyName: "School Orchestra",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "MUSIC VOCAL",
        positionName: "Tenor in 'Grammar Phones'",
        compamyName: "Senior A Cappella Group",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Cross Country Captain",
        compamyName: "Cross Country",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Basketball Player",
        compamyName: "Power Forward in First/Second Squad",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "ATHLETICS - JV / VARSITY",
        positionName: "Championship School Representative",
        compamyName: "Track and field / Sprints /Middle Distance",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "FOREIGN EXCHANGE",
        positionName: "Participant",
        compamyName: "Paris/Sydney",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Member",
        compamyName: "Debating A Team / Mooting Team (High School)",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Violinist",
        compamyName: "Australian Chamber Orchestra Music Education Program",
        universityId: 8,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATRE / DRAMA",
        positionName: "Member",
        compamyName: "Benvinda Drama Group",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATRE / DRAMA",
        positionName: "Connections",
        compamyName: "Royal National Theatre of London",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "THEATRE / DRAMA",
        positionName: "Member",
        compamyName: "Musical Theater Group",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "SOCIAL JUSTICE",
        positionName: "President and Co-founder",
        compamyName: "Coletivo Maria Quitéria",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "CULTURAL",
        positionName: "Participant",
        compamyName: "Brazilian Leadership Bootcamp",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "DEBATE / SPEECH",
        positionName: "Delegate, Secretary, and Chair",
        compamyName: "Model UN",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. / POLITICS",
        positionName: "Senior Year Representative",
        compamyName: "Student Council",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "STUDENT GOVT. / POLITICS",
        positionName: "Founder and Spokeswoman",
        compamyName: "Political Commission",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Charity Outreach",
        compamyName: "Fraternity Experience Program",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        facultName: "COMMUNITY SERVICE",
        positionName: "Volunteer",
        compamyName: "Association of Hospital das Clínicas",
        universityId: 11,
        isFree:true,
        createdAt:new Date(),
        updatedAt:new Date()
    }
]
module.exports = {
    UniversityTable,
    TaskTable,
    testUserExample
}