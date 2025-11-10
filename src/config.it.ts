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
    CV: "Curriculum Vitae",
  },
  description:
    "Portfolio di Francesco Pusceddu — sviluppo web full-stack e applicazioni di Intelligenza Artificiale.",
  accentColor: "#64ffceff",

  social: {
    email: "francescopusceddu25@gmail.com",
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
      name: "SocialEntertainment",
      description:
        "Applicazione Python per l’analisi delle interazioni sui social network. Realizzata con Flet e basata su architettura MVC, integra algoritmi ricorsivi e la modellazione di grafi tramite NetworkX per identificare cluster di utenti e schemi comportamentali. L’app esegue query SQL dinamiche su MariaDB per calcolare statistiche avanzate e ottimizzare il filtraggio dei dati.",
      link: "https://github.com/TdP-prove-finali/PuscedduFrancesco.git",
      skills: ["Python", "Flet", "NetworkX", "MariaDB", "SQL", "Algoritmi"],
    },
    {
      name: "Indovina la Frase",
      description:
        "Gioco web interattivo sviluppato con React (frontend) e Node.js/Express (backend). I giocatori devono indovinare frasi nascoste attraverso un’interfaccia dinamica che comunica con un’API REST. Lo stato di gioco, i punteggi e la logica sono gestiti lato server con persistenza su database SQLite.",
      link: "https://github.com/polito-aw1-2025-exams/esame3-indovina-frase-Francesco0603.git",
      skills: ["React", "Node.js", "Express", "SQLite"],
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

  cv: {
    enabled: true,
    file: "/Francesco_Pusceddu_Curriculum_Vitae.pdf",  
    intro: "Breve panoramica delle competenze e delle esperienze principali.",
    highlights: [
      "Sviluppatore app Python (Flet + NetworkX) per analisi social.",
      "Esperienza in React/Node.js (API REST, SQLite/MariaDB).",
      "Focus su ottimizzazione query, MVC, algoritmi ricorsivi.",
    ],
    // link a versione web
    //webPage: "/cv"     
  },

  profileImage: "/images/francesco.jpg",

};
