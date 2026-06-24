import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--color-secondary)', 
        color: 'var(--color-text-dark)', 
        paddingTop: '6rem', 
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(42, 51, 58, 0.1)'
      }}
    >
      <Container>
        {/* Large Brand Presentation */}
        <Row className="mb-5 align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <span 
              className="font-serif-display text-uppercase display-5 d-block"
              style={{ letterSpacing: '0.15em', fontWeight: '500' }}
            >
              COASTAL ATELIER
            </span>
            <span 
              className="text-uppercase text-muted-custom" 
              style={{ 
                letterSpacing: '0.4em', 
                fontSize: '0.75rem', 
                fontWeight: '500' 
              }}
            >
              Interior Architecture & Bespoke Living
            </span>
          </Col>
          <Col md={6}>
            <p className="editorial-subtitle mb-0 text-md-end" style={{ maxWidth: '480px', marginLeft: 'auto' }}>
              Crafting calm, elevated residential and commercial architectures that respond to geography, light, and the human spirit.
            </p>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(42, 51, 58, 0.15)', margin: '3rem 0' }} />

        {/* Info Grid */}
        <Row className="gy-4">
          {/* Newsletter section */}
          <Col lg={4} md={12} className="pe-lg-5">
            <h5 
              className="text-uppercase font-sans-alt mb-3" 
              style={{ fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: '600' }}
            >
              The Atelier Journal
            </h5>
            <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
              Subscribe to receive exclusive insights into architecture, custom material collections, and seasonal style editorials.
            </p>
            <Form onSubmit={handleSubscribe} className="position-relative d-flex border-bottom border-dark pb-2">
              <Form.Control
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 p-0 font-sans-alt focus-none text-dark"
                style={{ 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.1em',
                  boxShadow: 'none'
                }}
                required
              />
              <button 
                type="submit" 
                className="bg-transparent border-0 p-0 text-dark ms-2 transition-all"
                style={{ cursor: 'pointer' }}
              >
                <ArrowRight size={18} />
              </button>
            </Form>
            {subscribed && (
              <span className="d-block mt-2 font-sans-alt text-success" style={{ fontSize: '0.75rem' }}>
                Thank you for subscribing to our journal.
              </span>
            )}
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={4} sm={6}>
            <h5 
              className="text-uppercase font-sans-alt mb-3" 
              style={{ fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: '600' }}
            >
              Studio
            </h5>
            <ul className="list-unstyled font-sans-alt" style={{ fontSize: '0.85rem', lineHeight: '2' }}>
              <li><Link to="/about" className="text-decoration-none text-dark hover-opacity-70">Our Story</Link></li>
              <li><Link to="/portfolio" className="text-decoration-none text-dark hover-opacity-70">Portfolio</Link></li>
              <li><Link to="/material-studio" className="text-decoration-none text-dark hover-opacity-70">Material Library</Link></li>
              <li><Link to="/testimonials" className="text-decoration-none text-dark hover-opacity-70">Client Reviews</Link></li>
              <li><Link to="/blog" className="text-decoration-none text-dark hover-opacity-70">Journal / Blog</Link></li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={4} sm={6}>
            <h5 
              className="text-uppercase font-sans-alt mb-3" 
              style={{ fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: '600' }}
            >
              Services
            </h5>
            <ul className="list-unstyled font-sans-alt" style={{ fontSize: '0.85rem', lineHeight: '2' }}>
              <li><Link to="/services" className="text-decoration-none text-dark hover-opacity-70">Luxury Residential</Link></li>
              <li><Link to="/services" className="text-decoration-none text-dark hover-opacity-70">Coastal & Mediterranean Villas</Link></li>
              <li><Link to="/services" className="text-decoration-none text-dark hover-opacity-70">Boutique Commercial</Link></li>
              <li><Link to="/services" className="text-decoration-none text-dark hover-opacity-70">Bespoke Hospitality</Link></li>
              <li><Link to="/services" className="text-decoration-none text-dark hover-opacity-70">Turnkey Styling Solutions</Link></li>
            </ul>
          </Col>

          {/* Location & Social */}
          <Col lg={3} md={4}>
            <h5 
              className="text-uppercase font-sans-alt mb-3" 
              style={{ fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: '600' }}
            >
              Contact
            </h5>
            <p className="font-sans-alt mb-4 text-muted-custom" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
              104 Ocean Drive, Malibu, CA 90265
              <br />
              hello@coastalatelier.design
              <br />
              +1 (310) 555-8930
            </p>
            <div className="d-flex gap-3 align-items-center">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-dark hover-opacity-70" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-dark hover-opacity-70" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-dark hover-opacity-70" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="text-dark hover-opacity-70" style={{ textDecoration: 'none' }} aria-label="Pinterest">
                <span className="font-sans-alt fw-bold text-dark" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>PINT</span>
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(42, 51, 58, 0.15)', margin: '3rem 0' }} />

        {/* Copy */}
        <Row className="font-sans-alt text-muted-custom align-items-center" style={{ fontSize: '0.75rem' }}>
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            © {new Date().getFullYear()} The Coastal Atelier. All Rights Reserved.
          </Col>
          <Col md={6} className="text-center text-md-end">
            <span className="mx-2">Privacy Policy</span>
            <span>|</span>
            <span className="mx-2">Terms of Service</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
