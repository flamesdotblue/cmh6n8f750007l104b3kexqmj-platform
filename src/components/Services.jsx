import React from 'react';
import { Bot, PhoneCall, Zap, Shield, Rocket } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    desc: 'Sales and support chatbots fine-tuned on your data, integrated into your site, app, or CRM.'
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Agents',
    desc: 'Natural, human-like calling agents for inbound/outbound calls, scheduling, routing, and qualification.'
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Automate repetitive tasks across tools like Slack, Notion, HubSpot, and GSuite to save hours weekly.'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    desc: 'Enterprise-grade controls with data isolation, SOC2-ready tooling, and configurable retention.'
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_500px_at_10%_10%,rgba(59,130,246,0.08),transparent_60%)]"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we build</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Tailored AI systems that plug into your stack and deliver measurable outcomes from day one.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-sm">Start a project <Rocket className="h-4 w-4" /></a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 ring-1 ring-inset ring-white/10">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-orange-400/10 p-6 text-sm text-slate-300">
          Looking for something custom? We design agents around your data, processes, and compliance requirements. Connect to CRMs, ERPs, telephony, and internal APIs.
        </div>
      </div>
    </section>
  );
};

export default Services;
