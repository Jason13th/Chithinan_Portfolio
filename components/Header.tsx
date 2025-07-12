import React from 'react';
import TypingEffect from './TypingEffect';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-secondary hover:text-primary transition-colors duration-300 px-2 py-1 rounded-md hover:bg-secondary">
    <span className="text-accent">[</span>
    {children}
    <span className="text-accent">]</span>
  </a>
);

const ScrollDownIndicator = () => (
  <a href="#skills" aria-label="Scroll to next section" className="absolute bottom-10 left-1/2 -translate-x-1/2">
    <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
      <div className="w-full h-2 bg-primary rounded-full animate-bounce"></div>
    </div>
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center justify-center text-center relative">
      <div className="w-full">
        <pre className="text-accent text-xs md:text-sm mx-auto opacity-70">
          {`
            _                _            
      | |     ___  __ _| | __    
     | |    / _ \\/ _\` | |/ /  
    | |___|  __/ (_| |   <   
   |_____|\___|\\__,_|_|\\_\\ 
                                       
`}
        </pre>
        <h1 className="text-4xl md:text-6xl font-bold glow-green">
          Chithinan Chantra
        </h1>
        <div className="text-xl md:text-2xl mt-4 text-accent glow-blue h-8">
          <TypingEffect text="<Cybersecurity Analyst & Student />" speed={75} showCursor={true}/>
        </div>
        <div className="mt-12">
          <p className="text-secondary max-w-2xl mx-auto">
            [ Welcome to my portfolio. A space to showcase my work, skills, and experience. ]
          </p>
        </div>
        <nav className="mt-8 flex justify-center items-center gap-2 md:gap-4 flex-wrap" aria-label="Main navigation">
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certs">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
      <ScrollDownIndicator />
    </header>
  );
};

export default Header;