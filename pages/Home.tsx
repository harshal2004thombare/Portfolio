
import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="blob top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="blob bottom-[-10%] right-[-10%] bg-purple-500/10 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full z-[-1]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-10 animate-fadeIn">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8 tracking-wide uppercase">
              Software Engineer & Java Developer
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white tracking-tighter">
              Hello, I'm <br />
              <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Crafting scalable <span className="text-white font-medium italic">Backend Architectures</span> and seamless <span className="text-white font-medium italic">User Experiences</span> with modern technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/projects"
              className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all flex items-center gap-2 group shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1"
            >
              Explore Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="px-10 py-4 glass border border-slate-700 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-1"
            >
              More About Me
            </Link>
          </div>

          <div className="pt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="text-slate-500 hover:text-white transition-all hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-slate-500 hover:text-white transition-all hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">System Status: Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
