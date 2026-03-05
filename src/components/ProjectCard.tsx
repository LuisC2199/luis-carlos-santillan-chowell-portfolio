import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { Card } from './Layout';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full flex flex-col group">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase tracking-wider text-gray-400 font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
              <ChevronRight size={12} className="text-blue-500" />
              Key Features
            </h4>
            <ul className="text-xs text-gray-400 space-y-1 ml-5 list-disc">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
              <ChevronRight size={12} className="text-blue-500" />
              Architecture Focus
            </h4>
            <p className="text-xs text-gray-400 italic ml-5">
              {project.focus}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
          {project.links.github && (
            <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Github size={16} />
              Code
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
