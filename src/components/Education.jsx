import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="ambient-glow" style={{ bottom: '10%', left: '5%', animationDelay: '-2s' }}></div>
      <div className="grid-overlay"></div>
      
      <div className="container">
        <h2 className="section-subtitle">Academic Background</h2>
        <h3 className="section-title">Education</h3>
        
        <div className="education-timeline">
          {/* Vertical axis line */}
          <div className="timeline-line"></div>
          
          {/* Timeline Node */}
          <div className="timeline-item">
            {/* Timeline Marker */}
            <div className="timeline-marker">
              <GraduationCap size={20} className="marker-icon" />
            </div>
            
            {/* Timeline content card */}
            <div className="glass-card timeline-card">
              <div className="card-badge">Current Studies</div>
              
              <h4 className="degree-title">Bachelor of Technology (B.Tech)</h4>
              <h5 className="specialization-title">Artificial Intelligence and Data Science</h5>
              
              <div className="timeline-details">
                <div className="detail-item">
                  <Calendar size={16} />
                  <span>Currently Pursuing</span>
                </div>
                <div className="detail-item">
                  <MapPin size={16} />
                  <span>Undergraduate Program</span>
                </div>
              </div>
              
              <div className="education-desc">
                <p>
                  Specializing in theoretical foundations and computational practices of modern AI systems. The coursework covers artificial intelligence methodologies, database management systems, data visualization, and the integration of hardware-software paradigms such as the Internet of Things (IoT).
                </p>
              </div>

              <div className="education-focus-areas">
                <span className="focus-tag">Neural Foundations</span>
                <span className="focus-tag">Data Analytics</span>
                <span className="focus-tag">IoT Interfaces</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
