const bcrypt = require("bcrypt");
const xlsx = require("xlsx");

const testUserExample = [
  { 
    fullName: "User",
    phone: "+37499999999",
    age: "2002-03-25",
    country: "Armenia",
    grade:10,
    university: "Johns Hopkins University",
    academicProgram: "some info",
    study: "some info",
    termOption: "start term",
    planType: "Regular Desicion",
    aid: false,
    legacy: false,
    area: "aboute me (for 9th)",
    activityName: "[SOCIAL JUSTICE(2),...].toString()",
    applyingFrom: true,
    testSubmit: "[ACT,SAT].toString()/no",
    recentSchool: "my school",
    workExperience: "about my work  experience",
    addinfo: true,
    moreInfo: "about me",
    createdAt:new Date(),
    updatedAt:new Date()
  },
    { 
      fullName: "User",
      phone: "+37499999999",
      age: "2002-03-25",
      country: "Armenia",
      grade:10,
      university: "Johns Hopkins University",
      academicProgram: "some info",
      study: "some info",
      termOption: "start term",
      planType: "Regular Desicion",
      aid: false,
      legacy: false,
      area: "aboute me (for 9th)",
      activityName: "[SOCIAL JUSTICE(2),...].toString()",
      applyingFrom: true,
      testSubmit: "[ACT,SAT].toString()/no",
      recentSchool: "my school",
      workExperience: "about my work  experience",
      addinfo: true,
      moreInfo: "about me",
      createdAt:new Date(),
      updatedAt:new Date()
  },
];

const emails = [
  {
    email:"user@test.com",
    password: bcrypt.hashSync("test1234", 10),
    isVerified:true,
    role:"First",
    userId:1
  },
  {
    email:"user@example.com",
    password: bcrypt.hashSync("test1234", 10),
    isVerified:true,
    role:"First",
    userId:2
  },  {
    email:"user@admin.com",
    password: bcrypt.hashSync("test1234", 10),
    isVerified:true,
    role:"First",
    userId:3
  }
]
//xlsx.readFile("https://docs.google.com/spreadsheets/d/1zb4NWZy9W2GXq4BPiGwkOjT-r7U8MIn0J5lcS32L3d4/edit#gid=231289614")

const successMessages = [
  {
    status:"Excellent",
    textPart1:"With your progress, you will unlock your true potential and make the most of your university application with our AI-powered App.",
    textpart2:"Keep up the exceptional work by Preparing Differently."
  },
  {
    status:"Good",
    textPart1:"With our cutting-edge technology, you are on your way to securing a spot at your dream university soon. We hope to see you rise to an Excellent level soon",
    textpart2:"Keep up the good work. Sky's the limit, so Prepare Different."
  },
  {
    status:"Unsatisfactory",
    textPart1:"With our cutting-edge technology, you are on your way to securing a spot at your dream university soon.We hope to see you rise to an Excellent level soon. Keep up the good work. Sky's the limit, so Prepare Different.</p>",
    textpart2:""
  }
]
const UniversityTable = [
  {
    name: "Stanford University",
    dreamPointMin: 1510,
    targetPointMin: 1560,
    sefetyPointMin: 1601,
  },
  {
    name: "Yale University",
    dreamPointMin: 1515,
    targetPointMin: 1565,
    sefetyPointMin: 1601,
  },
  {
    name: "Duke University",
    dreamPointMin: 1460,
    targetPointMin: 1510,
    sefetyPointMin: 1570,
  },
  {
    name: "Princeton University",
    dreamPointMin: 1520,
    targetPointMin: 1570,
    sefetyPointMin: 1601,
  },
  {
    name: "Dartmouth University",
    dreamPointMin: 1480,
    targetPointMin: 1530,
    sefetyPointMin: 1590,
  },
  {
    name: "Columbia University",
    dreamPointMin: 1510,
    targetPointMin: 1560,
    sefetyPointMin: 1601,
  },
  {
    name: "University of Chicago",
    dreamPointMin: 1490,
    targetPointMin: 1540,
    sefetyPointMin: 1601,
  },
  {
    name: "Harvard University",
    dreamPointMin: 1520,
    targetPointMin: 1570,
    sefetyPointMin: 1601,
  },
  {
    name: "Johns Hopkins University",
    dreamPointMin: 1515,
    targetPointMin: 1565,
    sefetyPointMin: 1601,
  },
  {
    name: "University of Pennsylvania",
    dreamPointMin: 1490,
    targetPointMin: 1540,
    sefetyPointMin: 1590,
  },
  {
    name: "Grinnell College",
    dreamPointMin: 1350,
    targetPointMin: 1380,
    sefetyPointMin: 1320,
  },
];

