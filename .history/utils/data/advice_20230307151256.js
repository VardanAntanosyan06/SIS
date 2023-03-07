const { Model } = require("sequelize");

const advice = [
  {
    title: "Start early",
    description:
      "The admissions process at Harvard is highly competitive, so it's essential to start preparing early. This means taking challenging courses, getting involved in extracurricular activities, and working on your personal statement well in advance of the application deadline.",
    univeristyId: 1,
  },
  {
    title: "Maintain a strong academic record",
    description:
      "Harvard is looking for students who have excelled academically, so it's crucial to maintain a strong GPA and take challenging courses throughout high school. Additionally, taking AP, IB, or other honors-level classes is recommended.",
    univeristyId: 1,
  },
  {
    title: "Get involved in extracurricular activities",
    description:
      "Harvard values well-rounded students who have demonstrated leadership and a passion for something outside the classroom. So, getting involved in extracurricular activities that you are passionate about and having a leadership role is vital.",
    univeristyId: 1,
  },
  {
    title: "Show your personality in the personal statement",
    description:
      " The personal statement is your chance to show the admissions committee who you are and why you're a good fit for Harvard. Make sure to highlight your unique qualities and experiences, and be honest and authentic in your writing.",
    univeristyId: 1,
  },
  {
    title:
      "Seek guidance from teachers and counselors: Ask your teachers and counselor to write a recommendation letter",
    description:
      "they can provide valuable insight into your abilities and character",
    univeristyId: 1,
  },
  {
    title: "Prepare for the interview",
    description:
      "If you are invited, it's an opportunity to showcase your qualifications in person. It is important to prepare for the interview by thinking about your experiences and how they align with Harvard's values and mission",
    univeristyId: 1,
  },
  {
    title: "Make the best use of SIS Progress",
    description:
      "The world's first AI-empowered Edtech startup that will advise you on precisely what you need to plan and possess before applying to U.S. universities across five core indices: Academics, Standardized Tests, Extracurriculars, Career/School Choices, and Personal Development. It will also track your progress toward admission by relying on previous successful university applicants' data.",
    univeristyId: 1,
  },
  {
    title: "Be realistic",
    description:
      "It is critical to understand that the admissions process is highly competitive, and not everyone who applies will be admitted. If you are not accepted, don't take it personally and use it as an opportunity to apply to other great universities.",
    univeristyId: 1,
  },
  {
    title: "Be authentic",
    description:
      "Admissions officers are looking for students who are a good fit for Princeton, so it's important to be yourself in your application. Be honest and authentic in your essays and interviews.",
    univeristyId: 2,
  },
  {
    title: "Show your interest",
    description:
      "Princeton values students who are genuinely interested in the university. Make sure to research the university and its programs, and show how you would fit in and contribute to the Princeton community.",
    univeristyId: 2,
  },
  {
    title: "Highlight your achievements",
    description:
      "Princeton is looking for well-rounded students who have excelled academically, as well as in extracurricular activities and community service. Be sure to highlight your achievements in your application.",
    univeristyId: 2,
  },
  {
    title: "Get to know your recommenders",
    description:
      "Princeton requires two letters of recommendation as part of the application process, so it's important to choose recommenders who know you well and can speak to your qualifications. Take the time to get to know your recommenders and provide them with the information they need to write strong letters of recommendation.",
    univeristyId: 2,
  },
  {
    title: "Proofread",
    description:
      "Before you submit your application, make sure to proofread all of your materials. Typos and grammatical errors can make a bad impression on admissions officers.",
    univeristyId: 2,
  },
  {
    title: "Be prepared for an interview",
    description:
      "Princeton conducts interviews as part of the application process, so be prepared to answer questions about yourself, your interests, and your qualifications.",
    univeristyId: 2,
  },
  {
    title: "Apply for financial aid",
    description:
      "Princeton is committed to making a Princeton education affordable for all students, so if you need financial aid, make sure to complete the appropriate forms and submit them along with your application.",
    univeristyId: 2,
  },
  {
    title: "Demonstrate your individuality",
    description:
      "Princeton places a strong emphasis on diversity and individuality, so make sure to showcase your unique personality in your application. Highlight your interests, passions, and how they have influenced your development and character.",
    univeristyId: 2,
  },
  {
    title: "Make the best use of SIS Progress",
    description:
      "The world's first AI-empowered Edtech startup that will advise you on precisely what you need to plan and possess before applying to U.S. universities across five core indices: Academics, Standardized Tests, Extracurriculars, Career/School Choices, and Personal Development. It will also track your progress toward admission by relying on previous successful university applicants' data.",
    univeristyId: 2,
  },
  {
    title: "Start early",
    description: "The application process for Princeton is highly competitive, so it's important to start preparing early. Make sure you have a clear understanding of the application requirements and deadlines.",
    univeristyId: 3,
  },
  {
    title: "Be authentic",
    description: "Admissions officers are looking for students who are a good fit for Princeton, so it's important to be yourself in your application. Be honest and authentic in your essays and interviews.",
    univeristyId: 3,
  },
  {
    title: "Show your interest",
    description: "Princeton values students who are genuinely interested in the university. Make sure to research the university and its programs, and show how you would fit in and contribute to the Princeton community.",
    univeristyId: 3,
  },
  {
    title: "Highlight your achievements",
    description: "Princeton is looking for well-rounded students who have excelled academically, as well as in extracurricular activities and community service. Be sure to highlight your achievements in your application.",
    univeristyId: 3,
  },
  {
    title: "Get to know your recommenders",
    description: "",
    univeristyId: 3,
  },
  {
    title: "",
    description: "",
    univeristyId: 3,
  },
  {
    title: "",
    description: "",
    univeristyId: 3,
  },
  {
    title: "",
    description: "",
    univeristyId: 3,
  },
  {
    title: "",
    description: "",
    univeristyId: 3,
  },
  {
    title: "",
    description: "",
    univeristyId: 3,
  },
  {
    title: "",
    description: "",
    univeristyId: 3,
  },
];

module.exports = {
  advice,
};
