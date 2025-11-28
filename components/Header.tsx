import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
            <Cpu size={24} />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            Buildora <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#cta"
            className="px-5 py-2.5 bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary rounded-full text-sm font-medium text-white transition-all duration-300 backdrop-blur-sm"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl z-50">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#cta"
            className="mt-2 text-center py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;