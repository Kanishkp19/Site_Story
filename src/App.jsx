import React from 'react';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Portfolio from './components/Portfolio.jsx';
import AddOns from './components/AddOns.jsx';
import Process from './components/Process.jsx';
import Terms from './components/Terms.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import PageTransition from './components/PageTransition.jsx';
import useLenis from './hooks/useLenis.js';
import useSmoothAnchors from './hooks/useSmoothAnchors.js';

export default function App() {
  useLenis();
  useSmoothAnchors();

  return (
    <>
      <ScrollProgress />
      <PageTransition />
      <Cursor />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Portfolio />
      <AddOns />
      <Process />
      <Terms />
      <CTA />
      <Footer />
    </>
  );
}
