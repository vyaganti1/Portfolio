import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCES } from '../constants';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-white dark:bg-black transition-colors duration-300 relative">
      
      {/* Technical Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%2394a3b8' /%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work History</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional development and key contributions to the tech industry.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line (Git Branch Style) */}
          <div className="absolute left-[28px] md:left-[210px] top-8 bottom-0 w-0.5 bg-slate-300 dark:bg-zinc-800"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
                
                {/* Left Column: Date & Branch Node */}
                <div className="flex flex-row md:flex-col items-center md:items-end md:w-[180px] shrink-0">
                   <div className="order-2 md:order-1 md:text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
                        {exp.period}
                      </span>
                   </div>
                   
                   {/* Timeline Node */}
                   <div className="order-1 md:order-2 md:absolute md:right-[-41px] md:top-2 md:mt-0 mr-4 md:mr-0 z-10">
                      <div className="w-[14px] h-[14px] rounded-full bg-white dark:bg-black border-[3px] border-blue-600 dark:border-blue-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(0,0,0,1)]"></div>
                   </div>
                </div>

                {/* Right Column: Content Card */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-zinc-800 shadow-sm transition-all duration-300 group-hover:-translate-y-1 dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] dark:group-hover:border-slate-500 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium mt-1">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed">
                          <ChevronRight size={16} className="mt-1 mr-2 text-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800">
                      {exp.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-zinc-800 transition-all duration-300 hover:dark:border-slate-500 hover:dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;