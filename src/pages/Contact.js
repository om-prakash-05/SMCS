import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Inquiry from SMCS Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:smcskapuriya@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us to discuss your construction and solar energy needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <div className="contact-item">
                  <strong>Company:</strong> Shree Moolpuri Construction and Supplier
                </div>
                <div className="contact-item">
                  <strong>Managing Director:</strong> Mr. Tejaram Kumawat
                </div>
                <div className="contact-item">
                  <strong>Email:</strong> smcskapuriya@gmail.com
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> Jaisalmer, Rajasthan, India
                </div>
                <div className="contact-item">
                  <strong>Specialization:</strong> Construction & Solar Energy
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Why Contact Us?</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#e67e22' }}>🌞</span>
                    <span>Solar energy project consultation</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#e67e22' }}>🏗️</span>
                    <span>Construction project quotes</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#e67e22' }}>🤝</span>
                    <span>Partnership opportunities</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#e67e22' }}>🏛️</span>
                    <span>Public sector collaborations</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="Solar Energy Project Inquiry">Solar Energy Project Inquiry</option>
                    <option value="Construction Project Quote">Construction Project Quote</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Public Sector Collaboration">Public Sector Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }}>
                  Send Message
                </button>
                
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem', textAlign: 'center' }}>
                  This will open your email client with our address pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Service Areas</h2>
          <div className="grid grid-3">
            <div className="feature-item">
              <div className="feature-icon">🌞</div>
              <h3>Solar Energy Projects</h3>
              <p>Complete solar installation services from planning to commissioning. We handle residential, commercial, and industrial solar projects.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏗️</div>
              <h3>Construction Services</h3>
              <p>Full-service construction including commercial buildings, industrial facilities, and infrastructure development.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Partnership Projects</h3>
              <p>Collaborative projects with major corporations and public sector organizations for large-scale developments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Expertise */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Located in Jaisalmer, Rajasthan</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Strategically located in Jaisalmer, Rajasthan, we have deep expertise in desert construction and solar energy projects. Our understanding of the local climate, terrain, and regulatory environment makes us the ideal partner for projects in Rajasthan and surrounding regions.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                We serve clients across Rajasthan and have successfully completed projects in collaboration with major companies like Adani Power, demonstrating our capability to handle large-scale industrial and renewable energy projects.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50', fontSize: '0.9rem' }}>
                  Jaisalmer Expertise
                </span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50', fontSize: '0.9rem' }}>
                  Desert Construction
                </span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50', fontSize: '0.9rem' }}>
                  Solar Specialization
                </span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50', fontSize: '0.9rem' }}>
                  Rajasthan Coverage
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                borderRadius: '12px',
                padding: '3rem 2rem',
                color: 'white'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏜️</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Jaisalmer Based</h3>
                <p style={{ opacity: '0.9' }}>Expert in desert construction and solar energy solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Types */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">What Can We Help You With?</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🔍 Project Planning & Consultation</h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Site assessment and feasibility studies</li>
                <li>Project design and engineering</li>
                <li>Cost estimation and budgeting</li>
                <li>Timeline and milestone planning</li>
                <li>Regulatory compliance consultation</li>
              </ul>
            </div>
            <div className="card">
              <h3>📋 Project Execution & Management</h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Construction and installation services</li>
                <li>Project management and coordination</li>
                <li>Quality assurance and control</li>
                <li>Safety management and compliance</li>
                <li>Post-completion support and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Quick Response Guarantee</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We understand that time is crucial for your projects. Our team is committed to responding to all inquiries within 24 hours during business days. For urgent matters, please mention "URGENT" in your subject line.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2rem', color: '#e67e22', marginBottom: '0.5rem' }}>⚡</div>
                <h4 style={{ color: '#2c3e50', margin: '0.5rem 0' }}>24 Hour Response</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Standard inquiries</p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', color: '#e67e22', marginBottom: '0.5rem' }}>🚨</div>
                <h4 style={{ color: '#2c3e50', margin: '0.5rem 0' }}>Same Day Response</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Urgent matters</p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', color: '#e67e22', marginBottom: '0.5rem' }}>🤝</div>
                <h4 style={{ color: '#2c3e50', margin: '0.5rem 0' }}>Personal Meeting</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Available upon request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #2c3e50, #3498db)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Contact Shree Moolpuri Construction and Supplier today. Let's discuss how we can bring your construction and solar energy vision to life.
          </p>
          <a href="mailto:smcskapuriya@gmail.com" className="btn" style={{ marginRight: '1rem' }}>
            Email Us Directly
          </a>
          <a href="mailto:smcskapuriya@gmail.com?subject=Urgent Inquiry&body=Hello SMCS Team,%0D%0A%0D%0AThis is an urgent inquiry regarding:" className="btn btn-outline">
            Urgent Inquiry
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;






