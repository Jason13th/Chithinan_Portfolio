import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const LinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="card-border glassmorphism rounded-lg overflow-hidden flex flex-col transition-transform duration-300 project-card fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="bg-primary/30 px-4 py-2 flex items-center justify-between border-b border-primary">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
                    <LinkIcon className="w-5 h-5"/>
                </a>
            )}
          </div>
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-primary">{project.title}</h3>
            <p className="text-secondary mt-2 text-sm flex-grow">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono bg-secondary-opaque text-accent px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;