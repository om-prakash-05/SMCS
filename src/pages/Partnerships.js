import React from 'react';
import { Link } from 'react-router-dom';

const Partnerships = () => {
  const partnerships = [
    {
      company: "Adani Power (Jaisalmer)",
      type: "Strategic Partnership",
      duration: "5+ Years",
      projects: ["Nedan Project", "Karaliya Project", "Power Infrastructure Development"],
      description: "Long-term strategic partnership with Adani Power for power infrastructure development and renewable energy projects in the Jaisalmer region.",
      highlights: ["Power plant construction", "Infrastructure development", "Technical expertise", "Quality delivery"],
      icon: "⚡"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Technical Expertise",
      icon: "🔧",
      description: "Deep technical knowledge in construction, solar energy, and power infrastructure development gained through extensive partnerships."
    },
    {
      title: "Quality Assurance",
      icon: "✅",
      description: "Proven track record of delivering high-quality projects that meet or exceed partner expectations and industry standards."
    },
    {
      title: "Timely Delivery",
      icon: "⏰",
      description: "Consistent on-time project completion demonstrating reliability and effective project management capabilities."
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "Collaborative approach to innovation, bringing cutting-edge solutions to complex construction and energy challenges."
    },
    {
      title: "Local Expertise",
      icon: "🏜️",
      description: "Deep understanding of Rajasthan's geography, climate, and regulatory environment, particularly valuable for desert-based projects."
    },
    {
      title: "Scalability",
      icon: "📈",
      description: "Proven ability to scale operations for large projects while maintaining quality and efficiency standards."
    }
  ];

  return (
    <div className="partnerships">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Partnerships</h1>
          <p>Building lasting relationships with industry leaders for exceptional project delivery</p>
        </div>
      </section>

      {/* Featured Partnership */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Strategic Partnerships</h2>
          {partnerships.map((partnership, index) => (
            <div key={index} className="card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="grid grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '3rem', marginRight: '1rem' }}>{partnership.icon}</span>
                    <div>
                      <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>{partnership.company}</h3>
                      <p style={{ color: '#e67e22', fontWeight: '600', margin: 0 }}>{partnership.type}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    {partnership.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p><strong>Partnership Duration:</strong> {partnership.duration}</p>
                  </div>
                  <Link to="/projects" className="btn">View Collaborative Projects</Link>
                </div>
                <div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Collaborative Projects:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {partnership.projects.map((project, i) => (
                      <li key={i} style={{ 
                        padding: '0.5rem 0', 
                        borderBottom: '1px solid #f0f0f0',
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                  <h4 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Key Highlights:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {partnership.highlights.map((highlight, i) => (
                      <span key={i} style={{
                        background: '#f8f9fa',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        color: '#2c3e50',
                        border: '1px solid #e1e5e9'
                      }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Why Choose SMCS as Your Partner?</h2>
          <div className="grid grid-3">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Success Metrics */}
      <section className="section stats">
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '3rem' }}>Partnership Success</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years with Adani Power</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Project Success Rate</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Major Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>450+</h3>
              <p>MW Collaborative Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Partnership Approach</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🤝 Collaborative Planning</h3>
              <p>We work closely with our partners from the initial planning phase to ensure alignment of goals, expectations, and project requirements. Our collaborative approach ensures that all stakeholders are involved in decision-making processes.</p>
            </div>
            <div className="card">
              <h3>📊 Transparent Communication</h3>
              <p>Regular updates, progress reports, and open communication channels ensure that our partners are always informed about project status, challenges, and achievements.</p>
            </div>
            <div className="card">
              <h3>🎯 Goal Alignment</h3>
              <p>We align our objectives with our partners' business goals to ensure mutual success and long-term value creation for all parties involved.</p>
            </div>
            <div className="card">
              <h3>🔄 Continuous Improvement</h3>
              <p>We believe in continuous learning and improvement, regularly reviewing our processes and incorporating feedback to enhance partnership effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Industry Recognition</h2>
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Trusted by Industry Leaders</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our partnership with Adani Power, one of India's largest private power producers, is a testament to our capabilities and reliability in the construction and renewable energy sector.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                This strategic alliance has enabled us to work on some of the most significant power infrastructure projects in Rajasthan, contributing to the region's energy security and economic development.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>🏆</span>
                  <span>Trusted partner for major power projects</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>🏆</span>
                  <span>Consistent quality and timely delivery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>🏆</span>
                  <span>Innovation in construction methodologies</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #e67e22, #f39c12)',
                borderRadius: '12px',
                padding: '3rem 2rem',
                color: 'white'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Strategic Partnerships</h3>
                <p style={{ opacity: '0.9' }}>Building the future together through collaboration and shared expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Partnership Opportunities</h2>
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Looking for Strategic Partners</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We are always open to forming new strategic partnerships with organizations that share our commitment to excellence, innovation, and sustainable development. Whether you're in the renewable energy sector, infrastructure development, or related industries, we welcome the opportunity to explore collaboration.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Partnership Areas:</h4>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50' }}>Solar Energy</span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50' }}>Power Infrastructure</span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50' }}>Construction</span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50' }}>Technology</span>
                <span style={{ background: '#e8f4f8', padding: '0.5rem 1rem', borderRadius: '25px', color: '#2c3e50' }}>Manufacturing</span>
              </div>
            </div>
            <Link to="/contact" className="btn" style={{ marginRight: '1rem' }}>Explore Partnership</Link>
            <Link to="/projects" className="btn btn-outline">View Our Capabilities</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #2c3e50, #3498db)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Build Success Together</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Ready to explore partnership opportunities? Let's discuss how we can collaborate to achieve mutual success.
          </p>
          <Link to="/contact" className="btn" style={{ marginRight: '1rem' }}>Contact Us</Link>
          <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;






