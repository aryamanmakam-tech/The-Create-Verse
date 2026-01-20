
import React from 'react';
import { Brain, Heart, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Who We <span className="text-gradient">Are</span></h1>
          <p className="text-2xl text-slate-300 leading-relaxed">
            TheCreateVerse is an AI-powered creative agency built for the new internet era.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="glass p-10 rounded-3xl border-t-4 border-blue-500">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To become a new-age agency where AI enhances creativity, not replaces it.
            </p>
          </div>
          <div className="glass p-10 rounded-3xl border-t-4 border-cyan-500">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 mb-6 border border-cyan-500/20">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To build websites that represent brands authentically, perform consistently, and scale effortlessly.
            </p>
          </div>
          <div className="glass p-10 rounded-3xl border-t-4 border-sky-500">
            <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 mb-6 border border-sky-500/20">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">New-Age Era</h3>
            <p className="text-slate-400 leading-relaxed">
              We exist to help brands stand out in an era where attention is short and competition is high.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 py-20 glass mx-4 rounded-[3rem] border border-white/5 bg-blue-950/5">
        <div className="max-w-3xl mx-auto text-center px-4">
          <Brain size={64} className="mx-auto text-blue-500 mb-8 animate-bounce" />
          <h2 className="text-3xl font-bold mb-6 text-white">AI Intelligence + Human Magic</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We believe the future of branding belongs to those who can leverage technology without losing their soul. 
            TheCreateVerse sits at the intersection of data-driven performance and emotional creative direction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
