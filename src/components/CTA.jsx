import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-orange-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to automate with Taskmation?</h3>
              <p className="mt-2 text-slate-200/90">Tell us about your workflows and we’ll propose a tailored roadmap with timelines and outcomes.</p>

              <form className="mt-6 grid grid-cols-1 gap-4">
                <input className="w-full rounded-md bg-white/10 px-4 py-3 text-sm placeholder-slate-300/70 outline-none ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-fuchsia-400" placeholder="Your name" />
                <input className="w-full rounded-md bg-white/10 px-4 py-3 text-sm placeholder-slate-300/70 outline-none ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-fuchsia-400" placeholder="Work email" type="email" />
                <textarea className="min-h-[120px] w-full rounded-md bg-white/10 px-4 py-3 text-sm placeholder-slate-300/70 outline-none ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-fuchsia-400" placeholder="What would you like to automate?" />
                <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100">
                  Request proposal <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-300/80">By submitting, you agree to be contacted about your request.</p>
              </form>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0" aria-hidden>
                <div className="h-full w-full bg-[radial-gradient(600px_300px_at_70%_40%,rgba(255,255,255,0.25),transparent_60%)]" />
              </div>
              <div className="relative h-full p-12">
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                  <h4 className="text-white font-semibold">What you get</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• 30-min discovery call</li>
                    <li>• Feasibility and ROI estimate</li>
                    <li>• Timeline and budget range</li>
                    <li>• Data privacy plan</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                  <h4 className="text-white font-semibold">Popular solutions</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• Website and product chatbots</li>
                    <li>• AI phone receptionist and outbound SDR</li>
                    <li>• Back-office workflow automations</li>
                    <li>• Custom API + CRM integrations</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
