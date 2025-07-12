import React from 'react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="space-y-12">
      {experience.map((exp, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-accent/50">
          <div className="absolute -left-[11px] top-1 w-5 h-5 pulse-color rounded-full border-4 border-primary bg-primary animate-pulse"></div>
          <div className="card-border glassmorphism p-4 rounded-lg ml-4">
            <p className="text-accent font-bold text-lg">{exp.role}</p>
            <p className="text-primary font-semibold">{exp.company}</p>
            <p className="text-secondary text-sm mb-3">{exp.period}</p>
            <div className="text-primary font-mono space-y-2 text-sm">
              {exp.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;