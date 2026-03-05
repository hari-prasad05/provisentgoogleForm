import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import DomainMarquee from './components/DomainMarquee';
import ImageGrid from './components/ImageGrid';
import Benefits from './components/Benefits';
import ScholarshipStatus from './components/ScholarshipStatus';
import ProgramDetails from './components/ProgramDetails';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <div className="min-h-screen bg-white relative selection:bg-primary selection:text-white">
      <ParallaxBackground />
      <Header />
      <main className="relative z-10">
        <TrustSection />
        <Hero />
        <DomainMarquee />
        <ImageGrid />
        <Benefits />
        <ScholarshipStatus />
        <ProgramDetails />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
