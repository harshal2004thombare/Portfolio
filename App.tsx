
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIChatbot from './components/AIChatbot';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Qualification from './pages/Qualification';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden">
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <AIChatbot />
        
        <footer className="py-12 glass border-t border-slate-800 text-center relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-6">
              <div className="text-xl font-bold text-white">Harshal <span className="text-blue-500">Thombare</span></div>
              <p className="text-slate-500 text-sm max-w-md">
                Built with React, Tailwind CSS, and Google Gemini. <br />
                © {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Global styles for animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-reverse-slow {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
          .animate-slideIn { animation: slideIn 1s ease-out forwards; }
          .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          .animate-spin-reverse-slow { animation: spin-reverse-slow 15s linear infinite; }
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0f172a;
          }
          ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #334155;
          }
        `}} />
      </div>
    </Router>
  );
};

export default App;
