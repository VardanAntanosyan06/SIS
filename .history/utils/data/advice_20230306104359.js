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
  },  {
    title: "Show your personality in the personal statement",
    description:
      " The personal statement is your chance to show the admissions committee who you are and why you're a good fit for Harvard. Make sure to highlight your unique qualities and experiences, and be honest and authentic in your writing.",
    univeristyId: 1,
  },  {
    title: "Seek guidance from teachers and counselors: Ask your teachers and counselor to write a recommendation letter",
    description:
      "they can provide valuable insight into your abilities and character",
    univeristyId: 1,
  },  {
    title: "Prepare for the interview",
    description:
      "If you are invited, it's an opportunity to showcase your qualifications in person. It is important to prepare for the interview by thinking about your experiences and how they align with Harvard's values and mission",
    univeristyId: 1,
  },  {
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
];


module.exports = {
    advice
}