import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import StickyNav from './components/StickyNav';
import { SKILLS, EXPERIENCE, PROJECTS, CERTIFICATIONS } from './constants';

const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.95-4.243-1.59-1.59M3.75 12H3m4.243-4.95-1.59-1.59L3.75 4.5m12 12a4.5 4.5 0 0 1-9 0 4.5 4.5 0 0 1 9 0Z" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

const ThemeToggle = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className="fixed top-4 right-4 z-50 p-2 rounded-full bg-secondary card-border"
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? <SunIcon className="w-6 h-6 text-primary" /> : <MoonIcon className="w-6 h-6 text-primary" />}
  </button>
);

const CertificateModal = ({ imageUrl, onClose }: { imageUrl: string | null; onClose: () => void }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageUrl} 
          alt="Certificate" 
          className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition-transform hover:scale-110"
          aria-label="Close certificate view"
        >
          &times;
        </button>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-primary min-h-screen text-primary font-mono scanline-overlay">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {isScrolled && <StickyNav />}
      <CertificateModal imageUrl={selectedCert} onClose={() => setSelectedCert(null)} />

      <main className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Header />
        
        <Section title="skills.list" id="skills">
          <Skills skills={SKILLS} />
        </Section>
        
        <Section title="experience.log" id="experience">
          <Experience experience={EXPERIENCE} />
        </Section>

        <Section title="projects.repo" id="projects">
          <Projects projects={PROJECTS} />
        </Section>

        <Section title="certifications.proof" id="certs">
          <Certifications certifications={CERTIFICATIONS} onView={setSelectedCert} />
        </Section>

        <Contact />
      </main>
    </div>
  );
};

export default App;