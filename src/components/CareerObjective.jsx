import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const CareerObjective = () => {
  return (
    <section className="section objective-section">
      {/* Visual background elements */}
      <div className="grid-overlay"></div>
      <div className="ambient-glow" style={{ top: '25%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '-1s' }}></div>
      
      <div className="container objective-container">
        <div className="glass-card objective-card">
          <div className="objective-icon-wrapper" aria-hidden="true">
            <Target size={32} className="objective-icon" />
          </div>
          
          <h2 className="objective-title">Career Objective</h2>
          
          <p className="objective-text">
            To build a strong career in **Artificial Intelligence and Data Science** by continuously developing technical and analytical skills, working on innovative projects, and applying emerging technologies such as **Generative AI** and **Computer Vision** to solve real-world problems.
          </p>
          
          <div className="objective-accents" aria-hidden="true">
            <div className="accent-bar"></div>
            <div className="accent-node-group">
              <span className="accent-node"></span>
              <span className="accent-node text-cyan-node"></span>
              <span className="accent-node text-violet-node"></span>
            </div>
            <div className="accent-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerObjective;
