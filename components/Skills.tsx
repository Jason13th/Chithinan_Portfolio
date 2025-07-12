import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="card-border glassmorphism p-3 text-center transition-all duration-300 hover:bg-primary/10 hover:text-accent hover:-translate-y-1 fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <p className="font-mono text-sm md:text-base text-primary">{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;