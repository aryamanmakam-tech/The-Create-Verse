
import React from 'react';
import { Mail, Instagram, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pb-24 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-extrabold mb-8">Let’s Build Something <span className="text-gradient">Powerful</span></h1>
            <p className="text-xl text-slate-400 mb-12">
              Whether you’re a startup, a creator, a business, or a brand — if you want a website that actually works, we’re ready.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all border border-white/5">
                  <Mail size={24} className="text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email</p>
                  <a href="mailto:hello@thecreateverse.com" className="text-xl font-medium hover:text-blue-400 transition-colors">hello@thecreateverse.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all border border-white/5">
                  <Instagram size={24} className="text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Instagram</p>
                  <a href="https://instagram.com/thecreateverse" className="text-xl font-medium hover:text-blue-400 transition-colors">@thecreateverse</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all border border-white/5">
                  <Globe size={24} className="text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Location</p>
                  <span className="text-xl font-medium">Global | Remote-First</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl shadow-blue-900/10">
            <h3 className="text-2xl font-bold mb-8 text-white">Start Your Project</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Business Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Project Goal</label>
                <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-white">
                  <option>New Website</option>
                  <option>Redesign</option>
                  <option>Landing Page</option>
                  <option>Strategy Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="Tell us about your brand..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center shadow-lg shadow-blue-900/20">
                Send Request <ArrowRight className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
