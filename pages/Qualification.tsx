
import React from 'react';
import { EDUCATION, EXPERIENCES } from '../constants';

const Qualification: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Journey & Qualifications</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Work Experience
            </h3>

            <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-950"></div>
                  <div className="glass p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                    <span className="text-blue-500 font-mono text-xs font-bold uppercase mb-2 block">{exp.duration}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-slate-400 font-medium mb-4">{exp.company} • {exp.location}</p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="text-sm text-slate-500 flex gap-2">
                          <span className="text-blue-500 mt-1.5">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-600 rounded-full border-4 border-slate-950"></div>
                  <div className="glass p-6 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all">
                    <span className="text-purple-500 font-mono text-xs font-bold uppercase mb-2 block">{edu.duration}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full">{edu.grade}</span>
                      <span className="text-xs text-slate-500">{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Certifications & Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Cisco Network Essentials", "AI Workshop with MCCIA", "Cloud Essentials", "Deloitte Analytics", "Bronze Medal - Gatka", "Walmart Hackathon"].map((ach, i) => (
              <div key={i} className="glass p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center group hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">🏅</div>
                <span className="text-sm font-semibold text-slate-300">{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
