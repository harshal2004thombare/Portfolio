
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10 animate-slideIn">
            <h3 className="text-3xl font-bold text-white">Let's connect</h3>
            <p className="text-slate-400 text-lg">
              I'm currently looking for new opportunities and collaborations. Reach out via email, phone, or find me on professional networks.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">{PERSONAL_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Phone</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-blue-400 transition-colors">{PERSONAL_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Location</div>
                  <span className="text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              {[
                { name: 'GitHub', link: `https://${PERSONAL_INFO.github}`, color: 'bg-slate-800' },
                { name: 'LinkedIn', link: `https://${PERSONAL_INFO.linkedin}`, color: 'bg-blue-700' }
              ].map(social => (
                <a 
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  className={`px-6 py-3 ${social.color} text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-slate-800 relative animate-fadeIn">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center text-4xl">✓</div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. Harshal will get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-blue-400 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Project Inquiry"
                    onChange={e => setFormState({...formState, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/30 group"
                >
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
