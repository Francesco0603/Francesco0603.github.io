import About from "./components/About.astro";
import CV from "./components/CV.astro";

export const siteConfig = {
  name: "Francesco Pusceddu",
  title: "Junior Developer · AI Enthusiast",
  greeting: "Hello! 👋",
  im: "I am",
  navbar: {
    About: "About Me",
    Projects: "Projects",
    Experience: "Experience",
    Education: "Education",
    CV: "Curriculum Vitae",
  },
  description:
    "Portfolio of Francesco Pusceddu — full-stack web development and Artificial Intelligence applications.",
  accentColor: "#64FFDA",

  social: {
    email: "francescopusceddu25@gmail.com",
    linkedin: "https://www.linkedin.com/in/francesco-pusceddu-353673354/",
    twitter: "",
    github: "https://github.com/Francesco0603",
  },

  aboutMe:
    "I am a young developer with a Bachelor's degree in Management Engineering and a strong passion for full-stack web development and Artificial Intelligence. I enjoy designing simple, useful, and scalable solutions, paying attention both to logic and user experience. I am currently deepening my knowledge of React, Node.js, and ML applications in Python.",

  skills: [
    "JavaScript", "React", "Node.js", "Python",
    "HTML5", "CSS3", "Git", "GitHub",
    "SQL", "MongoDB",
    "Java", "C", "C++", "Assembly",
  ],

  projects: [
    {
      name: "SocialEntertainment",
      description:
        "Python application for the analysis of social network interactions. Built with Flet and following an MVC architecture, it integrates recursive algorithms and NetworkX graph modeling to identify user clusters and behavioral patterns. The app performs dynamic SQL queries through MariaDB to compute advanced statistics and optimize data filtering.",
      link: "https://github.com/TdP-prove-finali/PuscedduFrancesco.git",
      skills: ["Python", "Flet", "NetworkX", "MariaDB", "SQL", "Algorithms"],
    },
    {
      name: "Guess the Sentence",
      description:
        "Interactive web game developed with React (frontend) and Node.js/Express (backend). Players try to guess hidden sentences through a dynamic interface that communicates with a REST API. Game states, scores, and logic are managed server-side with SQLite persistence.",
      link: "https://github.com/polito-aw1-2025-exams/esame3-indovina-frase-Francesco0603.git",
      skills: ["React", "Node.js", "Express", "SQLite"],
    },

  ],

  experience: [
    {
      company: "Academic & Personal Projects",
      title: "Junior Full-Stack / AI Developer",
      dateRange: "2023 – Present",
      bullets: [
        "Developing web applications using React + Node.js with MongoDB/SQL.",
        "Creating ML prototypes in Python for text analysis and classification.",
        "Collaborating and versioning code on GitHub (issues, PRs, docs).",
      ],
    },
  ],

  education: [
    {
      school: "Politecnico di Torino",
      degree:
        "Master’s Degree in Computer Engineering – Artificial Intelligence and Data Analytics",
      dateRange: "2025 – Present",
      achievements: [
        "Currently pursuing a Master’s degree focused on AI, data science, and intelligent systems.",
        "Completed first exams with a GPA equivalent of 28/30.",
        "Expanding knowledge in Deep Learning, NLP, and data-driven applications.",
      ],
    },
    {
      school: "Politecnico di Torino",
      degree: "Bachelor’s Degree in Management Engineering",
      dateRange: "2021 – 2025",
      achievements: [
        "Courses in information systems, programming, analytics, and project management.",
        "Projects in web development and introductory machine learning.",
        "Personal GitHub projects demonstrating applied coding and data analysis.",
      ],
    },
  ],

  cv: {
    enabled: true,
    file: "/Francesco_Pusceddu_Curriculum_Vitae.pdf",  
    intro: "Brief overview of key skills and experiences.",
    highlights: [
      "Developer of a Python app (Flet + NetworkX) for social network analysis.",
      "Experience with React/Node.js (REST APIs, SQLite/MariaDB).",
      "Focus on query optimization, MVC architecture, recursive algorithms.",
    ],
    // link a versione web
    //webPage: "/cv"   
  },

  profileImage: "/images/francesco.jpg",

};
