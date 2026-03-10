import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Shree Moolpuri Construction & Supplier and our journey in the construction industry</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Shree Moolpuri Construction and Supplier (SMCS) is a leading construction company based in the historic city of Jaisalmer, Rajasthan. Founded with a vision to contribute to India's infrastructure development and renewable energy goals, we have established ourselves as a trusted name in the construction industry.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our expertise spans across various sectors including solar energy installations, power plant construction, commercial buildings, and infrastructure development. We take pride in our ability to handle complex projects while maintaining the highest standards of quality and safety.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Located in Jaisalmer, we leverage our deep understanding of the local terrain and climate conditions, especially valuable for solar energy projects in Rajasthan's desert environment.
              </p>
              <Link to="/projects" className="btn">Explore Our Projects</Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #f39c12, #e67e22)', 
                borderRadius: '12px', 
                padding: '3rem 2rem', 
                color: 'white',
                fontSize: '6rem'
              }}>
                🏗️
              </div>
              <h3 style={{ marginTop: '1rem', color: '#2c3e50' }}>Excellence in Construction</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Leadership & Management</h2>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src="/Tejaram-preview.png" 
                  alt="Mr. Tejaram Kumawat - Managing Director" 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    margin: '0 auto 1.5rem',
                    display: 'block',
                    border: '5px solid #e67e22',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Mr. Tejaram Kumawat</h3>
                <p style={{ color: '#e67e22', fontWeight: '600', fontSize: '1.1rem' }}>Managing Director</p>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Mr. Tejaram Kumawat, the visionary Managing Director of SMCS, brings over 15 years of experience in the construction and renewable energy sector. His leadership has been instrumental in establishing SMCS as a premier construction company in Rajasthan.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Under his guidance, the company has successfully forged strategic partnerships with industry leaders like Adani Power and has completed numerous high-profile projects including the 450 MW solar installation in Rewari.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  His commitment to innovation, quality, and sustainable development continues to drive SMCS towards new heights in the construction industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>
          <div className="grid grid-2">
            <div className="card">
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
                To deliver exceptional construction and solar energy solutions that contribute to India's infrastructure development and renewable energy goals, while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🌟</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Vision</h3>
              <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
                To be the most trusted and innovative construction company in Rajasthan, leading the way in sustainable construction practices and renewable energy infrastructure development across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-3">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every project, ensuring superior quality and attention to detail in all our construction endeavors.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We are committed to sustainable construction practices and contributing to India's renewable energy future.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>We embrace cutting-edge technologies and innovative solutions to deliver superior results for our clients.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Safety</h3>
              <p>Safety is our top priority, ensuring the well-being of our workforce and the communities we serve.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Reliability</h3>
              <p>We deliver projects on time and within budget, maintaining our reputation as a dependable construction partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Experience & Expertise</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🌞 Solar Energy Specialization</h3>
              <p>With extensive experience in solar installations, we understand the unique challenges and opportunities in Rajasthan's desert climate. Our team has successfully completed large-scale solar projects including the 450 MW installation in Rewari.</p>
            </div>
            <div className="card">
              <h3>🏭 Industrial Construction</h3>
              <p>Our expertise in industrial construction includes power plant development, manufacturing facilities, and complex infrastructure projects that require precision engineering and adherence to strict quality standards.</p>
            </div>
            <div className="card">
              <h3>🏢 Commercial Projects</h3>
              <p>From office buildings to retail spaces, we deliver commercial construction projects that meet modern business needs while incorporating sustainable design principles.</p>
            </div>
            <div className="card">
              <h3>🤝 Partnership Excellence</h3>
              <p>Our successful collaboration with Adani Power on multiple projects demonstrates our ability to work effectively with major corporations and deliver results that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #34495e, #2c3e50)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Partner With Us</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Ready to work with a trusted construction partner? Let's discuss how we can bring your vision to life.
          </p>
          <Link to="/contact" className="btn" style={{ marginRight: '1rem' }}>Contact Us</Link>
          <Link to="/partnerships" className="btn btn-outline">View Partnerships</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

