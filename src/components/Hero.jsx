import React from 'react';
import { ArrowRight, Terminal, Database, Cpu } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="grid-overlay"></div>
      <div className="ambient-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="ambient-glow" style={{ bottom: '10%', right: '-10%', animationDelay: '-4s' }}></div>
      
      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for innovative projects</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="glow-text">Shreya Uvaraj</span>
          </h1>
          
          <h2 className="hero-subtitle">
            B.Tech Artificial Intelligence & Data Science Student
          </h2>
          
          <p className="hero-text">
            Passionate about Artificial Intelligence, Generative AI, Computer Vision, Data Science, and IoT — building practical solutions and exploring emerging technologies.
          </p>
          
          <div className="hero-buttons">
            <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
              Explore My Work
              <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Graphic Column */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            <svg viewBox="0 0 500 500" className="neural-svg" width="100%" height="100%" aria-hidden="true">
              {/* Grid / Circuit Lines */}
              <path d="M 50,250 L 450,250 M 250,50 L 250,450" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="2" />
              <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1" strokeDasharray="5,5" />
              <circle cx="250" cy="250" r="80" fill="none" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="2" />

              {/* Connections (Lines) */}
              <g className="connections" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1.5">
                <line x1="120" y1="180" x2="250" y2="100" className="pulse-line-1" />
                <line x1="120" y1="180" x2="250" y2="250" />
                <line x1="120" y1="320" x2="250" y2="250" />
                <line x1="120" y1="320" x2="250" y2="400" />
                <line x1="250" y1="100" x2="380" y2="180" />
                <line x1="250" y1="250" x2="380" y2="180" className="pulse-line-2" />
                <line x1="250" y1="250" x2="380" y2="320" />
                <line x1="250" y1="400" x2="380" y2="320" />
                <line x1="250" y1="100" x2="250" y2="250" />
                <line x1="250" y1="250" x2="250" y2="400" />
              </g>

              {/* Nodes */}
              <g className="nodes">
                {/* Center Node */}
                <circle cx="250" cy="250" r="16" fill="url(#grad-center)" className="node-pulse" />
                <circle cx="250" cy="250" r="8" fill="#06b6d4" />

                {/* Layer 1 Nodes */}
                <circle cx="120" cy="180" r="8" fill="#6366f1" />
                <circle cx="120" cy="320" r="8" fill="#8b5cf6" />
                
                {/* Layer 2 (Output) Nodes */}
                <circle cx="380" cy="180" r="8" fill="#8b5cf6" />
                <circle cx="380" cy="320" r="8" fill="#6366f1" />

                {/* Top/Bottom Core Nodes */}
                <circle cx="250" cy="100" r="10" fill="#06b6d4" />
                <circle cx="250" cy="400" r="10" fill="#6366f1" />
              </g>

              {/* Gradients */}
              <defs>
                <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                  <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
                </radialGradient>
              </defs>
            </svg>

            {/* Floating Tech Widgets */}
            <div className="visual-badge badge-top" aria-hidden="true">
              <Terminal size={16} className="badge-icon-1" />
              <span>Python & C</span>
            </div>
            
            <div className="visual-badge badge-right" aria-hidden="true">
              <Database size={16} className="badge-icon-2" />
              <span>Data Analytics</span>
            </div>

            <div className="visual-badge badge-left" aria-hidden="true">
              <Cpu size={16} className="badge-icon-3" />
              <span>IoT Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
