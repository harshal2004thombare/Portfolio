
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Creative Works</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A selection of projects ranging from enterprise backend systems to interactive data visualizations and full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/80 text-xs font-bold text-white rounded-lg backdrop-blur-sm">
                    {project.role}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <span className="text-[10px] text-slate-500 font-mono">{project.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {project.description.slice(0, 2).map((desc, i) => (
                    <li key={i} className="text-sm text-slate-400 flex gap-2">
                      <span className="text-blue-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-slate-800/50 text-[10px] text-slate-400 rounded border border-slate-700 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-2xl border border-dashed border-slate-700 text-center">
          <h3 className="text-xl font-bold text-slate-300 mb-2">Want to see more?</h3>
          <p className="text-slate-500 mb-6">Check out my GitHub for more open-source contributions and micro-projects.</p>
          <a 
            href="https://github.com/harshal2004thombare" 
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
          >
            Explore Repositories
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
