import React from 'react';
import { Cpu, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
              <Cpu size={18} />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              Buildora <span className="text-primary">AI</span>
            </span>
          </div>

          <div className="flex gap-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</a>
            <a href="#process" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</a>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Buildora AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;