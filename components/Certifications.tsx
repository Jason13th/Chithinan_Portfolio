import React from 'react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
  onView: (imageUrl: string) => void;
}

const EyeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639l4.43-4.43a2.25 2.25 0 0 1 3.182 0l4.43 4.43a2.25 2.25 0 0 1 0 3.182l-4.43 4.43a2.25 2.25 0 0 1-3.182 0l-4.43-4.43Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);


const Certifications: React.FC<CertificationsProps> = ({ certifications, onView }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <div 
          key={index} 
          className="card-border glassmorphism block p-4 rounded-md transition-all duration-300 hover:bg-accent/10 hover:border-accent/70 fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <p className="text-accent font-semibold">{cert.name}</p>
              <p className="text-secondary text-sm">{cert.issuer}</p>
              <p className="text-primary font-mono text-xs mt-1">{cert.detail}</p>
            </div>
            <button 
              type="button"
              onClick={() => onView(cert.imageUrl)}
              className="flex items-center shrink-0 gap-2 text-primary hover:text-accent transition-colors duration-300 font-mono text-sm border border-primary hover:border-accent px-3 py-1 rounded-md"
              aria-label={`View certificate for ${cert.name}`}
            >
              <EyeIcon className="w-4 h-4" />
              <span>View</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;