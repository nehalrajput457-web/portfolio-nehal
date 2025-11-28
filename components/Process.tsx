import React from 'react';
import { PROCESS_STEPS } from '../constants';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              How It Works
            </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our System</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven 3-step framework to turn strangers into booked consultations without manual effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-0"></div>

          {PROCESS_STEPS.map((step, idx) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (LucideIcons as any)[step.icon];

            return (
              <div key={step.id} className="relative z-10 group text-center">
                <div className="w-24 h-24 mx-auto bg-[#0B0B0F] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md group-hover:bg-primary/20 transition-all"></div>
                  {IconComponent && <IconComponent size={36} className="text-gray-300 group-hover:text-primary transition-colors" />}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
           <a 
            href="#results"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
           >
             See Results <ArrowRight size={18} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Process;