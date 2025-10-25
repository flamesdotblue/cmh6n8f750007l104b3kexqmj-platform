import React from 'react';
import { CheckCircle, Rocket, Bot, PhoneCall } from 'lucide-react';

const steps = [
  {
    title: 'Discover',
    desc: 'Deep-dive into goals, systems, and constraints. We map opportunities with ROI projections.'
  },
  {
    title: 'Design',
    desc: 'Solution blueprint: data sources, model strategy, tools, guardrails, and success metrics.'
  },
  {
    title: 'Build',
    desc: 'Rapid implementation with tight feedback loops. Integrations, prompts, and fine-tuning.'
  },
  {
    title: 'Deploy & Scale',
    desc: 'Monitoring, analytics, and continuous improvement to expand use-cases across teams.'
  },
];

const logos = [
  { Icon: Bot, label: 'Chatbots' },
  { Icon: PhoneCall, label: 'Voice' },
  { Icon: Rocket, label: 'Automation' },
];

const Process = () => {
  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Our process</h2>
          <p className="mt-2 text-slate-300">From idea to production in a matter of weeks. Transparent, outcome-driven, and secure by design.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">{i + 1}</span>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs">
                <CheckCircle className="h-4 w-4" /> Milestone defined
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-slate-400 text-sm">
          <span className="text-slate-300">Technologies we use:</span>
          {logos.map(({ Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Icon className="h-4 w-4" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
