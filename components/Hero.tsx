import React from 'react';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">AI For Kitchen & Bath Remodelers</span>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Helping Remodelers Book <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            10–15 Qualified Appointments
          </span> <br className="hidden lg:block"/>
          Every Month
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          AI-powered lead qualification, automated follow-ups, and sales pipelines built specifically for kitchen, bath, and home remodeling companies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a 
            href="#cta"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-hover hover:scale-105 text-white rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2"
          >
            <Zap size={20} fill="currentColor" />
            Book a Consultation
          </a>
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-surface border border-white/10 hover:border-white/30 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            View Our Work
          </a>
          <a 
            href="#process"
            className="w-full sm:w-auto px-8 py-4 text-gray-300 hover:text-white font-medium transition-colors flex items-center justify-center gap-2 group"
          >
            <PlayCircle size={20} className="group-hover:text-secondary transition-colors" />
            See How We Help
          </a>
        </div>

        {/* Dashboard Mockup - Visual Only */}
        <div className="relative mx-auto max-w-6xl group perspective-1000">
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 h-2/3 bottom-0 top-auto"></div>
           
           {/* Glow behind dashboard */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-primary/30 to-secondary/30 blur-[60px] -z-10 rounded-full"></div>

           <div className="relative rounded-2xl border border-white/10 bg-[#0F0F16]/90 backdrop-blur-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
              {/* Header Bar */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-xs text-gray-500 font-mono w-64">
                   buildora-ai-dashboard.sys
                </div>
              </div>

              {/* Dashboard Content Mockup */}
              <div className="p-6 grid grid-cols-12 gap-6 bg-[#0B0B0F]">
                 {/* Sidebar */}
                 <div className="col-span-2 hidden md:block space-y-4">
                    <div className="h-8 w-24 bg-white/5 rounded mb-8"></div>
                    {[1,2,3,4,5].map(i => (
                       <div key={i} className="h-4 w-full bg-white/5 rounded-full"></div>
                    ))}
                 </div>

                 {/* Main Content */}
                 <div className="col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stat Cards */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                       <div className="text-gray-400 text-xs mb-2">Total Leads</div>
                       <div className="text-2xl font-bold text-white">412</div>
                       <div className="text-green-400 text-xs mt-1">+24% this month</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                       <div className="text-gray-400 text-xs mb-2">Booked Estimates</div>
                       <div className="text-2xl font-bold text-white">18</div>
                       <div className="text-green-400 text-xs mt-1">High Intent</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                       <div className="text-gray-400 text-xs mb-2">Pipeline Value</div>
                       <div className="text-2xl font-bold text-white">$482k</div>
                    </div>

                    {/* Chart Area */}
                    <div className="col-span-1 md:col-span-2 h-48 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden flex items-end px-4 gap-2 pb-4">
                        {[40, 60, 45, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-primary/50 to-secondary/50 rounded-t-sm" style={{height: `${h}%`}}></div>
                        ))}
                    </div>

                    {/* Active Leads List */}
                    <div className="col-span-1 h-48 rounded-xl bg-white/5 border border-white/5 p-4 space-y-3">
                       <div className="text-xs text-gray-400 uppercase font-bold mb-2">Live Activity</div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="text-xs text-white">New Lead: Kitchen Reno</div>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="text-xs text-white">Bot: Scheduled Call</div>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <div className="text-xs text-gray-400">SMS Sent: Follow-up</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;