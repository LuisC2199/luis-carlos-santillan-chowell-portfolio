import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12">
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2"
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold"
              >
                {title}
              </motion.h2>
            )}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mt-4 rounded-full"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300", className)}>
    {children}
  </div>
);
