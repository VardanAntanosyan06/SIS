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
    description: "Princeton requires two letters of recommendation as part of the application process, so it's important to choose recommenders who know you well and can speak to your qualifications. Take the time to get to know your recommenders and provide them with the information they need to write strong letters of recommendation.",
    univeristyId: 3,
  },
  {
    title: "Proofread",
    description: "Before you submit your application, make sure to proofread all of your materials. Typos and grammatical errors can make a bad impression on admissions officers.",
    univeristyId: 3,
  },
  {
    title: "Be prepared for an interview",
    description: "Princeton conducts interviews as part of the application process, so be prepared to answer questions about yourself, your interests, and your qualifications.",
    univeristyId: 3,
  },
  {
    title: "Apply for financial aid",
    description: "Princeton is committed to making a Princeton education affordable for all students, so if you need financial aid, make sure to complete the appropriate forms and submit them along with your application.",
    univeristyId: 3,
  },
  {
    title: "Demonstrate your individuality",
    description: "Princeton places a strong emphasis on diversity and individuality, so make sure to showcase your unique personality in your application. Highlight your interests, passions, and how they have influenced your development and character.",
    univeristyId: 3,
  },
  {
    title: "Make the best use of SIS Progress",
    description: "The world's first AI-empowered Edtech startup that will advise you on precisely what you need to plan and possess before applying to U.S. universities across five core indices: Academics, Standardized Tests, Extracurriculars, Career/School Choices, and Personal Development. It will also track your progress toward admission by relying on previous successful university applicants' data.",
    univeristyId: 3,
  },
  {
    title: "Start preparing early",
    description: "Stanford is one of the most competitive universities in the United States, with an acceptance rate of around 4% for the class of 2026. It is essential to start preparing for your application as early as possible.",
    univeristyId: 4,
  },
  {
    title: "Get good grades",
    description: "Stanford is looking for academically talented students with solid academic records. It would help if you had a high GPA and a challenging course load to be competitive.",
    univeristyId: 4,
  },{
    title: "Take standardized tests",
    description: "Stanford requires either the SAT or ACT, and it is recommended that you take them early in your high school career. Additionally, you should take the required subject tests for your intended major.",
    univeristyId: 4,
  },{
    title: "Get involved in extracurricular activities",
    description: "Stanford is looking for well-rounded students who have demonstrated leadership, creativity, and passion outside the classroom. Get engaged in activities you are passionate about, and take on leadership roles whenever possible.",
    univeristyId: 4,
  },{
    title: "Be authentic in your application",
    description: "Stanford values authenticity and individuality. Be honest and genuine in your application, highlighting your unique characteristics and experiences.",
    univeristyId: 4,
  },{
    title: "Research the university",
    description: "Stanford is a large and complex university with a wide range of programs and opportunities. Research the university's programs and resources, and highlight how you would utilize those resources in your application.",
    univeristyId: 4,
  },{
    title: "Make the best use of SIS Progress",
    description: "The world's first AI-empowered Edtech startup that will advise you on precisely what you need to plan and possess before applying to U.S. universities across five core indices: Academics, Standardized Tests, Extracurriculars, Career/School Choices, and Personal Development. It will also track your progress toward admission by relying on previous successful university applicants' data.",
    univeristyId: 4,
  },{
    title: "Show your interest",
    description: "Stanford is looking for students who are genuinely interested in attending the university. Make sure to visit the campus, attend events, and reach out to current students or admissions representatives to express your interest.",
    univeristyId: 4,
  },{
    title: "Proofread",
    description: "Make sure to proofread your application and essays and have someone else read them. Your application must be error-free, clear, and easy to read.",
    univeristyId: 4,
  },{
    title: "Submit on time",
    description: "Make sure to submit your application and all required materials by the deadline. Late applications will not be considered.",
    univeristyId: 4,
  },{
    title: "Tailor your application to JHU",
    description: "JHU is a research-focused university with a strong emphasis on the sciences and medicine. Make sure to highlight your research experience and interests in your application and explain how they align with JHU's programs and resources.",
    univeristyId: 5,
  },{
    title: "Show your passion",
    description: "JHU is looking for students who are passionate about their chosen field of study. Make sure to highlight your specific interests and goals in your application and explain how JHU's programs and resources will help you achieve them.",
    univeristyId: 5,
  },{
    title: "Highlight your unique experiences",
    description: "JHU values diversity and individuality. Make sure to highlight any unique experiences or perspectives you can bring to the university, whether they are related to your background, interests, or achievements.",
    univeristyId: 5,
  },{
    title: "Get in touch with current students or alums",
    description: "JHU is a research-focused university, and it is always beneficial to hear from current students or alums about their experiences. Reach out to them and ask about their experiences, challenges, and what they wish they had known when applying to JHU.",
    univeristyId: 5,
  },{
    title: "Don't hesitate to ask for help",
    description: "If you have any questions or concerns about the application process, don't hesitate to reach out to JHU's admissions office or a college counselor. They are there to help you and provide guidance throughout the process.",
    univeristyId: 5,
  },{
    title: "Show your fit",
    description: "JHU is a large and complex university with many programs and resources. Research the university's programs and resources in order to demonstrate how you would take advantage of them.",
    univeristyId: 5,
  },{
    title: "Be Specific in your Essays",
    description: "JHU's essay prompts are open-ended, and you should take advantage of them. Be specific in describing your passions and goals, and illustrate them with examples. Make sure to explain how JHU can help you achieve them.",
    univeristyId: 5,
  },{
    title: "Make the best use of SIS Progress",
    description: "The world's first AI-empowered Edtech startup to advise you on precisely what you need to plan and possess before applying to U.S. universities. It will also track your progress toward admission by relying on previous successful university applicants' data.",
    univeristyId: 5,
  },{
    title: "Showcase your achievements",
    description: "JHU is looking for students who have achieved something significant, whether it be in academics, research, extracurricular activities, or community service. Highlight your achievements, and explain how they have prepared you for the rigors of a JHU education.",
    univeristyId: 5,
  },{
    title: "Start early",
    description: "Begin the application process well in advance of the deadline to ensure you have enough time to gather all the necessary materials and prepare your application thoroughly.",
    univeristyId: 6,
  },{
    title: "Research the university",
    description: "Learn as much as possible about Duke University and its programs, and make sure you understand how your interests and goals align with the university's mission and values.",
    univeristyId: 6,
  },{
    title: "Tailor your application",
    description: "Customize your application to Duke by highlighting how your interests and experiences align with the university's programs and opportunities. Show that you have researched and have a genuine interest in attending Duke.",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },{
    title: "",
    description: "",
    univeristyId: 6,
  },
];

module.exports = {
  advice,
};
