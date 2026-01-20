
import React from 'react';
import { Lock, Mail, Smartphone, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="glass p-10 rounded-[2.5rem] border border-white/10 text-center shadow-2xl shadow-blue-900/10">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-500 border border-blue-500/20">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">Client Access</h1>
          <p className="text-slate-400 mb-10">Securely manage your digital assets and campaign performance.</p>
          
          <div className="space-y-4">
            <button className="w-full py-4 px-6 bg-white text-black font-bold rounded-xl flex items-center justify-center hover:bg-slate-200 transition-all">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5 mr-3" alt="Google" />
              Continue with Google
            </button>
            
            <button className="w-full py-4 px-6 bg-zinc-900 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center hover:bg-white/5 transition-all">
              <Smartphone size={20} className="mr-3 text-blue-500" />
              Continue with Mobile OTP
            </button>
          </div>

          <div className="mt-10 pt-10 border-t border-white/5 text-sm text-slate-500">
            <div className="flex items-center justify-center mb-4">
              <Lock size={14} className="mr-2" />
              <span>Password-free. Faster. Safer.</span>
            </div>
            <p>Login credentials are securely recorded and managed in our private backend infrastructure.</p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { title: "Better UX", icon: <Zap size={14} /> },
            { title: "High Security", icon: <Lock size={14} /> },
            { title: "Easy Access", icon: <Smartphone size={14} /> }
          ].map((feat, i) => (
            <div key={i} className="flex flex-col items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              <div className="mb-2 text-blue-500">{feat.icon}</div>
              {feat.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
