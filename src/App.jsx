import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400" />
              <span className="font-semibold tracking-tight">Taskmation</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#process" className="hover:text-white transition">Process</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition">Get Started</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Process />
        <CTA />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Taskmation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-200">Services</a>
            <a href="#process" className="hover:text-slate-200">Process</a>
            <a href="#contact" className="hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
