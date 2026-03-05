import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Experience } from '../types';

export const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h3 className="text-xl font-bold text-white">{experience.role}</h3>
          <div className="flex items-center gap-2 text-blue-400 font-medium">
            <Briefcase size={14} />
            <span>{experience.company}</span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-3">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
            {achievement}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
