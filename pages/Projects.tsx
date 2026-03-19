
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Code2, Calendar, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Creative Works</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A selection of projects ranging from enterprise backend systems to interactive data visualizations and full-stack applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group glass border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col relative"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="px-3 py-1 bg-blue-600/80 text-xs font-bold text-white rounded-lg backdrop-blur-sm shadow-lg">
                    {project.role}
                  </span>
                  <div className="flex gap-2">
                    {project.link && (
                      <a href={project.link} target="_blank" className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {project.description.slice(0, 2).map((desc, i) => (
                    <li key={i} className="text-sm text-slate-400 flex gap-2">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-slate-800/50 text-[10px] text-slate-400 rounded border border-slate-700 uppercase tracking-tighter hover:border-blue-500/50 hover:text-slate-200 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 glass rounded-3xl border border-dashed border-slate-700 text-center group hover:border-blue-500/50 transition-colors"
        >
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Github className="w-8 h-8 text-slate-500 group-hover:text-blue-500 transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Want to see more?</h3>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">Check out my GitHub for more open-source contributions, micro-projects, and coding experiments.</p>
          <a 
            href="https://github.com/harshal2004thombare" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all group"
          >
            Explore Repositories
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
