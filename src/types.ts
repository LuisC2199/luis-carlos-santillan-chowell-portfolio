export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  focus: string;
  links: {
    github?: string;
    demo?: string;
  };
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: string; // e.g., "C2", "B2"
}

export interface Certification {
  name: string;
  date: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
