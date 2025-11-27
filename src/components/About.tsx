import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { Server, Layout, Database, Cloud, Code, Terminal, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const categories = {
    Backend: { icon: <Server size={24} />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20" },
    Frontend: { icon: <Layout size={24} />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/20" },
    Database: { icon: <Database size={24} />, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/20" },
    DevOps: { icon: <Cloud size={24} />, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/20" }
  };

  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white dark:bg-black transition-colors duration-300 relative">
      
      {/* "Little Design" - Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels.
          </p>
        </div>

        {/* Grid Layout for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((cat) => (
            <div 
              key={cat} 
              className="bg-slate-50 dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 dark:hover:border-zinc-600"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${categories[cat].bg} ${categories[cat].color}`}>
                  {categories[cat].icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{cat}</h3>
              </div>
              
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-slate-400 dark:text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-zinc-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${cat === 'Backend' ? 'bg-blue-500' : cat === 'Frontend' ? 'bg-purple-500' : cat === 'Database' ? 'bg-emerald-500' : 'bg-orange-500'}`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-zinc-900 to-black dark:from-zinc-900 dark:to-black rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Cpu size={200} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Engineering Philosophy</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                I believe in building software that is not just functional, but maintainable and scalable. 
                My approach combines strict backend architecture with intuitive frontend design.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                    <Code size={18} className="text-blue-400" />
                    <span>Clean Code</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                    <Terminal size={18} className="text-green-400" />
                    <span>Automation</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                    <Globe size={18} className="text-purple-400" />
                    <span>Cloud Native</span>
                 </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
               <div className="inline-block text-5xl font-bold text-white">
                 5+
               </div>
               <div className="text-zinc-500 mt-2 font-medium uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;