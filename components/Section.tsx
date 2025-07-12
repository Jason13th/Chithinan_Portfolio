import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import TypingEffect from './TypingEffect';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`py-16 md:py-24 transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-mono">
          <span className="text-accent">~</span>
          <span className="text-secondary">/</span>
          <span className="text-primary">chithinan.sh</span>
          <span className="text-secondary"> $ </span>
          <TypingEffect text={`./run ${title}`} speed={50} showCursor={true}/>
        </h2>
        <div className="h-1 w-full gradient-line mt-2 opacity-50"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;