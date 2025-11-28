import React from 'react';
import { CheckCircle2, BarChart3, Users, Calendar } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium mb-6">
              Command Center
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Remodeling Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Command Center</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A complete automation suite that handles lead capture, instant qualification, follow-up, nurturing, and appointment booking — without manual work.
            </p>

            <ul className="space-y-4">
              {[
                'Real-time lead scoring & qualification',
                'Automated SMS & Email nurturing sequences',
                'Visual sales pipeline board',
                'Direct calendar integration'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             {/* Abstract UI representation */}
             <div className="relative z-10 bg-[#0B0B0F] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <BarChart3 className="text-primary" /> Performance
                   </h3>
                   <div className="text-sm text-gray-500">Last 30 Days</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-surface p-4 rounded-xl border border-white/5">
                      <div className="text-gray-400 text-xs mb-1">Qualified Leads</div>
                      <div className="text-2xl font-bold text-white">42</div>
                   </div>
                   <div className="bg-surface p-4 rounded-xl border border-white/5">
                      <div className="text-gray-400 text-xs mb-1">Consultations</div>
                      <div className="text-2xl font-bold text-white">15</div>
                   </div>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>Recent Activity</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <Users size={14} />
                         </div>
                         <div>
                            <div className="text-white text-sm font-medium">New Lead: John D.</div>
                            <div className="text-xs text-gray-500">Kitchen Remodel • $50k+</div>
                         </div>
                      </div>
                      <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Qualified</span>
                   </div>
                   
                   <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                            <Calendar size={14} />
                         </div>
                         <div>
                            <div className="text-white text-sm font-medium">Consultation Booked</div>
                            <div className="text-xs text-gray-500">Tomorrow at 2:00 PM</div>
                         </div>
                      </div>
                      <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">Confirmed</span>
                   </div>
                </div>
             </div>

             {/* Background decoration elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;