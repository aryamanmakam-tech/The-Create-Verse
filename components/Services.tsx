
import React from 'react';
import { Check, Rocket, Globe, Layout, Laptop, MessageSquare, Zap, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const offerings = [
    "Business websites", "Personal brand websites", "Agency websites", 
    "Landing pages", "Portfolio websites"
  ];

  const inclusions = [
    "AI-assisted UX & layout strategy",
    "Custom design (no templates)",
    "Mobile-first & fast loading",
    "Conversion-focused structure",
    "SEO-ready foundation",
    "Promotion-ready design"
  ];

  const steps = [
    { step: "Step 1", title: "Understand You", desc: "Deep dive into brand, audience, and goals." },
    { step: "Step 2", title: "Strategy & Structure", desc: "Planning flow, user journey, and conversion points." },
    { step: "Step 3", title: "Design & Build", desc: "Clean, premium, modern design that feels expensive." },
    { step: "Step 4", title: "Optimization", desc: "AI-driven refinements for speed, UX, and engagement." },
    { step: "Step 5", title: "Launch Ready", desc: "Delivered promotion-ready for your marketing campaigns." }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Website Building <span className="text-gradient">(Core Service)</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We build premium, high-impact websites for brands that want to stand out and perform.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Layout className="mr-3 text-blue-500" /> What We Build
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {offerings.map((item, i) => (
                  <div key={i} className="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-colors">
                    <Check size={16} className="text-blue-500 mr-3" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Check className="mr-3 text-cyan-500" /> What’s Included
              </h3>
              <div className="space-y-4">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex items-center text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center mr-4 shrink-0 border border-cyan-500/20">
                      <Check size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-blue-600/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Website Philosophy</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Attract", desc: "Capture attention instantly" },
              { title: "Trust", desc: "Build immediate credibility" },
              { title: "Guide", desc: "Direct the user's journey" },
              { title: "Convert", desc: "Turn visitors into customers" }
            ].map((item, i) => (
              <div key={i} className="p-8 glass rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                <span className="text-4xl font-black text-blue-500/10 block mb-2">{i+1}</span>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-400 italic">"If it doesn’t do this — it’s just decoration."</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">How We Build Your Website</h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((item, i) => (
                <div key={i} className="relative z-10 glass p-6 rounded-2xl group hover:border-blue-500/50 transition-all border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/40">
                    {i+1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
