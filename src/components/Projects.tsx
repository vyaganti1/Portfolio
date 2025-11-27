import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-zinc-400">Selected works demonstrating full-stack capabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-600 transition-all hover:shadow-xl flex flex-col h-full">
              
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-zinc-300 rounded-md border border-blue-100 dark:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white text-sm font-semibold transition-colors">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  )}
                  {/* Since 'link' might not exist on all projects in your type definition, we check it */}
                  {(project as any).link && (
                    <a href={(project as any).link} target="_blank" rel="noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold transition-colors">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;