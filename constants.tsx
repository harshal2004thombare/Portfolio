
import { Project, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Harshal Thombare",
  role: "Software Engineer",
  location: "Pune, India",
  email: "hthombare3141@gmail.com",
  phone: "+91 9075656016",
  linkedin: "linkedin.com/in/harshal-thombare",
  github: "github.com/harshal2004thombare",
  summary: "Entry-level Software Engineer with hands-on experience in Java, Spring Boot, React, and MySQL. Passionate about building scalable backends and modern frontends.",
  // Explicitly setting to the filename in the root
  profileImage: "BACKGROUND.jpg" 
};

export const PROJECTS: Project[] = [
  {
    title: "MaziSheti Platform",
    role: "Java Backend Developer",
    duration: "Mar 2025 – May 2025",
    description: [
      "Developed backend services using Java and Spring Boot for an agriculture marketplace platform.",
      "Designed and implemented RESTful APIs and role-based access control.",
      "Integrated MySQL database using JPA for data persistence and management."
    ],
    tech: ["Java", "Spring Boot", "MySQL", "JPA", "REST API"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fit=crop&w=800&q=80"
  },
  {
    title: "Military Personnel Analysis",
    role: "Data Analyst",
    duration: "Nov 2024 – Jan 2025",
    description: [
      "Performed statistical analysis using R (ggplot2) on global military manpower datasets.",
      "Designed interactive Tableau dashboards with heatmaps, scatter plots, and time-series insights."
    ],
    tech: ["R", "ggplot2", "Tableau", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=800&q=80"
  },
  {
    title: "Food Ordering Application",
    role: "Full-Stack Developer",
    duration: "Oct 2024 – Dec 2024",
    description: [
      "Developed a responsive frontend using React (Vite) for a food ordering application.",
      "Integrated REST APIs for cart management, order placement, and real-time tracking.",
      "Connected frontend with MySQL backend and implemented admin dashboard features."
    ],
    tech: ["React", "Vite", "REST API", "MySQL", "Full-stack"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=800&q=80"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "CyberArt Solutions Pvt Ltd",
    role: "Jr Software Engineer Intern (Java — Spring Boot)",
    location: "Pune, India",
    duration: "July 2025 – Present",
    tasks: [
      "Developed backend modules using Java and Spring Boot for internal enterprise applications.",
      "Optimized MySQL queries, improving application performance and system stability.",
      "Worked on REST API testing, debugging, and documentation."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "MIT World Peace University",
    degree: "B.Tech in Electronics and Communication Engineering",
    duration: "June 2026 (Pursuing)",
    grade: "CGPA 7.42/10",
    location: "Pune, India"
  },
  {
    institution: "Vidya Valley Northpoint JR College",
    degree: "HSC",
    duration: "March 2022",
    grade: "77.17%",
    location: "Pune, India"
  },
  {
    institution: "Vishwakalyan English Medium School",
    degree: "CBSE",
    duration: "June 2020",
    grade: "71%",
    location: "Pune, India"
  }
];

export const SKILLS = {
  languages: ["Java", "JavaScript", "Python", "R"],
  frameworks: ["Spring Boot", "React", "Redux", "Vite"],
  databases: ["MySQL", "JPA"],
  tools: ["GitHub", "VS Code", "Tableau", "Arduino IDE"],
  concepts: ["DSA", "OOPS", "REST APIs", "Microservices"]
};
