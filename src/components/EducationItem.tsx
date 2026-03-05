import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Education } from '../types';

export const EducationItem = ({ education }: { education: Education }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold text-white">{education.degree}</h3>
          <div className="flex items-center gap-2 text-purple-400 font-medium">
            <GraduationCap size={14} />
            <span>{education.institution}</span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{education.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
