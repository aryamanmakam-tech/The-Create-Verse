
import React from 'react';
import { Check, X, Star, Zap, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "FOUNDATION",
      desc: "Start strong. Build the base.",
      price: "Enquire",
      icon: <Shield className="text-slate-400" />,
      ideal: "Individuals, early-stage startups",
      features: [
        { text: "AI-assisted architecture", included: true },
        { text: "Secure backend & CMS", included: true },
        { text: "Hosting & deployment", included: true },
        { text: "Basic SEO configuration", included: true },
        { text: "Custom frontend design", included: false },
        { text: "Branding-led creative", included: false },
      ],
      cta: "Start Foundation"
    },
    {
      name: "GROWTH",
      desc: "Designed to convert. Built to scale.",
      price: "Popular",
      icon: <Star className="text-cyan-400" />,
      ideal: "Businesses wanting trust & leads",
      featured: true,
      features: [
        { text: "Fully custom frontend design", included: true },
        { text: "TheCreateVerse Managed Backend", included: true },
        { text: "AI-powered UX optimization", included: true },
        { text: "Promotion-first structure", included: true },
        { text: "Mobile-first & Fast loading", included: true },
        { text: "Continuous monitoring", included: true },
      ],
      cta: "Start Growing"
    },
    {
      name: "DOMINANCE",
      desc: "Full ownership. Total control.",
      price: "Enterprise",
      icon: <Rocket className="text-blue-500" />,
      ideal: "Agencies & funded startups",
      features: [
        { text: "Complete dev lifecycle", included: true },
        { text: "Advanced performance AI", included: true },
        { text: "Full backend handover", included: true },
        { text: "Documentation & Technical training", included: true },
        { text: "Scalable future-ready setup", included: true },
        { text: "Complete IP ownership", included: true },
      ],
      cta: "Dominate Now"
    }
  ];

  return (
    <div className="pb-24">
      <section className="pt-24 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Choose a plan built for <span className="text-gradient">growth</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          At TheCreateVerse, pricing isn’t about pages or hours. It’s about performance, creativity, and long-term value.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={`relative flex flex-col p-8 rounded-3xl transition-all ${
            plan.featured 
            ? 'bg-blue-600/5 border-2 border-blue-500 ring-4 ring-blue-500/10 scale-105 z-10' 
            : 'glass border border-white/5 hover:border-white/10'
          }`}>
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center">
                <Star size={12} className="mr-1 fill-white" /> MOST CHOSEN ⭐
              </div>
            )}
            
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{plan.desc}</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                {plan.icon}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">Ideal for:</span>
              <p className="text-slate-200 mt-1">{plan.ideal}</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className={`flex items-start text-sm ${feature.included ? 'text-slate-200' : 'text-slate-500'}`}>
                  {feature.included ? <Check size={16} className="text-blue-500 mr-3 mt-0.5 shrink-0" /> : <X size={16} className="text-slate-600 mr-3 mt-0.5 shrink-0" />}
                  {feature.text}
                </div>
              ))}
            </div>

            <Link to="/contact" className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
              plan.featured ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
            }`}>
              {plan.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-32">
        <div className="glass rounded-3xl overflow-hidden border border-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-6 text-sm uppercase tracking-wider text-slate-500">Feature</th>
                <th className="p-6 text-sm uppercase tracking-wider text-slate-500">Foundation</th>
                <th className="p-6 text-sm uppercase tracking-wider text-blue-400">Growth ⭐</th>
                <th className="p-6 text-sm uppercase tracking-wider text-slate-500">Dominance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Custom Frontend Design", "❌", "✅", "✅"],
                ["Backend Managed by Us", "✅", "✅", "❌ (Handover)"],
                ["AI-Based Optimization", "❌", "✅", "✅"],
                ["Promotion-Ready Design", "❌", "✅", "✅"],
                ["Best for Growth", "❌", "⭐⭐⭐", "⭐⭐"]
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-slate-300">{row[0]}</td>
                  <td className="p-6 text-slate-400">{row[1]}</td>
                  <td className="p-6 text-white font-bold">{row[2]}</td>
                  <td className="p-6 text-slate-400">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-24 text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Not Sure Which Plan Fits You?</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">We don’t sell plans. We recommend what actually helps your business grow.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">Book a Free Strategy Call</Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
