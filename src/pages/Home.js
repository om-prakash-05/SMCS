import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Shree Moolpuri Construction & Supplier</h1>
            <p className="hero-subtitle">Leading Construction Excellence in Jaisalmer, Rajasthan</p>
            <p>Specializing in solar energy projects, infrastructure development, and premium construction services. Trusted partner of Adani Power with a proven track record in large-scale renewable energy installations.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/projects" className="btn" style={{ marginRight: '1rem' }}>View Our Projects</Link>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose SMCS?</h2>
          <div className="grid grid-3">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Solar Energy Expertise</h3>
              <p>Specialized in large-scale solar installations including the prestigious 450 MW solar project in Rewari, demonstrating our capability in renewable energy infrastructure.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏗️</div>
              <h3>Premium Construction</h3>
              <p>Delivering high-quality construction services with attention to detail and commitment to excellence in every project we undertake.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Trusted Partnerships</h3>
              <p>Proud collaborator with Adani Power (Jaisalmer) on multiple significant projects including Nedan and Karaliya developments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>450+</h3>
              <p>MW Solar Capacity</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🌞 Solar Energy Projects</h3>
              <p>Complete solar installation services from planning to execution. We handle large-scale solar farms, residential installations, and commercial solar solutions with cutting-edge technology and expert craftsmanship.</p>
              <Link to="/projects" className="btn" style={{ marginTop: '1rem' }}>View Solar Projects</Link>
            </div>
            <div className="card">
              <h3>🏢 Infrastructure Development</h3>
              <p>Comprehensive construction services including power plant construction, commercial buildings, and industrial facilities. Our expertise extends to complex infrastructure projects requiring precision and reliability.</p>
              <Link to="/projects" className="btn" style={{ marginTop: '1rem' }}>View Infrastructure</Link>
            </div>
            <div className="card">
              <h3>🤝 Partnership Projects</h3>
              <p>Strategic collaborations with major corporations like Adani Power. We bring technical expertise and local knowledge to deliver exceptional results on large-scale industrial projects.</p>
              <Link to="/partnerships" className="btn" style={{ marginTop: '1rem' }}>Our Partnerships</Link>
            </div>
            <div className="card">
              <h3>🏛️ Public Sector Contracts</h3>
              <p>Open and ready to work with government agencies and public sector organizations. We understand the unique requirements of public projects and deliver with transparency and accountability.</p>
              <Link to="/public-contracts" className="btn" style={{ marginTop: '1rem' }}>Public Contracts</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Leadership</h2>
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <img 
              src="/Tejaram-preview.png" 
              alt="Mr. Tejaram Kumawat - Managing Director" 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                marginBottom: '1rem',
                border: '4px solid #e67e22'
              }} 
            />
            <h3>Mr. Tejaram Kumawat</h3>
            <p style={{ fontSize: '1.1rem', color: '#e67e22', fontWeight: '500', marginBottom: '1rem' }}>Managing Director</p>
            <p>Under the visionary leadership of Mr. Tejaram Kumawat, SMCS has established itself as a premier construction company in Rajasthan. His commitment to excellence and innovation has driven the company to successfully complete numerous high-profile projects including collaborations with industry leaders like Adani Power.</p>
            <Link to="/about" className="btn" style={{ marginTop: '1.5rem' }}>Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #2c3e50, #3498db)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Start Your Next Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Contact us today to discuss your construction and solar energy needs. 
            We're here to turn your vision into reality with our expertise and dedication.
          </p>
          <Link to="/contact" className="btn" style={{ marginRight: '1rem', background: '#e67e22', border: 'none' }}>Get a Quote</Link>
          <Link to="/projects" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>View Our Portfolio</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

