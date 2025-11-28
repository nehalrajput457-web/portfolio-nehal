import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Show only first 3 projects for the highlights section
  const highlightProjects = PROJECTS.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Real results for real remodeling businesses. See how we've deployed AI to scale operations.
            </p>
          </div>
          <a href="#projects" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center gap-2 transition-colors">
            View All Projects <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 -mt-10">
                <div className="bg-surface border border-white/5 p-6 rounded-xl shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                    </p>
                    {/* View Case Study goes to results section as per flow */}
                    <a href="#results" className="text-sm font-semibold text-secondary hover:text-white flex items-center gap-1 transition-colors">
                    View Case Study <ArrowUpRight size={16} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;