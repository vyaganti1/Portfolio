import React, { useEffect } from 'react';
import { PROFILE } from '../constants';
import { SectionId } from '../types';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Check if particlesJS is loaded
    if ((window as any).particlesJS) {
      const particleColor = theme === 'dark' ? '#ffffff' : '#000000';
      
      (window as any).particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    }
  }, [theme]);

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center pt-16 bg-white dark:bg-black text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Particles Container */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center gap-12 pointer-events-auto">
          <div className="flex-1 text-center md:text-left">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{PROFILE.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-light">
              {PROFILE.role}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed bg-white/50 dark:bg-white/5 p-4 rounded-xl backdrop-blur-sm">
              {PROFILE.tagline} {PROFILE.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
               <button 
                 onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
                 className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
               >
                 View Projects
               </button>
               
               <a 
                 href="https://drive.google.com/file/d/1yxRG66LevEYB3ERJRJlFrDbSqW5_hI5n/view?usp=sharing" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-3 bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-[#242124] text-slate-900 dark:text-white rounded-lg font-semibold transition-all border border-slate-200 dark:border-white flex items-center gap-2 shadow-sm"
               >
                 <Download size={18} />
                 Download Resume
               </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start text-slate-500 dark:text-slate-400">
              <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><Github size={24} /></a>
              <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-red-500 dark:hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* Profile Image / Visual - UPDATED SOURCE */}
          <div className="flex-1 flex justify-center relative">
             <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <img 
                  src="https://s.yimg.com/ny/api/res/1.2/B7HPdy91MpmXUQyVtsuT_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD05MzI-/https://media.zenfs.com/en/insider_articles_922/bd915c23f82b369afff8db611ecbcbb0" 
                  alt="Alex Profile" 
                  className="relative w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-500 shadow-2xl grayscale group-hover:grayscale-0"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;