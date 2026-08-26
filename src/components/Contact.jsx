import React, { useState } from 'react';
import { Mail, Phone, Send, Info, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    // Simulate submission on frontend
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after a few seconds
    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-subtitle">Reach Out</h2>
        <h3 className="section-title">Contact Me</h3>
        
        <div className="contact-grid">
          {/* Left Column: Contact Cards */}
          <div className="contact-info-col">
            <h4 className="contact-info-title">Connect with Me</h4>
            <p className="contact-info-text">
              Feel free to get in touch. Whether you want to discuss AI technologies, ask questions about my IoT work, or explore potential opportunities, I am open to connecting.
            </p>
            
            <div className="contact-cards">
              <a href="mailto:shreyauvarj@gamil.com" className="glass-card contact-card-item">
                <div className="contact-icon-box email-box">
                  <Mail size={22} />
                </div>
                <div className="contact-item-details">
                  <span className="contact-label">Email Address</span>
                  <span className="contact-value">shreyauvarj@gamil.com</span>
                </div>
              </a>
              
              <a href="tel:9110423814" className="glass-card contact-card-item">
                <div className="contact-icon-box phone-box">
                  <Phone size={22} />
                </div>
                <div className="contact-item-details">
                  <span className="contact-label">Phone Number</span>
                  <span className="contact-value">9110423814</span>
                </div>
              </a>
            </div>
            
            <div className="form-info-banner">
              <Info size={16} className="info-icon" />
              <span>Preserved email domain <strong>gamil.com</strong> exactly as in profile record.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="glass-card contact-form">
              <h4 className="form-title">Send a Message</h4>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-input form-textarea"
                  placeholder="Your message details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Submit Message
                <Send size={16} />
              </button>

              <div className="form-disclaimer">
                * Note: This is a frontend simulation. Message dispatch requires backend integration.
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="alert-message alert-success">
                  <CheckCircle size={18} />
                  <span>Success! Your message was simulated successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="alert-message alert-error">
                  <Info size={18} />
                  <span>Please fill out all fields correctly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
