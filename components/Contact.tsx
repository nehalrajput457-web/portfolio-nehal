import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks! We will be in touch shortly to schedule your consultation.');
    setFormState({ name: '', email: '', phone: '' });
  };

  return (
    <section id="cta" className="py-24 relative bg-background overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-surface to-background -z-20"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Get Your First <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">10 AI-Qualified Leads</span> for Free
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          No contracts. No retainers. Just results. Stop chasing leads and start closing them.
        </p>

        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-4">
            <div>
              <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                placeholder="Company Name"
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                placeholder="Work Email Address"
                required
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                placeholder="Phone Number"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Zap size={20} fill="currentColor" />
              Get Started / Book Consultation
            </button>
            
            <p className="text-xs text-gray-500 mt-4">
              By clicking above, you agree to our Terms. Your data is secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;