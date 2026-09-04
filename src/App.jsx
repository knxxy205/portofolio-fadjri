import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TextParallax from './components/TextParallax';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubGraph from './components/GithubGraph';
import Projects from './components/Projects';
import IntroLoader from './components/IntroLoader';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <IntroLoader />
      <div className="min-h-screen bg-cream text-main font-body selection:bg-accent-coral selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TextParallax />
        <Skills />
        <Projects />
              <GithubGraph />
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
