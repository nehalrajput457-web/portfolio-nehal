import React from 'react';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Proven Results</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just promise appointments; we deliver measurable revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:translate-y-[-5px] transition-transform duration-300">
               <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{study.client}</h3>
                    <div className="flex gap-2">
                        {study.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <TrendingUp className="text-secondary" />
               </div>
               
               <div className="mb-6">
                  <span className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                      {study.metric}
                  </span>
               </div>
               
               <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  "{study.description}"
               </p>
               
               <a href="#cta" className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors text-sm border-b border-transparent hover:border-primary pb-0.5">
                  Request Full Breakdown <ArrowRight size={16} />
               </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;