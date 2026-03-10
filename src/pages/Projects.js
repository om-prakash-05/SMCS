import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const majorProjects = [
    {
      title: "450 MW Solar Project - Rewari",
      location: "Rewari, Jaisalmer",
      capacity: "450 MW",
      status: "Completed",
      description: "One of the largest solar installations in the region, this project demonstrates our capability in handling massive renewable energy infrastructure. The project contributes significantly to India's renewable energy goals.",
      highlights: ["Large-scale solar installation", "Advanced photovoltaic technology", "Grid-connected power generation", "Environmental sustainability"],
      icon: "☀️"
    },
    {
      title: "Nedan Project - Adani Power",
      location: "Jaisalmer, Rajasthan",
      client: "Adani Power (Jaisalmer)",
      status: "Completed",
      description: "Strategic partnership project with Adani Power focusing on power infrastructure development. This project showcases our ability to work with industry leaders on complex power generation facilities.",
      highlights: ["Power infrastructure", "Industrial construction", "Strategic partnership", "Quality execution"],
      icon: "⚡"
    },
    {
      title: "Karaliya Project - Adani Power",
      location: "Jaisalmer, Rajasthan", 
      client: "Adani Power (Jaisalmer)",
      status: "Completed",
      description: "Another successful collaboration with Adani Power, reinforcing our position as a trusted construction partner for major power sector projects in the region.",
      highlights: ["Power sector expertise", "Timely delivery", "Quality standards", "Long-term partnership"],
      icon: "🔌"
    }
  ];

  const projectCategories = [
    {
      title: "Solar Energy Projects",
      icon: "🌞",
      description: "Large-scale solar installations, residential solar systems, and commercial solar solutions",
      projects: ["450 MW Solar Farm - Rewari", "Commercial Solar Installations", "Residential Solar Systems", "Grid-tie Solar Projects"]
    },
    {
      title: "Power Infrastructure",
      icon: "⚡",
      description: "Power plant construction, electrical infrastructure, and energy distribution systems",
      projects: ["Nedan Power Project", "Karaliya Power Development", "Electrical Grid Infrastructure", "Power Distribution Systems"]
    },
    {
      title: "Industrial Construction",
      icon: "🏭",
      description: "Manufacturing facilities, industrial complexes, and specialized industrial infrastructure",
      projects: ["Manufacturing Plants", "Industrial Warehouses", "Processing Facilities", "Industrial Infrastructure"]
    },
    {
      title: "Commercial Buildings",
      icon: "🏢",
      description: "Office complexes, retail spaces, and commercial infrastructure development",
      projects: ["Office Buildings", "Retail Centers", "Commercial Complexes", "Mixed-use Developments"]
    }
  ];

  return (
    <div className="projects">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Showcasing our expertise in construction and solar energy infrastructure development</p>
        </div>
      </section>

      {/* Major Projects Showcase */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Major Project Highlights</h2>
          <div className="grid">
            {majorProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <span style={{ fontSize: '4rem' }}>{project.icon}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <p><strong>Location:</strong> {project.location}</p>
                    {project.capacity && <p><strong>Capacity:</strong> {project.capacity}</p>}
                    {project.client && <p><strong>Client:</strong> {project.client}</p>}
                    <p><strong>Status:</strong> <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{project.status}</span></p>
                  </div>
                  <p style={{ margin: '1rem 0' }}>{project.description}</p>
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem', fontSize: '1rem' }}>Key Highlights:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} style={{ padding: '0.2rem 0', color: '#666', fontSize: '0.9rem' }}>
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Expertise Areas</h2>
          <div className="grid grid-2">
            {projectCategories.map((category, index) => (
              <div key={index} className="card">
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
                  {category.icon}
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{category.title}</h3>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#666' }}>
                  {category.description}
                </p>
                <div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem', fontSize: '1rem' }}>Recent Projects:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {category.projects.map((project, i) => (
                      <li key={i} style={{ padding: '0.3rem 0', color: '#666', fontSize: '0.9rem' }}>
                        ✓ {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section stats">
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '3rem' }}>Project Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>450+</h3>
              <p>MW Solar Capacity Installed</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>On-time Delivery Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technology & Innovation</h2>
          <div className="grid grid-3">
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3>Advanced Equipment</h3>
              <p>State-of-the-art construction equipment and modern technology for efficient project execution and superior quality results.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Project Management</h3>
              <p>Modern project management tools and methodologies ensuring timely delivery and optimal resource utilization.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>Environmentally conscious construction practices and renewable energy focus contributing to a greener future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Quality Assurance</h2>
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Our Quality Standards</h3>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✅</span>
                  <span>ISO 9001:2015 Quality Management Systems</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✅</span>
                  <span>Strict adherence to safety protocols</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✅</span>
                  <span>Regular quality audits and inspections</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✅</span>
                  <span>Certified materials and equipment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✅</span>
                  <span>Skilled and certified workforce</span>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Project Lifecycle</h3>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px', border: '2px solid #e67e22' }}>
                  <strong style={{ color: '#e67e22' }}>1. Planning & Design</strong>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>Comprehensive project planning and detailed engineering design</p>
                </div>
                <div style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px', border: '2px solid #3498db' }}>
                  <strong style={{ color: '#3498db' }}>2. Execution</strong>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>Professional execution with quality control at every stage</p>
                </div>
                <div style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px', border: '2px solid #27ae60' }}>
                  <strong style={{ color: '#27ae60' }}>3. Delivery & Support</strong>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>Timely delivery with ongoing maintenance and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #e67e22, #f39c12)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Let's discuss your construction and solar energy needs. Our team is ready to deliver exceptional results.
          </p>
          <Link to="/contact" className="btn" style={{ backgroundColor: '#2c3e50', color: 'white', marginRight: '1rem', textDecoration: 'none', fontWeight: '500', border: 'none', padding: '12px 30px', borderRadius: '6px' }}>Get a Quote</Link>
          <Link to="/partnerships" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', textDecoration: 'none', fontWeight: '500' }}>View Partnerships</Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;


