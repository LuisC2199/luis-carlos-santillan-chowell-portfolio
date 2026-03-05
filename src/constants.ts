import { Project, Experience, SkillCategory, Education, Language, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Luis Carlos Santillán Chowell",
  title: "Full-Stack Software Developer | AI & Web Systems",
  description: "Knowledgeable Software Developer with a solid foundation in software development and a history of contributing to successful projects. Proficient in building SaaS platforms, AI systems, and production web applications.",
  email: "luiscarlos2106@hotmail.com",
  github: "https://github.com/LuisC2199",
  linkedin: "https://www.linkedin.com/in/luiscarlos99/",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "MATLAB", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Astro", "Tailwind CSS", "HTML", "CSS", "Three.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Firebase", "Firestore", "Convex", "REST APIs", "Spring Boot"]
  },
  {
    title: "AI / Data",
    skills: ["Deep Learning", "CNNs", "Transformers", "Diffusion Models", "Image Processing", "Spectral Imaging", "Computer Vision"]
  },
  {
    title: "Other Technologies",
    skills: ["ROS (Robot Operating System)", "Git", "Linux", "Blender 3D", "VHDL / Verilog"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "namo",
    role: "Software Developer & Co-Founder",
    company: "Namo System",
    location: "Remote",
    period: "2023 – Present",
    achievements: [
      "Built SaaS platforms integrating web applications, CRM systems, and automation workflows.",
      "Designed scalable websites and client-facing applications.",
      "Developed analytics dashboards and system integrations.",
      "Improved software efficiency by troubleshooting and resolving coding issues."
    ]
  },
  {
    id: "concentrix",
    role: "Software Developer",
    company: "Concentrix Catalyst",
    location: "Querétaro, México",
    period: "2021 – 2024",
    achievements: [
      "Full-stack development on enterprise commerce platforms.",
      "Debugged production systems and improved application performance.",
      "Collaborated with agile teams to deliver software features."
    ]
  },
  {
    id: "prokarma",
    role: "Software Developer (Trainee)",
    company: "ProKarma",
    location: "Querétaro, México",
    period: "2021",
    achievements: [
      "Completed training in Java and Spring Boot.",
      "Built blog web application using Spring Boot.",
      "Collaborated with cross-functional teams to ensure seamless integration of software components."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "msc",
    degree: "Erasmus Mundus MSc: Computational Colour & Spectral Imaging",
    institution: "NTNU & Université Jean Monnet",
    location: "Norway, France",
    period: "01/2025"
  },
  {
    id: "bsc",
    degree: "B.Sc.: Digital Systems and Robotics Engineering",
    institution: "Tecnológico De Monterrey",
    location: "Querétaro",
    period: "01/2022"
  }
];

export const LANGUAGES: Language[] = [
  { name: "English", level: "Bilingual or Proficient", proficiency: "C2" },
  { name: "Spanish", level: "Bilingual or Proficient", proficiency: "C2" },
  { name: "French", level: "Upper intermediate", proficiency: "B2" },
  { name: "German", level: "Intermediate", proficiency: "B1" }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Salesforce Certified Platform Developer", date: "03/2024" },
  { name: "Salesforce Certified Administrator (SCA)", date: "03/2022" },
  { name: "Salesforce Certified B2C Commerce Developer", date: "09/2021" }
];

export const PROJECTS: Project[] = [
  {
    id: "helyx",
    title: "Helyx – Medical Platform",
    description: "A modern medical platform designed for clinics to manage patients, appointments, and records with secure role-based access.",
    features: [
      "Role-based access control for doctors, patients, and administrators",
      "Secure medical record management",
      "Patient data sharing between doctors",
      "Appointment scheduling system"
    ],
    techStack: ["Next.js", "TypeScript", "Convex", "React", "Tailwind CSS"],
    focus: "Designed with strong access control architecture and scalable backend logic.",
    links: { github: "", demo: "" }
  },
  {
    id: "donas",
    title: "Donas Plantívoro – Ordering Web App",
    description: "A full-stack ordering platform for a vegan donut brand.",
    features: [
      "Multi-step order wizard",
      "Product customization",
      "Order tracking",
      "Admin dashboard"
    ],
    techStack: ["Next.js", "Firebase", "Firestore", "React", "Tailwind CSS"],
    focus: "Built scalable order workflows and a structured database system.",
    links: { github: "https://github.com/LuisC2199/DonasPlantivoro", demo: "https://donas-plantivoro-1.web.app/" }
  },
  {
    id: "el-gallo",
    title: "El Gallo Galante – Digital Magazine",
    description: "A digital literature magazine built as a modern content platform.",
    features: [
      "Fast static website",
      "Markdown-based content system",
      "Responsive reading experience",
      "Dynamic article browsing"
    ],
    techStack: ["Astro", "Tailwind CSS", "Markdown", "Static Site Generation"],
    focus: "Designed for performance, SEO, and clean editorial design.",
    links: { github: "https://github.com/LuisC2199/el-gallo-galante", demo: "https://el-gallo-galante.luiscs210699.workers.dev/" }
  },
  {
    id: "ghl-analytics",
    title: "GHL Analytics Dashboard",
    description: "A web analytics dashboard built to analyze data from GoHighLevel SaaS systems.",
    features: [
      "Marketing and SaaS performance metrics",
      "Customer analytics dashboards",
      "Automated reporting",
      "API data integrations"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Data Visualization"],
    focus: "Built to help SaaS agencies analyze customer data and automate insights.",
    links: { github: "https://github.com/LuisC2199/Affiliate-Analytics-Dashboard", demo: "" }
  },
  {
    id: "cero",
    title: "CERO – Cave Explorer Robot",
    description: "Autonomous cave exploration robot built during university research project.",
    features: [
      "Autonomous navigation",
      "Sensor-based mapping",
      "High-resolution camera system"
    ],
    techStack: ["ROS", "C++", "Robotics Sensors", "Embedded Systems"],
    focus: "Developed robotics software and hardware integration.",
    links: { github: "", demo: "" }
  }
];
