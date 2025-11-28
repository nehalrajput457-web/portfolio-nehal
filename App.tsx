import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Projects />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;