import React from 'react';
import { Terminal, Cpu, Database, Eye, Radio } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      icon: <Terminal size={24} className="skill-cat-icon icon-purple" />,
      skills: ["Python", "C"]
    },
    {
      category: "Artificial Intelligence",
      icon: <Cpu size={24} className="skill-cat-icon icon-cyan" />,
      skills: ["Artificial Intelligence", "Generative AI"]
    },
    {
      category: "Data",
      icon: <Database size={24} className="skill-cat-icon icon-indigo" />,
      skills: ["Data Science & Analytics"]
    },
    {
      category: "Computer Vision",
      icon: <Eye size={24} className="skill-cat-icon icon-pink" />,
      skills: ["Computer Vision", "Image Processing"]
    },
    {
      category: "IoT",
      icon: <Radio size={24} className="skill-cat-icon icon-yellow" />,
      skills: ["IoT & Smart Systems"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="ambient-glow" style={{ top: '20%', right: '10%' }}></div>
      
      <div className="container">
        <h2 className="section-subtitle">My Capabilities</h2>
        <h3 className="section-title">Technical Skills</h3>
        
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="glass-card skill-card" key={idx}>
              <div className="skill-card-header">
                <div className="skill-icon-box">
                  {cat.icon}
                </div>
                <h4 className="skill-category-title">{cat.category}</h4>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
