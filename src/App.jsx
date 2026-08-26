import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Interests from './components/Interests';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <CareerObjective />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
