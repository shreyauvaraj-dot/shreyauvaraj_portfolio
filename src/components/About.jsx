import React from 'react';
import { BookOpen, Code, Compass, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <BookOpen className="highlight-icon" size={20} />,
      title: "Education",
      desc: "B.Tech – AI & Data Science",
      subDesc: "Currently Pursuing"
    },
    {
      icon: <Code className="highlight-icon" size={20} />,
      title: "Core Programming",
      desc: "Python & C",
      subDesc: "Problem Solving"
    },
    {
      icon: <Compass className="highlight-icon" size={20} />,
      title: "Emerging Tech Focus",
      desc: "Generative AI & CV",
      subDesc: "Research & Projects"
    },
    {
      icon: <Heart className="highlight-icon" size={20} />,
      title: "Interests",
      desc: "IoT & Smart Systems",
      subDesc: "Automation & Robotics"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-subtitle">Get To Know Me</h2>
        <h3 className="section-title">About Me</h3>
        
        <div className="about-grid">
          {/* Left Column: Personal Introduction */}
          <div className="about-info-col">
            <h4 className="info-title">Motivated AI & Data Science Student</h4>
            <p className="info-text">
              I am a motivated and enthusiastic B.Tech student specializing in **Artificial Intelligence and Data Science**, with a strong interest in emerging technologies and practical problem-solving.
            </p>
            <p className="info-text">
              My academic journey centers around building an analytical mind and implementing software-hardware systems. I find great satisfaction in transforming complex datasets into meaningful insights and creating smart, interconnected applications that address real-world challenges.
            </p>
            <div className="tech-quote">
              <span className="quote-mark">“</span>
              <p className="quote-text">
                Developing systems with emerging technologies to make an impact.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Highlights */}
          <div className="about-highlights-col">
            <div className="highlights-grid">
              {highlights.map((item, idx) => (
                <div className="glass-card highlight-card" key={idx}>
                  <div className="highlight-header">
                    <div className="highlight-icon-wrapper">
                      {item.icon}
                    </div>
                    <h5 className="highlight-card-title">{item.title}</h5>
                  </div>
                  <p className="highlight-desc">{item.desc}</p>
                  <p className="highlight-subdesc">{item.subDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
