export const siteConfig = {
  name: "Francesco Pusceddu",
  title: "Junior Developer · AI Enthusiast",
  description: "Portfolio di Francesco Pusceddu — sviluppo web (front & back) e applicazioni di Intelligenza Artificiale.",
  accentColor: "#64FFDA", // verde acqua "tech". Puoi provare anche "#9B5DE5" (viola) o "#0EA5E9" (azurro)
  social: {
    email: "kecco.pusc@gmail.com", // se attivi una mail professionale, sostituisci qui
    linkedin: "https://www.linkedin.com/in/francesco-pusceddu-353673354/", // metti l’URL reale appena lo crei/recuperi
    twitter: "", // opzionale
    github: "https://github.com/Francesco0603",
  },

  aboutMe:
    "Sono un giovane sviluppatore con laurea in Ingegneria Gestionale e forte interesse per lo sviluppo web full-stack e l’Intelligenza Artificiale. Mi piace progettare soluzioni semplici, utili e scalabili, curando sia la logica che l’esperienza utente. Attualmente sto approfondendo React/Node.js e applicazioni ML in Python.",

  // Metti prima le tecnologie principali, poi quelle complementari
  skills: [
    "JavaScript", "React", "Node.js", "Python",
    "HTML5", "CSS3", "Git", "GitHub",
    "SQL", "MongoDB",
    "Java", "C", "C++", "Assembly"
  ],

  projects: [
    {
      name: "AI Sentiment Analyzer",
      description:
        "Classificazione del sentiment su recensioni testuali con Python (scikit-learn), pipeline di preprocessing e report dei risultati.",
      link: "https://github.com/Francesco0603/ai-sentiment-analyzer",
      skills: ["Python", "scikit-learn", "Pandas"]
    },
    {
      name: "Task Manager Web App",
      description:
        "To-do web app responsive con React (front-end) e API Node/Express (back-end). Gestione task, filtri e persistenza.",
      link: "https://github.com/Francesco0603/todo-list-react",
      skills: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      name: "Data Dashboard",
      description:
        "Dashboard HTML/CSS/JS per visualizzare KPI e grafici interattivi partendo da dataset JSON.",
      link: "https://github.com/Francesco0603/data-dashboard-html-css",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ],

  // Se non hai esperienze formali, lascia “Academic Projects / Collaborazioni” o aggiungi stage quando lo avrai
  experience: [
    {
      company: "Academic & Personal Projects",
      title: "Junior Full-Stack / AI Developer",
      dateRange: "2023 – Presente",
      bullets: [
        "Sviluppo di web app con stack React + Node.js e integrazione database (MongoDB/SQL).",
        "Prototipi ML in Python per analisi testo e classificazione.",
        "Versionamento del codice e collaborazione su GitHub (issue, PR, README)."
      ],
    }
    // Aggiungi qui eventuali stage/tirocini reali quando disponibili
  ],

  education: [
    {
      school: "Politecnico di Torino",
      degree: "Laurea Triennale in Ingegneria Gestionale",
      dateRange: "2021 – 2025", // aggiorna l’anno se diverso
      achievements: [
        "Percorsi su sistemi informativi, programmazione, analytics e gestione progetti.",
        "Progetti su sviluppo web e basi di machine learning.",
        "Attività personali su GitHub: portfolio e app dimostrative."
      ],
    }
    // Se aggiungi certificazioni/corsi online (React, Node, ML), inseriscili come seconda voce
  ],
};
