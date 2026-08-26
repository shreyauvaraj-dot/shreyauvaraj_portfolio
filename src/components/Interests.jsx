import React from 'react';
import { Sparkles, Image, BarChart3, BrainCircuit, Cpu } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Generative AI",
      icon: <Sparkles size={24} className="interest-icon icon-purple" />,
      desc: "Exploring Large Language Models, text-to-image synthesis, and automated content generation techniques to understand creative and structural AI applications."
    },
    {
      title: "Computer Vision & Image Processing",
      icon: <Image size={24} className="interest-icon icon-pink" />,
      desc: "Analyzing visual data to solve classification, detection, and segmentation problems, and examining digital filter methods for image optimization."
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 size={24} className="interest-icon icon-indigo" />,
      desc: "Applying statistical methodologies, modeling techniques, and exploratory data tools to uncover underlying patterns and trends within dataset domains."
    },
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit size={24} className="interest-icon icon-cyan" />,
      desc: "Studying heuristic searching, neural architecture bases, and algorithmic approaches to construct models that learn from and adapt to environments."
    },
    {
      title: "IoT & Smart Systems",
      icon: <Cpu size={24} className="interest-icon icon-yellow" />,
      desc: "Integrating physical microcontrollers, sensors, and actuator modules with networking protocols to build automated, responsive hardware architectures."
    }
  ];

  return (
    <section id="interests" className="section interests-section">
      <div className="container">
        <h2 className="section-subtitle">Areas of Interest</h2>
        <h3 className="section-title">Focus & Fields</h3>
        
        <div className="interests-grid">
          {interests.map((item, idx) => (
            <div className="glass-card interest-card" key={idx}>
              <div className="interest-card-header">
                <div className="interest-icon-box">
                  {item.icon}
                </div>
                <h4 className="interest-card-title">{item.title}</h4>
              </div>
              <p className="interest-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
