export const siteConfig = {
  name: "Francesco Pusceddu",
  title: "Junior Developer · Appassionato di AI",
  greeting: "Ciao! 👋",
  im: "Sono",
  navbar: {
    About: "Chi Sono",
    Projects: "Progetti",
    Experience: "Esperienza",
    Education: "Istruzione",
  },
  description:
    "Portfolio di Francesco Pusceddu — sviluppo web full-stack e applicazioni di Intelligenza Artificiale.",
  accentColor: "#64FFDA",

  social: {
    email: "kecco.pusc@gmail.com",
    linkedin: "https://www.linkedin.com/in/francesco-pusceddu-353673354/",
    twitter: "",
    github: "https://github.com/Francesco0603",
  },

  aboutMe:
    "Sono uno sviluppatore junior con Laurea Triennale in Ingegneria Gestionale e una forte passione per lo sviluppo web full-stack e l’Intelligenza Artificiale. Progetto soluzioni semplici, utili e scalabili, con attenzione sia alla logica che all’esperienza utente. Attualmente sto approfondendo React, Node.js e applicazioni di ML in Python.",

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
        "Classificazione del sentiment di recensioni testuali in Python (scikit-learn), con pipeline di preprocessing e report dei risultati.",
      link: "https://github.com/Francesco0603/ai-sentiment-analyzer",
      skills: ["Python", "scikit-learn", "Pandas"],
    },
    {
      name: "Task Manager Web App",
      description:
        "To-do app responsive con React (frontend) e Node/Express (backend). Gestione task, filtri e persistenza.",
      link: "https://github.com/Francesco0603/todo-list-react",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Data Dashboard",
      description:
        "Dashboard HTML/CSS/JS per visualizzare KPI e grafici interattivi da dataset JSON.",
      link: "https://github.com/Francesco0603/data-dashboard-html-css",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ],

  experience: [
    {
      company: "Progetti Accademici & Personali",
      title: "Junior Full-Stack / AI Developer",
      dateRange: "2023 – Presente",
      bullets: [
        "Sviluppo di web app con stack React + Node.js e integrazione database (MongoDB/SQL).",
        "Prototipi di Machine Learning in Python per analisi del testo e classificazione.",
        "Collaborazione e versionamento del codice su GitHub (issue, PR, documentazione).",
      ],
    },
  ],

  education: [
    {
      school: "Politecnico di Torino",
      degree:
        "Laurea Magistrale in Ingegneria Informatica – Artificial Intelligence and Data Analytics",
      dateRange: "2025 – Presente",
      achievements: [
        "Iscritto alla LM con focus su AI, data science e sistemi intelligenti.",
        "Primi esami completati con media 28/30.",
        "Approfondimento di Deep Learning, NLP e applicazioni data-driven.",
      ],
    },
    {
      school: "Politecnico di Torino",
      degree: "Laurea Triennale in Ingegneria Gestionale",
      dateRange: "2021 – 2025",
      achievements: [
        "Corsi in sistemi informativi, programmazione, analytics e project management.",
        "Progetti di sviluppo web e machine learning introduttivo.",
        "Progetti personali su GitHub a dimostrazione di coding e data analysis.",
      ],
    },
  ],

  profileImage: "/images/francesco.jpg",

};
