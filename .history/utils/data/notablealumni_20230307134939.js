const notableAlumni = [
  {
    name: "John D. Rockefeller",
    title:
      "American industrialist and philanthropist who graduated from Harvard in 1876",
    description:
      "John D. Rockefeller was an American industrialist and philanthropist who graduated from Harvard in 1876. He is considered one of the wealthiest Americans in history, and his philanthropy significantly impacted education, public health, and scientific research.",
    img: "http://drive.google.com/uc?export=view&id=1AJqxwO9Odsj8mpZs73m_4k8mXwGfiNUA",
    univeristyId: 1,
  },
  {
    name: "Theodore Roosevelt",
    title:
      "American industrialist and philanthropist who graduated from Harvard in 1876",
    description:
      "Theodore Roosevelt, the 26th President of the United States, graduated from Harvard in 1880. He was the youngest President in US history and served two terms in office from 1901 to 1909. He is known for his progressive policies, including creating the Panama Canal and establishing the National Park System.",
    img: "http://drive.google.com/uc?export=view&id=1lvm6FdrtDNHFjH5nZkL07Yv_7xpZKroa",
    univeristyId: 1,
  },
  {
    name: "Franklin D. Roosevelt",
    title: "the 32nd President of the United States",
    description:
      "Franklin D. Roosevelt, the 32nd President of the United States, graduated from Harvard in 1903. He served as President from 1933 to 1945 and was the only President in history to be elected to four terms in office. He is known for his leadership during the Great Depression and World War II",
    img: "http://drive.google.com/uc?export=view&id=1Y5V-Pmyv19jQvTJJvfdd3G3BTyYYna-l",
    univeristyId: 1,
  },
  {
    name: "John F. Kennedy",
    title: "the 35th President of the United States",
    description:
      "John F. Kennedy, the 35th President of the United States, graduated from Harvard in 1940. He served as President from 1961 to 1963 and is known for his leadership during the Cold War and the Civil Rights Movement.",
    img: "http://drive.google.com/uc?export=view&id=1ntAZXB5nU5-1uUoO9o9-f227gVBMa0rR",
    univeristyId: 1,
  },
  {
    name: "Bill Gates",
    title: "the co-founder of Microsoft",
    description:
      "Bill Gates, the co-founder of Microsoft and one of the wealthiest people in the world, dropped out of Harvard in 1975. He is known for his philanthropy through the Bill and Melinda Gates Foundation, which focuses on global health, education, and poverty.",
    img: "http://drive.google.com/uc?export=view&id=1sRhgypYaJssOdZ31-ZY_iEGhlwWvXedU",
    univeristyId: 1,
  },
  {
    name: "Mark Zuckerberg",
    title: "the co-founder and CEO of Facebook",
    description:
      "Mark Zuckerberg, the co-founder and CEO of Facebook, graduated from Harvard in 2006. He is one of the youngest billionaires in the world and has been influential in the development and growth of social media.",
    img: "http://drive.google.com/uc?export=view&id=1WD8MXN_FP9rxftt0F_FlyVSdxrKwRJZ8",
    univeristyId: 1,
  },
  {
    name: "Matt Damon",
    title: "an actor, screenwriter, and producer",
    description:
      "Matt Damon, an actor, screenwriter, and producer, graduated from Harvard in 1992. He is known for his roles in films such as Good Will Hunting, The Bourne Identity, and The Martian.",
    img: "http://drive.google.com/uc?export=view&id=1FJl7LA16nwysASEbFmWf1H7oKJsZbL5a",
    univeristyId: 1,
  },
  {
    name: "Conan O'Brien",
    title: "a television host, comedian, and writer",
    description:
      "Conan O'Brien is a television host, comedian, and writer, who graduated from Harvard in 1985. He is known for his work as the host of Late Night with Conan O'Brien and The Tonight Show.",
    img: "http://drive.google.com/uc?export=view&id=138YDnMmIXfBZubtmP94asCk3SSa0v8GN",
    univeristyId: 1,
  },
  {
    name: "Natalie Portman",
    title: "an actress and filmmaker",
    description:
      "Natalie Portman, an actress and filmmaker, graduated from Harvard in 2003. She is known for her work as a producer and director and her roles in films such as The Professional, Black Swan, and Thor.",
    img: "http://drive.google.com/uc?export=view&id=1io__3CzGTQ4fng1Y0xhmtpi23X9YjDgx",
    univeristyId: 1,
  },
  {
    name: "Bill Clinton",
    title: "the 42nd President of the United States",
    description:
      "Bill Clinton, the 42nd President of the United States, graduated from Yale Law School in 1973. He served as President from 1993 to 2001 and is known for his efforts to reform healthcare, reduce crime, and improve the economy.",
    img: "http://drive.google.com/uc?export=view&id=1IGcezU5e0k96KR0CGGU-41okKmH_GMzK",
    univeristyId: 2,
  },
  {
    name: "George H.W. Bush",
    title: "the 41st President of the United States",
    description:
      "George H.W. Bush, the 41st President of the United States, graduated from Yale in 1948. He served as President from 1989 to 1993 and is known for his leadership during the end of the Cold War and the Gulf War.",
    img: "http://drive.google.com/uc?export=view&id=1ucU2b3vIAC-RJ1tJn7y78BA0naClcdU1",
    univeristyId: 2,
  },
  {
    name: "George W. Bush",
    title: "the 43rd President of the United States",
    description:
      "George W. Bush, the 43rd President of the United States, graduated from Yale in 1968. He served as President from 2001 to 2009 and is known for his leadership during the War on Terror and the Iraq War",
    img: "http://drive.google.com/uc?export=view&id=1uDYa2p3N7yg3rhGuXccElDk1WlQVBGCU",
    univeristyId: 2,
  },
  {
    name: "Meryl Streep",
    title: "an actress",
    description:
      "Meryl Streep, an actress, graduated from Yale School of Drama in 1975. She is considered one of the greatest actresses of her generation and has received numerous awards and accolades for her performances in films such as The Devil Wears Prada, Doubt, and August: Osage County.",
    img: "http://drive.google.com/uc?export=view&id=1Fm91M8M0AO05_5DCI3gUTsIEtc7yDRUy",
    univeristyId: 2,
  },
  {
    name: "Jodie Foster",
    title: "an actress, director, and producer",
    description:
      "Jodie Foster is an actress, director, and producer who graduated from Yale in 1985. She is known for her roles in films such as Taxi Driver, The Accused, and The Silence of the Lambs and also for her work as a director and producer.",
    img: "http://drive.google.com/uc?export=view&id=1Gz5rzDV2K4Yyg682khqRrDVTP_IIO58i",
    univeristyId: 2,
  },
  {
    name: "Nathan Myhrvold",
    title:
      "inventor, entrepreneur, author, and former chief technology officer of Microsoft",
    description:
      "Nathan Myhrvold, inventor, entrepreneur, author, and former chief technology officer of Microsoft. He graduated from Yale College in 1980 and received his Ph.D. from Princeton University",
    img: "http://drive.google.com/uc?export=view&id=1jy8CDAzKjBHkutsNN006IRJn54znIoIO",
    univeristyId: 2,
  },
  {
    name: "Paul Newman",
    title: "an actor, film director, and philanthropist",
    description:
      "Paul Newman, an actor, film director, and philanthropist graduated from Yale in 1949. He is known for his roles in films such as The Hustler, Cool Hand Luke, Butch Cassidy, and the Sundance Kid.",
    img: "http://drive.google.com/uc?export=view&id=1rrCDqzAAaMoW__vxxwTbQ2xsVovMofo1",
    univeristyId: 2,
  },
  {
    name: "Samuel Morse",
    title: "the inventor of the Morse code and the telegraph",
    description:
      "Samuel Morse, the inventor of the Morse code and the telegraph, graduated from Yale in 1810. He is also a painter who studied art at Yale.",
    img: "http://drive.google.com/uc?export=view&id=1VfyCZtOHYoLVtYBPOSKP698rYAZ04JFR",
    univeristyId: 2,
  },
  {
    name: "A. Bartlett Giamatti",
    title: "former President of Yale University",
    description:
      "A. Bartlett Giamatti, former President of Yale University and commissioner of Major League Baseball, graduated from Yale in 1960.",
    img: "http://drive.google.com/uc?export=view&id=1j_lO7rj679sSln4grOsyt3BThwdr0VQI",
    univeristyId: 2,
  },
  {
    name: "Hillary Clinton",
    title: "the 67th United States Secretary of State",
    description:
      "Hillary Clinton, the 67th United States Secretary of State, a senator of New York, and the 2016 Democratic Presidential nominee graduated from Yale Law School in 1973.",
    img: "http://drive.google.com/uc?export=view&id=14o2D-lWEFfFiwbkjxNNLfeyI3eDV0mzx",
    univeristyId: 2,
  },
  {
    name: "Woodrow Wilson",
    title: "the 28th President of the United States",
    description:
      "Woodrow Wilson, the 28th President of the United States, graduated from Princeton in 1879 with a Ph.D. in political science. He served as the President of Princeton University from 1902 to 1910 before being elected President of the United States in 1912.",
    img: "http://drive.google.com/uc?export=view&id=1Gft77rISYa9Vggw_aFoWWhZxwLOSxodj",
    univeristyId: 3,
  },
  {
    name: "James Madison",
    title: "the 4th President of the United States",
    description:
      "attended Princeton but did not graduate. He played a crucial role in drafting the United States Constitution and was one of the prominent architects of the American political system.",
    img: "http://drive.google.com/uc?export=view&id=1FRC_wfIlFPKwCp8KGMGNyps6taTJ8Y-h",
    univeristyId: 3,
  },
  {
    name: "Jeff Bezos",
    title: "the founder and CEO of Amazon",
    description:
      "Jeff Bezos, the founder and CEO of Amazon, graduated from Princeton in 1986 with a degree in electrical engineering and computer science. He went on to found Amazon, which has become one of the world's largest and most successful companies.",
    img: "http://drive.google.com/uc?export=view&id=19Yb2YB7xkZ4sBHIhz8_AuAVp2XXiQE2a",
    univeristyId: 3,
  },
  {
    name: "Alan Turing",
    title: "the mathematician and computer scientist",
    description:
      "Alan Turing, the mathematician and computer scientist widely considered the father of modern computing, attended Princeton as a graduate student but did not graduate. He made significant contributions to the field of theoretical computer science, including the development of the Turing machine and the concept of the Universal Turing Machine.",
    img: "http://drive.google.com/uc?export=view&id=1z3-Qd9pOiIo7uPBKU_TmG9bLpSzBdKeR",
    univeristyId: 3,
  },
  {
    name: "Toni Morrison",
    title: "the Pulitzer Prize-winning author",
    description:
      "Toni Morrison, the Pulitzer Prize-winning author, graduated from Princeton in 1957 with a degree in English. She is widely considered one of the most influential American authors of the 20th century and has won numerous awards for her work, including the Nobel Prize in Literature in 1993.",
    img: "http://drive.google.com/uc?export=view&id=13SabvoK9kE5NPT7DoGFdo5gQzkrRmRjB",
    univeristyId: 3,
  },
  {
    name: "Michelle Obama",
    title: "the former First Lady of the United States",
    description:
      "Michelle Obama, the former First Lady of the United States, graduated from Princeton in 1985 with a degree in sociology. She became a lawyer and advocated for education and women's rights before serving as First Lady during her husband's presidency.",
    img: "http://drive.google.com/uc?export=view&id=10-6odJKEhAaNt91sQxnFZ4-ClXTypuMT",
    univeristyId: 3,
  },
  {
    name: "Sebastian Thrun",
    title: "the founder of Google X",
    description:
      "Sebastian Thrun, the founder of Google X, graduated from Princeton in 1994 with a Ph.D. in computer science. He has made significant contributions to the field of artificial intelligence, including the development of the self-driving car.",
    img: "http://drive.google.com/uc?export=view&id=15Pm4I4PtRPfkhtkh2sa_g5X8x_7GMf1i",
    univeristyId: 3,
  },
  {
    name: "Jimmy Stewart",
    title: "the actor",
    description:
      "Jimmy Stewart, the actor, graduated from Princeton in 1932 with a degree in architecture. He had a successful career in Hollywood, appearing in over 80 films and winning an Academy Award for his role in 'It's a Wonderful Life.'",
    img: "http://drive.google.com/uc?export=view&id=1fVn12fUqxGr-A19KZediHimSJOk1uZwm",
    univeristyId: 3,
  },
  {
    name: "Larry Page and Sergey Brin",https://drive.google.com/file/d/13d4Z0ofFYsW7UDbb_c7awmf_vAFRMBXx/view?usp=sharing
    title: "co-founders of Google",
    description:
      "Larry Page and Sergey Brin: Both co-founders of Google graduated with PhDs in computer science from Stanford in 2004. Their work at the university on the PageRank algorithm, which is the basis for Google's search engine, led to the creation of one of the world's most successful and influential companies.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Reed Hastings",
    title: "The co-founder and CEO of Netflix",
    description:
      "Reed Hastings: The co-founder and CEO of Netflix, earned a master's degree in computer science from Stanford in 1988. He later founded Netflix in 1997, which has revolutionized the way people consume television and movies.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Elon Musk",
    title: "The CEO of SpaceX and Tesla",
    description:
      "Elon Musk: The CEO of SpaceX and Tesla received a Ph.D. in energy physics from Stanford in 2002, but he left the program after two days as he decided to pursue his entrepreneurial ventures. He went on to found Zip2, which was sold to Compaq for almost $300 million, and later founded SpaceX, Tesla, and SolarCity.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Phil Knight",
    title: "Nike's co-founder",
    description:
      "Phil Knight, Nike's co-founder, earned a master's degree in business administration from Stanford in 1962. He co-founded Blue Ribbon Sports, which later became Nike, one of the world's most successful and iconic brands.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Herbert Hoover",
    title: "The 31st President of the United States",
    description:
      "Herbert Hoover: The 31st President of the United States, earned a degree in geology from Stanford in 1895. He had a successful career as a mining engineer before entering politics, serving as President from 1929 to 1933.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Sandra Day O'Connor",
    title: "The first female justice of the United States Supreme Court",
    description:
      "Sandra Day O'Connor: The first female justice of the United States Supreme Court, graduated from Stanford Law School in 1952. She served as a justice from 1981 to 2006 and was known for her moderate and pragmatic approach to interpreting the law.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Sally Ride",
    title: "The first American woman in space",
    description:
      "Sally Ride: The first American woman in space, earned a degree in English and physics from Stanford in 1973. She later joined NASA and flew on the space shuttle Challenger in 1983, becoming the first American woman in space.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "Jerry Yang",
    title: "Co-founder of Yahoo!",
    description: "Jerry Yang: Co-founder of Yahoo!, graduated with a degree in electrical engineering from Stanford in 1995. He co-founded Yahoo! in 1995, quickly becoming one of the world's most popular and successful websites.",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 4,
  },
  {
    name: "",
    title: "",
    description: "",
    img: "http://drive.google.com/uc?export=view&id=",
    univeristyId: 5,
  },
];

module.exports = {
  notableAlumni,
};
