import React from 'react';
import { Cpu, Terminal, ShieldAlert, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automated Toll System – IoT Project",
      category: "IoT & Automation",
      icon: <Cpu className="proj-icon text-cyan" size={32} />,
      desc: "Developed an IoT-based automated toll system designed to automate the toll collection process using electronic components and sensors. The project provided practical experience in IoT concepts, hardware integration, automation, and system development.",
      tags: ["IoT", "Automation", "Sensors", "Hardware Integration"]
    },
    {
      title: "Python & C Mini Projects",
      category: "Software Development",
      icon: <Terminal className="proj-icon text-purple" size={32} />,
      desc: "Completed several mini projects and programming exercises using Python and C, strengthening problem-solving abilities, programming fundamentals, logical thinking, and practical implementation skills.",
      tags: ["Python", "C", "Programming", "Problem Solving"]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-subtitle">Academic Projects</h2>
        <h3 className="section-title">My Projects</h3>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="glass-card project-card" key={idx}>
              <div className="project-header">
                <div className="proj-icon-wrapper">
                  {proj.icon}
                </div>
                <span className="proj-category">{proj.category}</span>
              </div>
              
              <h4 className="project-title">{proj.title}</h4>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="project-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span className="proj-tag" key={tIdx}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
