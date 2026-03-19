
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, SKILLS } from '../constants';
import { Github, Linkedin, Eye, Download, ArrowRight, Code2, Database, Layout, Wrench, ExternalLink, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative px-4">
        {/* Dynamic Background Elements */}
        <div className="blob top-[-10%] left-[-10%] animate-pulse"></div>
        <div className="blob bottom-[-10%] right-[-10%] bg-purple-500/10 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full z-[-1]"></div>

        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8 tracking-wide uppercase">
                Available for Full-Time Opportunities
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white tracking-tighter">
                Hi, I'm <br />
                <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                A <span className="text-white font-medium italic">Software Engineer</span> specializing in high-performance Java Backend systems and modern React interfaces.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
              <Link
                to="/projects"
                className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all flex items-center gap-2 group shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-10 py-4 glass border border-slate-700 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-1"
              >
                About Me
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass border border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>
              <a
                href={PERSONAL_INFO.resume}
                download="Harshal_Thombare_Resume.pdf"
                className="px-6 py-3 glass border border-emerald-500/30 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-12 flex flex-col items-center gap-6">
              <div className="flex items-center gap-8">
                <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="text-slate-500 hover:text-white transition-all hover:scale-110">
                  <Github className="w-7 h-7" />
                </a>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-slate-500 hover:text-white transition-all hover:scale-110">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Available for Hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Languages', icon: <Code2 className="w-6 h-6 text-blue-500" />, items: SKILLS.languages.slice(0, 3) },
              { label: 'Backend', icon: <Database className="w-6 h-6 text-purple-500" />, items: SKILLS.frameworks.filter(f => f.includes('Spring')) },
              { label: 'Frontend', icon: <Layout className="w-6 h-6 text-emerald-500" />, items: SKILLS.frameworks.filter(f => !f.includes('Spring')).slice(0, 2) },
              { label: 'Tools', icon: <Wrench className="w-6 h-6 text-orange-500" />, items: SKILLS.tools.slice(0, 3) }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-800 shadow-lg">
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{skill.label}</h3>
                <p className="text-slate-500 text-sm">{skill.items.join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Projects</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <Link to="/projects" className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-2 group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden border border-slate-800 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                    {project.description[0]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] bg-blue-900/20 text-blue-400 px-2 py-1 rounded-md border border-blue-800/30 font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects" 
                    className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass p-12 rounded-[3rem] border border-blue-500/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10"></div>
          
          <h2 className="text-4xl font-bold text-white mb-6">Let's build something amazing together</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            I'm currently available for internships and full-time opportunities. If you have a project or just want to chat, feel free to reach out!
          </p>
          <Link 
            to="/contact" 
            className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-200 transition-all shadow-2xl shadow-white/10 inline-flex items-center gap-3 group"
          >
            Get In Touch
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
