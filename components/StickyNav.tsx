import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-secondary hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
    <span className="text-accent">[</span>
    {children}
    <span className="text-accent">]</span>
  </a>
);

const StickyNav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 p-2 sticky-nav glassmorphism border-b border-primary/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-lg text-primary hover:text-accent transition-colors">
          C.Chantra
        </a>
        <div className="hidden md:flex items-center gap-2">
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#certs">Certs</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