const TaskTable = [
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "Cancer Action Network",
    companyName: "Sec. and Spokesperson",
    universityId: 1,
  },
  {
    facultName: "RESEARCH",
    positionName: "Australian Educational Research",
    companyName: "University of Newcastle",
    universityId: 1,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Youth Ambassador",
    companyName: "Cancer Council  New South Wales",
    universityId: 1,
  },
  {
    facultName: "PUBLICATION/JOURNALISM",
    positionName: "Society of Freelance Journalistsk",
    companyName: "Group Co-leader",
    universityId: 1,
  },
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "Community Leader",
    companyName: "Oaktree (largest youth. led org).",
    universityId: 1,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Club Leader",
    companyName: "(MHS Speaking Club)",
    universityId: 1,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Deputy Mayor",
    companyName: "Newcastle Youth Council",
    universityId: 1,
  },
  {
    facultName: "DEBATE/SPEECH",
    positionName: "Leader",
    companyName: "MHS Debate Team",
    universityId: 1,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Student",
    companyName: "Harvard Summer School (7 week programs)",
    universityId: 1,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Intern",
    companyName: "Minister for Environment & Heritage",
    universityId: 1,
  },
  {
    facultName: "RESEARCH",
    positionName: "Student Researcher",
    companyName: "American Heritage Student Research Program",
    universityId: 2,
  },
  {
    facultName: "RESEARCH",
    positionName: "Researcher",
    companyName: "MIT Research Science Institute Summer Program",
    universityId: 2,
  },
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "Director and Archive Founder",
    companyName:
      "Butterfly Project (Genocide awareness educational initiative)",
    universityId: 2,
  },
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "Founder and Director",
    companyName: "Dreams of Hope (Pen Pal program)",
    universityId: 2,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "Vice President",
    companyName: "AHS Sigma Xi (Research Honors Society)",
    universityId: 2,
  },
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "Co-President",
    companyName: "Tikkun Olam (Jewish cultural group)",
    universityId: 2,
  },
  {
    facultName: "RELIGIOUS",
    positionName: "Migration Mass Activities Coordinator",
    companyName: "Our Lady of Health Mission League ",
    universityId: 2,
  },
  {
    facultName: "DEBATE/SPEECH",
    positionName: "Exec Board & Social, Humanitarian & Cultural Chair",
    companyName: "AHS Model UN",
    universityId: 2,
  },
  {
    facultName: "ACADEMIC",
    positionName: "President",
    companyName: "AHS English Honors Society Organized nationa",
    universityId: 2,
  },
  {
    facultName: "DANCE",
    positionName: "Bharatanatyam Dancer",
    companyName: "Temple of Dance (Dance school) ",
    universityId: 2,
  },
  {
    facultName: "STUDENT GOVT. POLITICS",
    positionName: "Prefect, House Captain, Peer Support Leader",
    companyName: "Student Government",
    universityId: 3,
  },
  {
    facultName: "THEATRE / DRAMA",
    positionName: "Lead Actor",
    companyName: "Knox School Academy of Performing Arts",
    universityId: 3,
  },
  {
    facultName: "THEATRE / DRAMA",
    positionName: "Lead Actor",
    companyName: "Abbotsleigh School for the Performing Arts",
    universityId: 3,
  },
  {
    facultName: "DANCE",
    positionName: "Team Member",
    companyName: "Abbotsleigh Crew School of Competitive Dance",
    universityId: 3,
  },
  {
    facultName: "MUSIC VOCAL",
    positionName: "Member of Choir",
    companyName: "Jazz Ensemble, Chamber Choir",
    universityId: 3,
  },
  {
    facultName: "ATHLETICS JV / VARSITY",
    positionName: "Tennis Varsity Doubles Player",
    companyName: "Tildsley Rep Tennis",
    universityId: 3,
  },
  {
    facultName: "ATHLETICS JV/VARSITY",
    positionName: "Shooting Guard",
    companyName: "Basketball Varsity Second Team",
    universityId: 3,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Volunteer",
    companyName: "Habitat for Humanity Fiji",
    universityId: 3,
  },
  {
    facultName: "STUDENT GOVT. POLITICS",
    positionName: "Advocator",
    companyName: "Petition for Women in Government",
    universityId: 3,
  },
  {
    facultName: "OTHER / CLUB ACTIVITY",
    positionName: "Diver",
    companyName: "PADI Scuba Diving Certifications",
    universityId: 3,
  },
  {
    facultName: "MUSIC VOCAL",
    positionName: "Co-President",
    companyName: "Allegro Council (Music Council)",
    universityId: 4,
  },
  {
    facultName: "COMPUTER / TECHNOLOGY",
    positionName: "Member",
    companyName: "Lawrenceville Computer Programming Club",
    universityId: 4,
  },
  {
    facultName: "MUSIC VOCAL",
    positionName: "Co-President",
    companyName: "Rouge Acapella Group",
    universityId: 4,
  },
  {
    facultName: "COMPUTER / TECHNOLOGY",
    positionName: "Software Developer",
    companyName: "Lawrenceville 24H Pass System",
    universityId: 4,
  },
  {
    facultName: "MUSIC VOCAL",
    positionName: "Singer (Alto)",
    companyName: "Lawrentians Choir",
    universityId: 4,
  },
  {
    facultName: "THEATER / DRAMA",
    positionName: "Cast Member",
    companyName: "Various School Musicals",
    universityId: 4,
  },
  {
    facultName: "THEATER / DRAMA",
    positionName: "Cast Member",
    companyName: "Various School Musicals",
    universityId: 4,
  },
  {
    facultName: "JOURNALISM / PUBLICATION",
    positionName: "Managing Editor",
    companyName: "Working Title (Literary Magazine)",
    universityId: 4,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Softball Team Captain",
    companyName: "Lawrenceville JV Softball",
    universityId: 4,
  },
  {
    facultName: "OTHER CLUB / ACTIVITY",
    positionName: "VP of Community Service",
    companyName: "Int. Student Association",
    universityId: 4,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Basketball Team Manager",
    companyName: "JV Girls Basketball",
    universityId: 4,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "President",
    companyName: "Best Buddies International (WY Chapter)",
    universityId: 5,
  },
  {
    facultName: "MUSIC INSTRUMENTAL",
    positionName: "Violinist",
    companyName: "Chicago Youth Symphony Orchestra",
    universityId: 5,
  },
  {
    facultName: "SCHOOL SPIRIT",
    positionName: "President",
    companyName: "WY Freshmen Mentors",
    universityId: 5,
  },
  {
    facultName: "ATHLETICS CLUB",
    positionName: "Gymnastics Captain",
    companyName: "IK Gymnastics Chicago",
    universityId: 5,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "ESL Tutor",
    companyName: "Heartland Alliance Human Care",
    universityId: 5,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "President",
    companyName: "NJHS (WY Chapter)",
    universityId: 5,
  },
  {
    facultName: "WORK",
    positionName: "Gymnastics Coach",
    companyName: "IK Gymnastics",
    universityId: 5,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Student",
    companyName: "Yale Young Global Scholars",
    universityId: 5,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Sailing Founding Member",
    companyName: "WY Varsity Sailing Team",
    universityId: 5,
  },
  {
    facultName: "JOURNALISM / PUBLICATION",
    positionName: "Creative Editor",
    companyName: "The Picador (School Newspaper)",
    universityId: 6,
  },
  {
    facultName: "ART",
    positionName: "Vice Organizer",
    companyName: "MUSE Exhibition (Hanoi)",
    universityId: 6,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Economics Column Intern",
    companyName: "TienPhong.vn (VN News)",
    universityId: 6,
  },
  {
    facultName: "THEATER / DRAMA",
    positionName: "Composer, Writer, Producer",
    companyName: "Fragments (Musical)",
    universityId: 6,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Co-founder",
    companyName: "Share Org. (Sex Ed. Nonprofit)",
    universityId: 6,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Volunteer Mentor",
    companyName: "Camp Blast (Children's camp)",
    universityId: 6,
  },
  {
    facultName: "JOURNALISM / PUBLICATION",
    positionName: "Reporter & Photographer",
    companyName: "Shades of Hanoi (Magazine)",
    universityId: 6,
  },
  {
    facultName: "THEATER / DRAMA",
    positionName: "Actress",
    companyName: "Bring it On & All Shook Up (Musicals)",
    universityId: 6,
  },
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "Leader",
    companyName: "Annual Student-Led Conferences",
    universityId: 6,
  },
  {
    facultName: "MUSIC VOCAL",
    positionName: "Soprano Vocalist",
    companyName: "HolderNotes (A-capella)",
    universityId: 6,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Intern",
    companyName: "Congresswoman office",
    universityId: 7,
  },
  {
    facultName: "CAREER ORIENTED",
    positionName: "Dir. of Outreach",
    companyName: "The Barrio Impact (Ed.Nonprofit)",
    universityId: 7,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Captain & President",
    companyName: "MDCHS Quiz Bowl Team",
    universityId: 7,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Intern & Office Manager",
    companyName: "Ammar Campa-Najjar Campaign",
    universityId: 7,
  },
  {
    facultName: "OTHER CLUB / ACTIVITY",
    positionName: "President & Founder",
    companyName: "College Awareness Club",
    universityId: 7,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Intern",
    companyName: "Bilateral Safety Corridor Coalition",
    universityId: 7,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Lacrosse Defenseman",
    companyName: "MDCHS Crusaders Varsity Lacrosse",
    universityId: 7,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Vice President",
    companyName: "Speech & Debate Club",
    universityId: 7,
  },
  {
    facultName: "RELIGIOUS",
    positionName: "Member",
    companyName: "Ambassador for Christ Corps",
    universityId: 7,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Team B Captain",
    companyName: "National Ocean Sciences Bowl.",
    universityId: 7,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Founder & Leader",
    companyName: "Fun Maths Problem Solving Society",
    universityId: 6,
  },
  {
    facultName: "STUDENT GOVT. / POLITICS",
    positionName: "Y13 Vice-Captain",
    companyName: "Dulwich College",
    universityId: 6,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Organizer",
    companyName: "Foundation Schools Maths Competition",
    universityId: 6,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Member",
    companyName: "Physics Society",
    universityId: 6,
  },
  {
    facultName: "CULTURAL",
    positionName: "Founder & Co-Leader",
    companyName: "Russian Culture Society",
    universityId: 6,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Competitor",
    companyName: "Various Maths Competitions",
    universityId: 6,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Reading/Maths Mentor",
    companyName: "City Heights E-ACT Academy",
    universityId: 6,
  },
  {
    facultName: "JOURNALISM / PUBLICATION",
    positionName: "Senior Editor",
    companyName: "DC Mathematica (Annual publication)",
    universityId: 6,
  },
  {
    facultName: "OTHER CLUB / ACTIVITY",
    positionName: "Writer",
    companyName: "House Poetry Competition",
    universityId: 6,
  },
  {
    facultName: "RELIGIOUS",
    positionName: "Member",
    companyName: "Religion, Theology, Ethics Society",
    universityId: 6,
  },
  {
    facultName: "RESEARCH",
    positionName: "Research Assistant",
    companyName: "Research on Diet and Skin Health",
    universityId: 8,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Volunteer",
    companyName: "Stepping Stone Mission",
    universityId: 8,
  },
  {
    facultName: "CULTURAL",
    positionName: "Founder and President",
    companyName: "Origami Club",
    universityId: 8,
  },
  {
    facultName: "STUDENT GOVT. POLITICS",
    positionName: "President",
    companyName: "Student Government Association",
    universityId: 8,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "Captain",
    companyName: "Math Team",
    universityId: 8,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Intern",
    companyName: "Newnan Dermatology Institute",
    universityId: 8,
  },
  {
    facultName: "RELIGIOUS",
    positionName: "Audio Technician",
    companyName: "Worship Team",
    universityId: 8,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Selected Participant",
    companyName: "Harvard Pre-College Program",
    universityId: 8,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Chairman of Community Service",
    companyName: "Key Club",
    universityId: 8,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "President",
    companyName: "Mu Alpha Theta",
    universityId: 8,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "Microbio Research Intern",
    companyName: "CHN Academy of Sciences",
    universityId: 7,
  },
  {
    facultName: "OTHER CLUB / ACTIVITY",
    positionName: "Co-founder and President",
    companyName: "Transfer Student Club",
    universityId: 7,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "Captain",
    companyName: "Math Team",
    universityId: 7,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "Member",
    companyName: "Science Olympiad Team",
    universityId: 7,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Member",
    companyName: "National Honors Society",
    universityId: 7,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "Student",
    companyName: "Stanford Pre-Collegiate Summer Institutes",
    universityId: 7,
  },
  {
    facultName: "MUSIC INSTRUMENTAL",
    positionName: "Violinist",
    companyName: "School orchestra",
    universityId: 7,
  },
  {
    facultName: "COMPUTER / TECHNOLOGY",
    positionName: "Member",
    companyName: "Robotics Team",
    universityId: 7,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Member",
    companyName: "Key Club",
    universityId: 7,
  },
  {
    facultName: "WORK",
    positionName: "Private Chinese Tutor",
    companyName: "Freelance",
    universityId: 7,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Founder",
    companyName: "Eduklase Online Education Info Portal",
    universityId: 8,
  },
  {
    facultName: "CAREER ORIENTED",
    positionName: "VP",
    companyName: "HK Youth Law & Current Affairs Association",
    universityId: 8,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "President",
    companyName: "School MUN Club",
    universityId: 8,
  },
  {
    facultName: "SCIENCE / MATH",
    positionName: "Team Leader",
    companyName: "Dyelectricity Science Research Team",
    universityId: 8,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Captain",
    companyName: "School Mock Trial team",
    universityId: 8,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Cancer Action Network",
    companyName: "Kalliope Organization Committee",
    universityId: 8,
  },
  {
    facultName: "ACADEMIC",
    positionName: "Participant",
    companyName: "Stanford Summer Humanities Institute",
    universityId: 8,
  },
  {
    facultName: "ENVIRONMENTAL",
    positionName: "Organizing Committee member",
    companyName: "HK Youth Environmental Summit",
    universityId: 8,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Volunteer",
    companyName: "Crossroads Foundation",
    universityId: 8,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Founder and Director",
    companyName: "IYOW Charity Converts",
    universityId: 9,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Member",
    companyName: "Victorian State Squad for Debating",
    universityId: 9,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Debating Captain",
    companyName: "Middle School and Senior School",
    universityId: 9,
  },
  {
    facultName: "JOURNALISM / PUBLICATION",
    positionName: "Writer and Editor",
    companyName: "Various publications",
    universityId: 9,
  },
  {
    facultName: "ART",
    positionName: "IB artists",
    companyName: "Visual Arts",
    universityId: 9,
  },
  {
    facultName: "MUSIC INSTRUMENTAL",
    positionName: "Musician",
    companyName: "Piano and Viola",
    universityId: 9,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Member",
    companyName: "Local Community Service",
    universityId: 9,
  },
  {
    facultName: "THEATRE / DRAMA",
    positionName: "Playwright and Publicist",
    companyName: "House Drama Captain",
    universityId: 9,
  },
  {
    facultName: "ATHLETICS CLUB",
    positionName: "Player",
    companyName: "Badminton",
    universityId: 9,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Volunteer",
    companyName: "Hand Up Australia Udaipur",
    universityId: 9,
  },
  {
    facultName: "OTHER / CLUB ACTIVITY",
    positionName: "Volunteer",
    companyName: "UN and EP",
    universityId: 10,
  },
  {
    facultName: "OTHER / CLUB ACTIVITY",
    positionName: "AFI International Youth Ambassadorr",
    companyName: "Youth-run charity",
    universityId: 10,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "President and Founder",
    companyName: "Youth-run charity",
    universityId: 10,
  },
  {
    facultName: "INTERNSHIP",
    positionName: "MEP EP Internship",
    companyName: "One Belt One Road Initiative",
    universityId: 10,
  },
  {
    facultName: "STUDENTS GOVT. / POLITICS",
    positionName: "SRC Prefect",
    companyName: "Students Representative Council",
    universityId: 10,
  },
  {
    facultName: "ACADEMICS",
    positionName: "Publisher",
    companyName: "Fictocritical Thesis Publishing Club",
    universityId: 10,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Public Speaker",
    companyName: "Debating Competitions and Trinity College Diploma",
    universityId: 10,
  },
  {
    facultName: "OTHER / CLUB ACTIVITY",
    positionName: "Participant",
    companyName: "International Courses, Programmes and Leadership",
    universityId: 10,
  },
  {
    facultName: "MUSIC - INSTRUMENTAL",
    positionName: "Player",
    companyName: "Lead Cellist, Organ, Piano, Flute, Harpsichord",
    universityId: 10,
  },
  {
    facultName: "CAREER ORIENTED",
    positionName: "Youth Parliament member",
    companyName: "Minister for Women's Affairs",
    universityId: 10,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Participant",
    companyName: "Fencing, Sports and Activities",
    universityId: 10,
  },
  {
    facultName: "STUDENT GOVT. / POLITICS",
    positionName: "Senior Prefect (School Captain)",
    companyName: "High School",
    universityId: 8,
  },
  {
    facultName: "MUSIC INSTRUMENTAL",
    positionName: "Music Captain",
    companyName: "High School Orchestran",
    universityId: 8,
  },
  {
    facultName: "MUSIC INSTRUMENTAL",
    positionName: "Assistant Concertmaster",
    companyName: "School Orchestra",
    universityId: 8,
  },
  {
    facultName: "MUSIC VOCAL",
    positionName: "Tenor in 'Grammar Phones'",
    companyName: "Senior A Cappella Group",
    universityId: 8,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Cross Country Captain",
    companyName: "Cross Country",
    universityId: 8,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Basketball Player",
    companyName: "Power Forward in First/Second Squad",
    universityId: 8,
  },
  {
    facultName: "ATHLETICS - JV / VARSITY",
    positionName: "Championship School Representative",
    companyName: "Track and field / Sprints /Middle Distance",
    universityId: 8,
  },
  {
    facultName: "FOREIGN EXCHANGE",
    positionName: "Participant",
    companyName: "Paris/Sydney",
    universityId: 8,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Member",
    companyName: "Debating A Team / Mooting Team (High School)",
    universityId: 8,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Violinist",
    companyName: "Australian Chamber Orchestra Music Education Program",
    universityId: 8,
  },
  {
    facultName: "THEATRE / DRAMA",
    positionName: "Member",
    companyName: "Benvinda Drama Group",
    universityId: 11,
  },
  {
    facultName: "THEATRE / DRAMA",
    positionName: "Connections",
    companyName: "Royal National Theatre of London",
    universityId: 11,
  },
  {
    facultName: "THEATRE / DRAMA",
    positionName: "Member",
    companyName: "Musical Theater Group",
    universityId: 11,
  },
  {
    facultName: "SOCIAL JUSTICE",
    positionName: "President and Co-founder",
    companyName: "Coletivo Maria Quitéria",
    universityId: 11,
  },
  {
    facultName: "CULTURAL",
    positionName: "Participant",
    companyName: "Brazilian Leadership Bootcamp",
    universityId: 11,
  },
  {
    facultName: "DEBATE / SPEECH",
    positionName: "Delegate, Secretary, and Chair",
    companyName: "Model UN",
    universityId: 11,
  },
  {
    facultName: "STUDENT GOVT. / POLITICS",
    positionName: "Senior Year Representative",
    companyName: "Student Council",
    universityId: 11,
  },
  {
    facultName: "STUDENT GOVT. / POLITICS",
    positionName: "Founder and Spokeswoman",
    companyName: "Political Commission",
    universityId: 11,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Charity Outreach",
    companyName: "Fraternity Experience Program",
    universityId: 11,
  },
  {
    facultName: "COMMUNITY SERVICE",
    positionName: "Volunteer",
    companyName: "Association of Hospital das Clínicas",
    universityId: 11,
  },
];
module.exports = {
  UniversityTable,
  TaskTable,
  testUserExample,
  emails,
  successMessages
};
