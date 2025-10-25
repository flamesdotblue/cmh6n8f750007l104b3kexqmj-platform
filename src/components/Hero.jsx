import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              AI Automation Agency
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Automate business tasks with custom AI solutions
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              Taskmation designs and deploys AI chatbots, voice agents, and workflow automations that save hours, reduce costs, and scale effortlessly.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20">
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/5">
                Explore services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4" />Enterprise-grade privacy</div>
              <div className="inline-flex items-center gap-2"><Rocket className="h-4 w-4" />Launch in weeks</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(168,85,247,0.18),transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
