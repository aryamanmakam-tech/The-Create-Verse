
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter text-white mb-6 block">
              THECREATE<span className="text-blue-500">VERSE</span>
            </Link>
            <p className="text-slate-400 text-lg max-w-sm mb-8">
              AI-Powered Creative Agency. Building high-performing digital assets that act as growth machines for your brand.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all border border-white/5">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all border border-white/5">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Connect</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center group cursor-pointer hover:text-blue-400 transition-colors">
                Instagram <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="flex items-center group cursor-pointer hover:text-blue-400 transition-colors">
                LinkedIn <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="flex items-center group cursor-pointer hover:text-blue-400 transition-colors">
                Twitter <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 TheCreateVerse. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
