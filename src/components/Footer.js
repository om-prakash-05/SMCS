import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shree Moolpuri Construction & Supplier</h3>
            <p>Leading construction company based in Jaisalmer, Rajasthan, specializing in solar energy projects and infrastructure development.</p>
            <div className="footer-contact">
              <p><strong>Managing Director:</strong> Mr. Tejaram Kumawat</p>
              <p><strong>Email:</strong> smcskapuriya@gmail.com</p>
              <p><strong>Location:</strong> Jaisalmer, Rajasthan</p>  
              <p><strong>GstIn:</strong> 08BCQPK5064H1Z8</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
              <li><Link to="/public-contracts">Public Contracts</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Expertise</h4>
            <ul className="footer-links">
              <li>Solar Energy Projects</li>
              <li>Construction Services</li>
              <li>Infrastructure Development</li>
              <li>Power Plant Construction</li>
              <li>Public Sector Projects</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Major Projects</h4>
            <ul className="footer-links">
              <li>450 MW Solar Project - Rewari</li>
              <li>Nedan Project - Adani Power</li>
              <li>Karaliya Project - Adani Power</li>
              <li>Jaisalmer Solar Installations</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Shree Moolpuri Construction and Supplier. All rights reserved.</p>
            <p>Proudly serving from Jaisalmer, Rajasthan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






