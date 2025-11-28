import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Expanded Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">All Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our complete range of AI automation deployments across the remodeling industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-[#0B0B0F] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a href="#results" className="inline-flex items-center gap-2 text-secondary hover:text-white text-sm font-medium transition-colors">
                  View Results <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;