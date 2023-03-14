const notableAlumni = [
  {
    name:"John D. Rockefeller",
    title:
      "American industrialist and philanthropist who graduated from Harvard in 1876",
    description:
      "John D. Rockefeller was an American industrialist and philanthropist who graduated from Harvard in 1876. He is considered one of the wealthiest Americans in history, and his philanthropy significantly impacted education, public health, and scientific research.",
    img: "http://drive.google.com/uc?export=view&id=1AJqxwO9Odsj8mpZs73m_4k8mXwGfiNUA",
    univeristyId: 1,
  },
  {
    name:"Theodore Roosevelt",
    title:
      "American industrialist and philanthropist who graduated from Harvard in 1876",
    description:
      "Theodore Roosevelt, the 26th President of the United States, graduated from Harvard in 1880. He was the youngest President in US history and served two terms in office from 1901 to 1909. He is known for his progressive policies, including creating the Panama Canal and establishing the National Park System.",
    img: "http://drive.google.com/uc?export=view&id=1lvm6FdrtDNHFjH5nZkL07Yv_7xpZKroa",
    univeristyId: 1,
  },
  {
    name:"Franklin D. Roosevelt",
    title: "the 32nd President of the United States",
    description:
      "Franklin D. Roosevelt, the 32nd President of the United States, graduated from Harvard in 1903. He served as President from 1933 to 1945 and was the only President in history to be elected to four terms in office. He is known for his leadership during the Great Depression and World War II",
    img: "http://drive.google.com/uc?export=view&id=1Y5V-Pmyv19jQvTJJvfdd3G3BTyYYna-l",
    univeristyId: 1,
  },
  { 
    name:"John F. Kennedy",
    title: "the 35th President of the United States",
    description:
      "John F. Kennedy, the 35th President of the United States, graduated from Harvard in 1940. He served as President from 1961 to 1963 and is known for his leadership during the Cold War and the Civil Rights Movement.",
    img: "http://drive.google.com/uc?export=view&id=1ntAZXB5nU5-1uUoO9o9-f227gVBMa0rR",
    univeristyId: 1,
  },
  {
    name:"Bill Gates",
    title: "the co-founder of Microsoft",
    description:
      "Bill Gates, the co-founder of Microsoft and one of the wealthiest people in the world, dropped out of Harvard in 1975. He is known for his philanthropy through the Bill and Melinda Gates Foundation, which focuses on global health, education, and poverty.",
    img: "http://drive.google.com/uc?export=view&id=1sRhgypYaJssOdZ31-ZY_iEGhlwWvXedU",
    univeristyId: 1,
  },
  {
    name:"Mark Zuckerberg",
    title: "the co-founder and CEO of Facebook",
    description: "Mark Zuckerberg, the co-founder and CEO of Facebook, graduated from Harvard in 2006. He is one of the youngest billionaires in the world and has been influential in the development and growth of social media.",
    img: "http://drive.google.com/uc?export=view&id=1WD8MXN_FP9rxftt0F_FlyVSdxrKwRJZ8",
    univeristyId: 1,
  },
  {
    name:"Matt Damon",
    title: "an actor, screenwriter, and producer",
    description: "Matt Damon, an actor, screenwriter, and producer, graduated from Harvard in 1992. He is known for his roles in films such as Good Will Hunting, The Bourne Identity, and The Martian.",
    img: "http://drive.google.com/uc?export=view&id=1FJl7LA16nwysASEbFmWf1H7oKJsZbL5a",
    univeristyId: 1,
  },
  {
    name:"Conan O'Brien",
    title: "a television host, comedian, and writer",
    description: "Conan O'Brien is a television host, comedian, and writer, who graduated from Harvard in 1985. He is known for his work as the host of Late Night with Conan O'Brien and The Tonight Show.",
    img: "http://drive.google.com/uc?export=view&id=138YDnMmIXfBZubtmP94asCk3SSa0v8GN",
    univeristyId: 1,
  },
  {
    name:"Natalie Portman",
    title: "an actress and filmmaker",
    description: "Natalie Portman, an actress and filmmaker, graduated from Harvard in 2003. She is known for her work as a producer and director and her roles in films such as The Professional, Black Swan, and Thor.",
    img: "http://drive.google.com/uc?export=view&id=1io__3CzGTQ4fng1Y0xhmtpi23X9YjDgx",
    univeristyId: 1,
  },
  {
    name:"Bill Clinton",
    title: "the 42nd President of the United States",
    description: "Bill Clinton, the 42nd President of the United States, graduated from Yale Law School in 1973. He served as President from 1993 to 2001 and is known for his efforts to reform healthcare, reduce crime, and improve the economy.",
    img: "http://drive.google.com/uc?export=view&id=1IGcezU5e0k96KR0CGGU-41okKmH_GMzK",
    univeristyId: 2,
  },
  {
    name:"George H.W. Bush",
    title: "the 41st President of the United States",
    description: "George H.W. Bush, the 41st President of the United States, graduated from Yale in 1948. He served as President from 1989 to 1993 and is known for his leadership during the end of the Cold War and the Gulf War.",
    img: "http://drive.google.com/uc?export=view&id=1ucU2b3vIAC-RJ1tJn7y78BA0naClcdU1",
    univeristyId: 2,
  },  {
    name:"George W. Bush",
    title: "the 43rd President of the United States",
    description: "George W. Bush, the 43rd President of the United States, graduated from Yale in 1968. He served as President from 2001 to 2009 and is known for his leadership during the War on Terror and the Iraq War",
    img: "http://drive.google.com/uc?export=view&id=1uDYa2p3N7yg3rhGuXccElDk1WlQVBGCU",
    univeristyId: 2,
  },  {
    name:"Meryl Streep",
    title: "an actress",
    description: "Meryl Streep, an actress, graduated from Yale School of Drama in 1975. She is considered one of the greatest actresses of her generation and has received numerous awards and accolades for her performances in films such as The Devil Wears Prada, Doubt, and August: Osage County.",
    img: "http://drive.google.com/uc?export=view&id=1Fm91M8M0AO05_5DCI3gUTsIEtc7yDRUy",
    univeristyId: 2,
  },  {
    name:"Jodie Foster",
    title: "an actress, director, and producer",
    description: "Jodie Foster is an actress, director, and producer who graduated from Yale in 1985. She is known for her roles in films such as Taxi Driver, The Accused, and The Silence of the Lambs and also for her work as a director and producer.",
    img: "http://drive.google.com/uc?export=view&id=1Gz5rzDV2K4Yyg682khqRrDVTP_IIO58i",
    univeristyId: 2,
  },  {
    name:"Nathan Myhrvold",
    title: "inventor, entrepreneur, author, and former chief technology officer of Microsoft",
    description: "Nathan Myhrvold, inventor, entrepreneur, author, and former chief technology officer of Microsoft. He graduated from Yale College in 1980 and received his Ph.D. from Princeton University",
    img: "http://drive.google.com/uc?export=view&id=1jy8CDAzKjBHkutsNN006IRJn54znIoIO",
    univeristyId: 2,
  },
  {
    name:"Paul Newman",
    title: "an actor, film director, and philanthropist",
    description: "Paul Newman, an actor, film director, and philanthropist graduated from Yale in 1949. He is known for his roles in films such as The Hustler, Cool Hand Luke, Butch Cassidy, and the Sundance Kid.",
    img: "http://drive.google.com/uc?export=view&id=1rrCDqzAAaMoW__vxxwTbQ2xsVovMofo1",
    univeristyId: 2,
  } ,
  {
    name:"Samuel Morse",
    title: "the inventor of the Morse code and the telegraph",
    description: "Samuel Morse, the inventor of the Morse code and the telegraph, graduated from Yale in 1810. He is also a painter who studied art at Yale.",
    img: "http://drive.google.com/uc?export=view&id=1VfyCZtOHYoLVtYBPOSKP698rYAZ04JFR",
    univeristyId: 2,
  },
  {
    name:"A. Bartlett Giamatti",
    title: "former President of Yale University",
    description: "A. Bartlett Giamatti, former President of Yale University and commissioner of Major League Baseball, graduated from Yale in 1960.",
    img: "http://drive.google.com/uc?export=view&id=1j_lO7rj679sSln4grOsyt3BThwdr0VQI",
    univeristyId: 2,
  },
  {
    name:"Hillary Clinton",
    title: "the 67th United States Secretary of State",
    description: "Hillary Clinton, the 67th United States Secretary of State, a senator of New York, and the 2016 Democratic Presidential nominee graduated from Yale Law School in 1973.",
    img: "http://drive.google.com/uc?export=view&id=14o2D-lWEFfFiwbkjxNNLfeyI3eDV0mzx",
    univeristyId: 2,
  },  {
    name:"Woodrow Wilson",
    title: "the 28th President of the United States",
    description: "Woodrow Wilson, the 28th President of the United States, graduated from Princeton in 1879 with a Ph.D. in political science. He served as the President of Princeton University from 1902 to 1910 before being elected President of the United States in 1912.",
    img: "http://drive.google.com/uc?export=view&id=1Gft77rISYa9Vggw_aFoWWhZxwLOSxodj",
    univeristyId: 3,
  }, {
    name:"James Madison",
    title: "the 4th President of the United States",
    description: "attended Princeton but did not graduate. He played a crucial role in drafting the United States Constitution and was one of the prominent architects of the American political system.",
    img: "http://drive.google.com/uc?export=view&id=1FRC_wfIlFPKwCp8KGMGNyps6taTJ8Y-h",
    univeristyId: 3,
  }, {
    name:"Jeff Bezos",
    title: "the founder and CEO of Amazon",
    description: "Jeff Bezos, the founder and CEO of Amazon, graduated from Princeton in 1986 with a degree in electrical engineering and computer science. He went on to found Amazon, which has become one of the world's largest and most successful companies.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"Alan Turing",
    title: "the mathematician and computer scientist",
    description: "Alan Turing, the mathematician and computer scientist widely considered the father of modern computing, attended Princeton as a graduate student but did not graduate. He made significant contributions to the field of theoretical computer science, including the development of the Turing machine and the concept of the Universal Turing Machine.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"Toni Morrison",
    title: "the Pulitzer Prize-winning author",
    description: "Toni Morrison, the Pulitzer Prize-winning author, graduated from Princeton in 1957 with a degree in English. She is widely considered one of the most influential American authors of the 20th century and has won numerous awards for her work, including the Nobel Prize in Literature in 1993.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  }, {
    name:"",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 3,
  },

]

module.exports = {
  notableAlumni
}