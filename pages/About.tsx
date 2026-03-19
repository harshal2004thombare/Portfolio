
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, PERSONAL_INFO } from '../constants';
import { Code2, Database, Layout, Wrench, Trophy, Users, Briefcase, GraduationCap, BarChart3, Code, Monitor } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-500/10 shrink-0 bg-slate-900">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Harshal+Thombare&background=0D8ABC&color=fff&size=512';
                  }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Who is Harshal?</h3>
                <p className="text-blue-400 font-mono text-sm">{PERSONAL_INFO.role}</p>
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
              I am a driven Software Engineering student at MIT World Peace University with a unique background in Electronics and Communication Engineering. This dual perspective allows me to understand both hardware complexities and high-level software architectures.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
              Currently, I'm honing my skills as an intern, building enterprise-level backend modules using Java and Spring Boot. I thrive in environments where I can solve complex problems and contribute to real-world software impacts.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-xl border-l-4 border-blue-500 group hover:bg-blue-500/5 transition-colors">
                <div className="text-3xl font-bold text-white mb-1">1+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="glass p-4 rounded-xl border-l-4 border-purple-500 group hover:bg-purple-500/5 transition-colors">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Major Projects</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-blue-500" />
              Technical Arsenal
            </h3>

            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.languages.map(s => (
                    <span key={s} className="px-4 py-1.5 bg-slate-800 text-slate-300 rounded-full border border-slate-700 text-sm hover:border-blue-500 hover:text-white transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Backend & DB</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frameworks.filter(f => f.includes('Spring')).concat(SKILLS.databases).map(s => (
                    <span key={s} className="px-4 py-1.5 bg-blue-900/20 text-blue-400 rounded-full border border-blue-800/30 text-sm hover:bg-blue-900/40 hover:text-white transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <Layout className="w-4 h-4 text-slate-500 group-hover:text-purple-500 transition-colors" />
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Frontend & UI</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frameworks.filter(f => !f.includes('Spring')).map(s => (
                    <span key={s} className="px-4 py-1.5 bg-purple-900/20 text-purple-400 rounded-full border border-purple-800/30 text-sm hover:bg-purple-900/40 hover:text-white transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Tools & Concepts</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.concat(SKILLS.concepts).map(s => (
                    <span key={s} className="px-4 py-1.5 bg-emerald-900/20 text-emerald-400 rounded-full border border-emerald-800/30 text-sm hover:bg-emerald-900/40 hover:text-white transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Backend Development', 
                desc: 'Building robust and scalable server-side applications using Java and Spring Boot.',
                icon: <Database className="w-8 h-8 text-blue-500" />,
                color: 'blue'
              },
              { 
                title: 'Frontend Development', 
                desc: 'Creating responsive and interactive user interfaces with React and Tailwind CSS.',
                icon: <Layout className="w-8 h-8 text-purple-500" />,
                color: 'purple'
              },
              { 
                title: 'Data Analysis', 
                desc: 'Extracting insights from complex datasets using R and visualizing with Tableau.',
                icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
                color: 'emerald'
              },
              { 
                title: 'Full-Stack Solutions', 
                desc: 'End-to-end development of web applications with seamless integration.',
                icon: <Code className="w-8 h-8 text-orange-500" />,
                color: 'orange'
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className={`w-16 h-16 bg-slate-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-800`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl border border-blue-500/20 mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white">Beyond the Code</h3>
              <p className="text-slate-400 leading-relaxed">
                When I'm not debugging or architecting systems, I participate in national Gatka competitions (Bronze Medalist!) and contribute as a volunteer at university events. I believe discipline in martial arts translates to discipline in writing clean, efficient code.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-2 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-blue-600/20">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">National Athlete</span>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-2 mx-auto group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-lg shadow-purple-600/20">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Volunteer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
