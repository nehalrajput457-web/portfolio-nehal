import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our AI systems.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-surface border-accent' 
                  : 'bg-surface/50 border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg font-medium ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full ${openIndex === index ? 'bg-accent text-white' : 'bg-white/5 text-gray-400'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;