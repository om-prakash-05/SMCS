import React from 'react';
import { Link } from 'react-router-dom';

const PublicContracts = () => {
  const publicSectorCapabilities = [
    {
      title: "Government Infrastructure",
      icon: "🏛️",
      description: "Schools, hospitals, government buildings, and administrative facilities",
      services: ["Educational Facilities", "Healthcare Infrastructure", "Administrative Buildings", "Public Utilities"]
    },
    {
      title: "Renewable Energy Projects",
      icon: "🌞",
      description: "Solar parks, wind farms, and renewable energy infrastructure for government initiatives",
      services: ["Solar Power Plants", "Grid Integration", "Energy Storage Systems", "Smart Grid Solutions"]
    },
    {
      title: "Transportation Infrastructure",
      icon: "🛣️",
      description: "Roads, bridges, public transportation facilities, and related infrastructure",
      services: ["Road Construction", "Bridge Development", "Public Transport Hubs", "Traffic Infrastructure"]
    },
    {
      title: "Public Housing Projects",
      icon: "🏘️",
      description: "Affordable housing, community centers, and residential infrastructure",
      services: ["Affordable Housing", "Community Centers", "Public Amenities", "Urban Development"]
    }
  ];

  const complianceStandards = [
    "Central Public Works Department (CPWD) Guidelines",
    "Bureau of Indian Standards (BIS) Compliance", 
    "Environmental Clearance Procedures",
    "Labor Law Compliance",
    "Safety Standards and Protocols",
    "Financial Transparency Requirements"
  ];

  const publicSectorAdvantages = [
    {
      title: "Regulatory Compliance",
      icon: "📋",
      description: "Deep understanding of government regulations, compliance requirements, and procurement processes for seamless project execution."
    },
    {
      title: "Transparent Operations",
      icon: "🔍",
      description: "Complete transparency in operations, pricing, and project management to meet public sector accountability standards."
    },
    {
      title: "Budget Efficiency",
      icon: "💰",
      description: "Cost-effective solutions that maximize value for public funds while maintaining highest quality standards."
    },
    {
      title: "Social Impact",
      icon: "🌍",
      description: "Commitment to projects that create positive social impact and contribute to community development."
    },
    {
      title: "Local Employment",
      icon: "👥",
      description: "Priority for local workforce development and skill building within the communities we serve."
    },
    {
      title: "Sustainable Development",
      icon: "♻️",
      description: "Focus on environmentally sustainable construction practices and renewable energy solutions."
    }
  ];

  return (
    <div className="public-contracts">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Public Contracts</h1>
          <p>Open and ready to collaborate with government agencies and public sector organizations</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Committed to Public Service</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Shree Moolpuri Construction and Supplier is actively seeking opportunities to work with government agencies, public sector undertakings, and municipal corporations. We understand the unique requirements of public projects and are committed to delivering exceptional value to taxpayers through quality construction and transparent operations.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: '#e67e22' }}>🏛️</div>
                <h4 style={{ color: '#2c3e50', margin: '0.5rem 0' }}>Government Ready</h4>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: '#e67e22' }}>✅</div>
                <h4 style={{ color: '#2c3e50', margin: '0.5rem 0' }}>Fully Compliant</h4>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: '#e67e22' }}>📊</div>
                <h4 style={{ color: '#2c3e50', margin: '0.5rem 0' }}>Transparent</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Sector Capabilities */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Public Sector Capabilities</h2>
          <div className="grid grid-2">
            {publicSectorCapabilities.map((capability, index) => (
              <div key={index} className="card">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '3rem' }}>{capability.icon}</span>
                  <h3 style={{ margin: '1rem 0 0.5rem', color: '#2c3e50' }}>{capability.title}</h3>
                  <p style={{ color: '#666', fontSize: '1.1rem' }}>{capability.description}</p>
                </div>
                <div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1rem' }}>Our Services Include:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {capability.services.map((service, i) => (
                      <div key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SMCS for Public Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose SMCS for Public Projects?</h2>
          <div className="grid grid-3">
            {publicSectorAdvantages.map((advantage, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Compliance & Standards</h2>
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Regulatory Compliance</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We maintain strict adherence to all government regulations, standards, and procurement guidelines. Our team is well-versed in public sector requirements and ensures full compliance throughout the project lifecycle.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                From tender preparation to project delivery, we follow transparent processes and maintain detailed documentation to meet all auditing and reporting requirements.
              </p>
              <Link to="/contact" className="btn">Discuss Your Project</Link>
            </div>
            <div>
              <div className="card">
                <h4 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Standards We Follow:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {complianceStandards.map((standard, index) => (
                    <li key={index} style={{ 
                      padding: '0.5rem 0',
                      borderBottom: index < complianceStandards.length - 1 ? '1px solid #f0f0f0' : 'none',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: '#27ae60', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                      <span style={{ fontSize: '0.95rem' }}>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Sector Project Types */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Public Sector Project Experience</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🌞 Renewable Energy for Government</h3>
              <p>Our expertise in solar energy makes us an ideal partner for government renewable energy initiatives, including:</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Solar power plants for government facilities</li>
                <li>Rural electrification through solar solutions</li>
                <li>Solar street lighting projects</li>
                <li>Off-grid solar systems for remote areas</li>
              </ul>
            </div>
            <div className="card">
              <h3>🏗️ Infrastructure Development</h3>
              <p>Comprehensive infrastructure services for public sector organizations:</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Government building construction</li>
                <li>Educational facility development</li>
                <li>Healthcare infrastructure</li>
                <li>Public utility installations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management for Public Sector */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Public Sector Project Management</h2>
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#e67e22' }}>📋</div>
              <h3>Transparent Planning</h3>
              <p>Detailed project planning with transparent timelines, milestones, and budget allocations that meet public sector requirements for accountability.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#e67e22' }}>📊</div>
              <h3>Regular Reporting</h3>
              <p>Comprehensive progress reports, financial statements, and milestone updates to keep all stakeholders informed throughout the project.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#e67e22' }}>✅</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes and third-party inspections to ensure all work meets or exceeds public sector standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Impact */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Community Impact & Social Responsibility</h2>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Building Communities</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Based in Jaisalmer, we understand the importance of local development and community engagement. Our public sector projects prioritize local employment, skill development, and sustainable community growth.
                </p>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>🏘️</span>
                    <span>Local workforce development</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>🎓</span>
                    <span>Skill training programs</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>🌱</span>
                    <span>Environmental sustainability</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#27ae60' }}>💰</span>
                    <span>Economic development</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #2c3e50, #3498db)',
                  borderRadius: '12px',
                  padding: '2rem',
                  color: 'white'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                  <h4 style={{ color: 'white', marginBottom: '1rem' }}>Community Partnership</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>
                    Committed to creating lasting positive impact in the communities we serve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #e67e22, #f39c12)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Partner with the Public Sector</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: '0.9' }}>
            We welcome opportunities to bid on public sector projects and collaborate with government agencies.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
            Contact us to discuss your public infrastructure needs and learn how we can contribute to your community development goals.
          </p>
          <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: '#e67e22', marginRight: '1rem' }}>
            Get in Touch
          </Link>
          <Link to="/projects" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
            View Our Capabilities
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PublicContracts;






