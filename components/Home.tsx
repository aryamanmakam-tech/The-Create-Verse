
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Rocket, Zap, Target, Users, Layout, CheckCircle2, BarChart3 } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl glass hover:bg-white/5 transition-all group border border-white/5">
    <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Zap size={14} />
            <span>AI-Powered Website Building Agency</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Building Websites Is Easy.<br />
            <span className="text-gradient">Building Websites That Perform</span> Is Our Superpower.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            At TheCreateVerse, we focus on building high-performing, conversion-ready websites 
            that don’t just look good—but work hard for your business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Designed with strategy",
              "Powered by AI insights",
              "Crafted with creativity",
              "Built for growth"
            ].map((text, i) => (
              <div key={i} className="flex items-center text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-blue-500 mr-2" />
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all flex items-center justify-center shadow-lg shadow-blue-600/20">
              Get Your Website Built <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all border border-white/10">
              See How We’re Different
            </Link>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why TheCreateVerse Exists</h2>
              <p className="text-xl text-slate-400 mb-8">
                Most agencies stop at design. We go further. We combine AI intelligence with human creativity to build growth machines.
              </p>
              <div className="space-y-6">
                {[
                  { title: "AI Intelligence", desc: "Analyzing behavior and optimizing layouts." },
                  { title: "Human Creativity", desc: "Crafting magic that resonates emotionally." },
                  { title: "Customer Understanding", desc: "Solving real pain points and triggers." },
                  { title: "Promotion-First Thinking", desc: "Built for ads, SEO, and social scaling." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 mr-4 p-1 rounded-full bg-blue-500/20 text-blue-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass p-8 flex items-center justify-center border border-white/5">
                <Brain size={200} className="text-blue-500/10 absolute animate-pulse" />
                <div className="relative z-10 text-center">
                  <span className="text-6xl font-black text-white block mb-4">Output > Effort</span>
                  <p className="text-slate-400 text-lg">Your website isn’t just a digital brochure — it’s a growth machine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Are Different */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why We’re Not “Just Another Agency”</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't sell hours, we sell results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Target size={32} />}
              title="Promotion-First Mindset"
              desc="We ask 'How will this be promoted?' before we ask 'How should it look?'"
            />
            <FeatureCard 
              icon={<Zap size={32} />}
              title="AI + Human Creativity"
              desc="AI assists with data and optimization. Humans create the brand magic."
            />
            <FeatureCard 
              icon={<Users size={32} />}
              title="Audience Psychology"
              desc="We start with triggers and pain points, not just colors and fonts."
            />
            <FeatureCard 
              icon={<BarChart3 size={32} />}
              title="Performance Driven"
              desc="Our focus is engagement, higher trust, more leads, and stronger brand perception."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
