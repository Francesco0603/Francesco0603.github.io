import About from "./components/About.astro";

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
  },
  description:
    "Portfolio of Francesco Pusceddu — full-stack web development and Artificial Intelligence applications.",
  accentColor: "#64FFDA",

  social: {
    email: "kecco.pusc@gmail.com",
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
      name: "AI Sentiment Analyzer",
      description:
        "Python-based sentiment classification of textual reviews using scikit-learn. Includes preprocessing pipeline and results reporting.",
      link: "https://github.com/Francesco0603/ai-sentiment-analyzer",
      skills: ["Python", "scikit-learn", "Pandas"],
    },
    {
      name: "Task Manager Web App",
      description:
        "Responsive to-do web app with React (frontend) and Node/Express (backend). Task management, filters, and persistence.",
      link: "https://github.com/Francesco0603/todo-list-react",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Data Dashboard",
      description:
        "HTML/CSS/JS dashboard displaying KPIs and interactive charts from JSON datasets.",
      link: "https://github.com/Francesco0603/data-dashboard-html-css",
      skills: ["HTML", "CSS", "JavaScript"],
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

  profileImage: "/images/francesco.jpg",

};
