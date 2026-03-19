
import { Project, Experience, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Harshal Thombare",
  role: "Software Engineer",
  location: "Pune, India",
  email: "hthombare3141@gmail.com",
  phone: "+91 9075656016",
  linkedin: "linkedin.com/in/harshal-thombare",
  github: "github.com/harshal2004thombare",
  summary: "Entry-level Software Engineer with hands-on experience in Java, Spring Boot, React, and MySQL. Passionate about building scalable backends and modern frontends.",
  profileImage: "/profile.jpg",
  resume: "/resume.pdf"
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
  },
  {
    title: "Rangabhoomi Interiors Management System",
    role: "Full-Stack Developer",
    duration: "Jan 2025 – Present",
    description: [
      "Developed a comprehensive management system actively used by Rangabhoomi Interiors to streamline daily operations.",
      "Built a centralized dashboard to monitor project progress, track labour attendance, and manage financial transactions.",
      "Implemented modules for expense tracking, revenue management, and real-time workforce analytics.",
      "Deployed on Vercel for real-time access and operational transparency."
    ],
    tech: ["React", "Java", "Spring Boot", "MySQL", "Vercel"],
    image: "/dashboard.png",
    link: "https://frontend-mauve-seven-79.vercel.app/login"
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
  }
];

export const SKILLS = {
  languages: ["Java", "SQL", "R Language", "C", "C++", "Python"],
  frameworks: ["Spring Boot", "React", "Node.js", "Express", "Tailwind CSS"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Tableau", "Postman", "IntelliJ IDEA", "VS Code"],
  concepts: ["REST API", "Data Structures", "Algorithms", "OOPs", "DBMS"]
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "CyberArt Internship Certificate",
    link: "https://www.linkedin.com/posts/harshal-thombare_internship-java-springboot-activity-7414719773135085568-Ftfy",
    icon: "📜"
  },
  {
    name: "Java Programming (LinkedIn)",
    link: "https://www.linkedin.com/posts/harshal-thombare_java-certificate-activity-7319314658039881728-kR0L",
    icon: "☕"
  },
  {
    name: "Spring Boot Development",
    icon: "🍃"
  },
  {
    name: "Full-Stack Web Development",
    icon: "🌐"
  },
  {
    name: "AI Workshop with MCCIA",
    link: "https://www.linkedin.com/posts/harshal-thombare_successfully-attended-the-ai-workshop-at-activity-7414719773135085568-Ftfy",
    icon: "🤖"
  },
  {
    name: "Deloitte Analytics",
    link: "https://www.linkedin.com/posts/harshal-thombare_forage-certificate-activity-7319314658039881728-kR0L",
    icon: "📊"
  },
  {
    name: "Tata Forage",
    link: "https://www.linkedin.com/posts/harshal-thombare_forage-certificate-activity-7322605618815549440-gh9a",
    icon: "🏗️"
  },
  {
    name: "Cloud Essentials",
    icon: "☁️"
  },
  {
    name: "Bronze Medal - Gatka",
    icon: "⚔️"
  },
  {
    name: "Walmart Hackathon",
    icon: "🚀"
  },
  {
    name: "Sport Scholarship (₹18,600)",
    image: "/sports.jpeg",
    icon: "🏆"
  },
  {
    name: "Merit Scholarship (₹77,500)",
    image: "/merit.jpeg",
    icon: "🎓"
  },
  {
    name: "Schaeffler Hope of Engineering Scholarship (₹3,00,000)",
    link: "https://www.buddy4study.com/scholarship/schaeffler-india-hope-engineering-scholarship",
    icon: "💰"
  }
];
