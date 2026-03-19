
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, EXPERIENCES, CERTIFICATIONS } from '../constants';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, Trophy, Medal } from 'lucide-react';

const Qualification: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
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
          <h2 className="text-4xl font-bold text-white mb-4">Journey & Qualifications</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional growth, academic achievements, and certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              Work Experience
            </h3>

            <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
              {EXPERIENCES.map((exp, i) => (
                <motion.div key={i} variants={itemVariants} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                  <div className="glass p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group">
                    <div className="flex items-center gap-2 text-blue-500 font-mono text-xs font-bold uppercase mb-2">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-slate-400 font-medium mb-4">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="text-sm text-slate-500 flex gap-3 leading-relaxed">
                          <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-500" />
              </div>
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
              {EDUCATION.map((edu, i) => (
                <motion.div key={i} variants={itemVariants} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-600 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
                  <div className="glass p-6 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all group">
                    <div className="flex items-center gap-2 text-purple-500 font-mono text-xs font-bold uppercase mb-2">
                      <Calendar className="w-3 h-3" />
                      {edu.duration}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{edu.degree}</h4>
                    <p className="text-slate-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-sm font-mono text-emerald-400 bg-emerald-950/40 px-4 py-1.5 rounded-full border border-emerald-900/50 font-bold">
                        {edu.grade}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-yellow-500" />
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((ach, i) => (
              <motion.a 
                key={i} 
                href={ach.link || ach.image} 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`glass p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center group transition-all relative overflow-hidden ${ach.link || ach.image ? 'hover:border-blue-500/50 cursor-pointer' : 'cursor-default'}`}
              >
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  {ach.link ? <ExternalLink className="w-4 h-4 text-blue-400" /> : ach.image ? <Medal className="w-4 h-4 text-yellow-400" /> : null}
                </div>
                
                <div className="w-16 h-16 bg-slate-900/50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform overflow-hidden border border-slate-800 shadow-inner">
                  {ach.image ? (
                    <img src={ach.image} alt={ach.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="filter drop-shadow-md">{ach.icon || '🏅'}</span>
                  )}
                </div>
                
                <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-2 min-h-[2.5rem] flex items-center">
                  {ach.name}
                </h4>
                
                {(ach.link || ach.image) && (
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] text-blue-400 uppercase font-black tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    {ach.link ? 'View Credential' : 'View Certificate'}
                    <ExternalLink className="w-3 h-3" />
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Qualification;
