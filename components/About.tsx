import React from 'react';
import { Home, Bath, Hammer } from 'lucide-react';

const About: React.FC = () => {
  const categories = [
    {
      title: 'Kitchen Remodelers',
      icon: <Home className="text-accent" size={32} />,
      desc: 'High-ticket kitchen projects require trust. Our AI nurtures leads until they are ready to buy.'
    },
    {
      title: 'Bath Renovations',
      icon: <Bath className="text-accent" size={32} />,
      desc: 'Volume and speed matter. We automate the qualification so you focus on the best jobs.'
    },
    {
      title: 'Whole-Home Builds',
      icon: <Hammer className="text-accent" size={32} />,
      desc: 'Complex sales cycles made simple. Keep long-term prospects engaged automatically.'
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Who We Help</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Buildora AI specializes exclusively in the home improvement sector. We understand the nuances of remodeling sales cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;