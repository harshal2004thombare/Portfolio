
import React from 'react';
import { SKILLS, PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-500/10 shrink-0 bg-slate-900">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Harshal+Thombare&background=0D8ABC&color=fff&size=512';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Who is Harshal?</h3>
                <p className="text-blue-400 font-mono text-sm">{PERSONAL_INFO.role}</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a driven Software Engineering student at MIT World Peace University with a unique background in Electronics and Communication Engineering. This dual perspective allows me to understand both hardware complexities and high-level software architectures.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Currently, I'm honing my skills as an intern, building enterprise-level backend modules using Java and Spring Boot. I thrive in environments where I can solve complex problems and contribute to real-world software impacts.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-xl border-l-4 border-blue-500">
                <div className="text-3xl font-bold text-white mb-1">1+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="glass p-4 rounded-xl border-l-4 border-purple-500">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Major Projects</div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technical Arsenal
            </h3>

            <div className="space-y-8">
              <div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest block mb-3">Languages</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.languages.map(s => (
                    <span key={s} className="px-4 py-1.5 bg-slate-800 text-slate-300 rounded-full border border-slate-700 text-sm hover:border-blue-500 transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest block mb-3">Backend & DB</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frameworks.filter(f => f.includes('Spring')).concat(SKILLS.databases).map(s => (
                    <span key={s} className="px-4 py-1.5 bg-blue-900/20 text-blue-400 rounded-full border border-blue-800/30 text-sm">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest block mb-3">Frontend & UI</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frameworks.filter(f => !f.includes('Spring')).map(s => (
                    <span key={s} className="px-4 py-1.5 bg-purple-900/20 text-purple-400 rounded-full border border-purple-800/30 text-sm">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest block mb-3">Tools & Concepts</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.concat(SKILLS.concepts).map(s => (
                    <span key={s} className="px-4 py-1.5 bg-emerald-900/20 text-emerald-400 rounded-full border border-emerald-800/30 text-sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl border border-blue-500/20 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white">Beyond the Code</h3>
              <p className="text-slate-400 leading-relaxed">
                When I'm not debugging or architecting systems, I participate in national Gatka competitions (Bronze Medalist!) and contribute as a volunteer at university events. I believe discipline in martial arts translates to discipline in writing clean, efficient code.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-2 mx-auto">🏆</div>
                <span className="text-xs text-slate-500 uppercase">National Athlete</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-2 mx-auto">🤝</div>
                <span className="text-xs text-slate-500 uppercase">Volunteer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
