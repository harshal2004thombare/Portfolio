
export interface Project {
  title: string;
  role: string;
  duration: string;
  description: string[];
  tech: string[];
  link?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  tasks: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  location: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
