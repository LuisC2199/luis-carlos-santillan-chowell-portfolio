import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Code2, Brain, Rocket, Terminal } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Section, Card } from './components/Layout';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceItem } from './components/ExperienceItem';
import { EducationItem } from './components/EducationItem';
import { GitHubStats } from './components/GitHubStats';
import { ContactForm } from './components/ContactForm';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, EDUCATION, LANGUAGES, CERTIFICATIONS } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono uppercase tracking-widest mb-6"
            >
              Available for new opportunities
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              {PERSONAL_INFO.name.split(' ').map((word, i) => (
                <span key={i} className={i >= 2 ? "text-gradient block md:inline" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {PERSONAL_INFO.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
              >
                View Projects
              </a>
              <div className="flex items-center gap-3">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all hover:scale-105"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all hover:scale-105"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#contact" 
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all hover:scale-105"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce hidden md:block"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" subtitle="Introduction" title="About Me">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p className="text-lg text-white font-medium">
              Luis Carlos Santillán Chowell is a knowledgeable Software Developer with a solid foundation in software development and a history of contributing to successful projects.
            </p>
            <p>
              He has developed multiple applications that enhanced user experience and streamlined processes, demonstrating strong problem-solving abilities and proficiency in modern coding languages to deliver high-quality solutions.
            </p>
            <p>
              His work spans SaaS platforms, web applications, AI-powered systems, robotics, and automation tools. He has experience designing and building real-world products from concept to deployment.
            </p>
            <p>
              He enjoys working on challenging technical problems involving software architecture, automation, and intelligent systems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Code2 className="text-blue-500" />, title: "Full-Stack", desc: "Web & Mobile" },
              { icon: <Brain className="text-purple-500" />, title: "AI Systems", desc: "ML & Vision" },
              { icon: <Rocket className="text-emerald-500" />, title: "Robotics", desc: "ROS & Sensors" },
              { icon: <Terminal className="text-orange-500" />, title: "Architecture", desc: "Scalable Systems" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="flex flex-col items-center text-center p-8">
                  <div className="mb-4 p-3 bg-white/5 rounded-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" subtitle="Expertise" title="Technical Skills" className="bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" subtitle="Career" title="Professional Experience">
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" subtitle="Academic" title="Education" className="bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          {EDUCATION.map((edu) => (
            <EducationItem key={edu.id} education={edu} />
          ))}
        </div>
      </Section>

      {/* Languages & Certifications */}
      <Section id="more" subtitle="Extra" title="Languages & Certifications">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
              Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LANGUAGES.map((lang) => (
                <Card key={lang.name} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white">{lang.name}</h4>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {lang.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{lang.level}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <Card key={cert.name} className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                      <Terminal size={16} />
                    </div>
                    <h4 className="text-sm font-medium text-gray-200">{cert.name}</h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 shrink-0">{cert.date}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" subtitle="Portfolio" title="Featured Projects" className="bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* GitHub Activity */}
      <Section id="github" subtitle="Open Source" title="GitHub Activity">
        <GitHubStats />
      </Section>

      {/* Contact Section */}
      <Section id="contact" subtitle="Get in touch" title="Contact Me">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's build something together</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-white font-medium">Luis Carlos Santillán Chowell</p>
                </div>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">GitHub</p>
                  <p className="text-white font-medium">@luiscarlos</p>
                </div>
              </a>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Luis Carlos Santillán Chowell. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
