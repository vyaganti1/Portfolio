import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { SectionId } from '../types';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: SectionId.HOME },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Experience', id: SectionId.EXPERIENCE },
    { label: 'Projects', id: SectionId.PROJECTS },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-md border-b bg-white/90 dark:bg-black/90 border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
            {/* Image Logo */}
            <img 
              src="/img/logo.png" 
              alt="VenDev Logo" 
              className="w-8 h-8 object-contain" 
            />
            <span className="text-slate-900 dark:text-white">Ven<span className="text-blue-600 dark:text-blue-500">Dev</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium uppercase tracking-wider transition-colors text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-yellow-400"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full transition-all bg-slate-100 text-slate-900 dark:bg-zinc-900 dark:text-yellow-400"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4 animate-fade-in bg-white dark:bg-black border-slate-100 dark:border-zinc-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;