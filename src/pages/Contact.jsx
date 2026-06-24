import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: '',
    budget: '$50,000 - $100,000'
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto-select consultation form fields if URL contains query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('consultation') === 'true') {
      // Focus name or pre-fill info if desired
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: '',
        budget: '$50,000 - $100,000'
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/13105558930?text=Hello%20Coastal%20Atelier,%20I%20would%20like%20to%20arrange%20a%20private%20design%20consultation.', '_blank');
  };

  return (
    <div className="contact-page pt-5">
      {/* Hero */}
      <section 
        className="py-9 bg-light text-center"
        style={{ 
          backgroundColor: 'var(--color-bg-ivory)', 
          marginTop: '4rem', 
          borderBottom: '1px solid rgba(42, 51, 58, 0.05)'
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Dialogue</span>
              <h1 className="editorial-title text-dark mb-4">
                Arrange a Private Consultation
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                Converse with our principal architects Marcus Vance and Elena Ross. Share your site measurements and project aspirations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Split screen content */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="gy-5">
            {/* Left: Studio Info */}
            <Col lg={5} className="pe-lg-5">
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.15em', fontSize: '0.75rem' }}>Details</span>
              <h2 className="font-serif-editorial text-dark mb-4 fs-2">Malibu Design Studio</h2>
              
              <ul className="list-unstyled mb-5 font-sans-alt" style={{ fontSize: '0.9rem', lineHeight: '2' }}>
                <li className="d-flex align-items-start mb-3">
                  <MapPin size={18} className="text-accent me-3 mt-1" style={{ color: 'var(--color-accent)' }} />
                  <span>
                    104 Ocean Drive, Malibu, CA 90265
                    <br />
                    <span className="text-muted-custom" style={{ fontSize: '0.8rem' }}>Venice Beach Showroom tours available by appointment.</span>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Phone size={18} className="text-accent me-3" style={{ color: 'var(--color-accent)' }} />
                  <span>+91 9102462411</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Mail size={18} className="text-accent me-3" style={{ color: 'var(--color-accent)' }} />
                  <span>[EMAIL_ADDRESS]</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <Clock size={18} className="text-accent me-3 mt-1" style={{ color: 'var(--color-accent)' }} />
                  <span>
                    Monday - Friday: 9:00 AM - 6:00 PM PST
                    <br />
                    Saturday: By Appointment Only
                  </span>
                </li>
              </ul>

              {/* WhatsApp Concierge Trigger */}
              <div 
                className="p-4 mb-4 border border-light d-flex align-items-center justify-content-between cursor-pointer"
                style={{ backgroundColor: 'var(--color-bg-ivory)', cursor: 'pointer' }}
                onClick={handleWhatsAppChat}
              >
                <div>
                  <h5 className="font-serif-editorial mb-1 text-dark fs-5">WhatsApp Concierge Chat</h5>
                  <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.8rem' }}>Connect immediately with our styling coordinators.</p>
                </div>
                <div className="p-2 rounded-circle bg-white text-accent" style={{ color: 'var(--color-accent)' }}>
                  <MessageSquare size={20} />
                </div>
              </div>

              {/* Map block placeholder */}
              <div 
                className="w-100 border border-light d-flex flex-column align-items-center justify-content-center text-center" 
                style={{ height: '220px', backgroundColor: 'var(--color-bg-alabaster)' }}
              >
                <MapPin size={28} className="text-accent mb-2" style={{ color: 'var(--color-accent)' }} />
                <span className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Interactive map block</span>
                <span className="font-serif-editorial text-dark mt-1">Hyderabad Telangana</span>
              </div>
            </Col>

            {/* Right: Consultation Form */}
            <Col lg={7}>
              <div className="p-5 bg-light border border-light shadow-sm" style={{ backgroundColor: 'var(--color-bg-alabaster)' }}>
                <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-1" style={{ letterSpacing: '0.1em', fontSize: '0.75rem' }}>Direct Inquiry</span>
                <h3 className="font-serif-editorial text-dark mb-4 fs-3">Consultation Form</h3>
                
                {submitted ? (
                  <div className="p-4 bg-success bg-opacity-10 text-success font-sans-alt text-center" style={{ fontSize: '0.9rem' }}>
                    Thank you. Marcus and Elena will contact you within 24 business hours to arrange a suitable consultation time.
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Your Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Helena Vance"
                            className="rounded-0 font-sans-alt border-secondary border-opacity-20"
                            style={{ padding: '0.8rem', fontSize: '0.85rem' }}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Your Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="helena@vance.com"
                            className="rounded-0 font-sans-alt border-secondary border-opacity-20"
                            style={{ padding: '0.8rem', fontSize: '0.85rem' }}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Your Phone</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (310) 555-8930"
                            className="rounded-0 font-sans-alt border-secondary border-opacity-20"
                            style={{ padding: '0.8rem', fontSize: '0.85rem' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Project Scope</Form.Label>
                          <Form.Select 
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="rounded-0 font-sans-alt border-secondary border-opacity-20"
                            style={{ padding: '0.8rem', fontSize: '0.85rem', height: '48px' }}
                          >
                            <option>Residential</option>
                            <option>Villa Interior</option>
                            <option>Commercial</option>
                            <option>Hospitality</option>
                            <option>Custom Joinery / Furniture</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Estimated Project Budget</Form.Label>
                      <Form.Select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="rounded-0 font-sans-alt border-secondary border-opacity-20"
                        style={{ padding: '0.8rem', fontSize: '0.85rem', height: '48px' }}
                      >
                        <option>$50,000 - $100,000</option>
                        <option>$100,000 - $250,000</option>
                        <option>$250,000 - $500,000</option>
                        <option>$500,000 - $1,000,000+</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Project Story / Vision</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about the site location, lighting preferences, and timeline..."
                        className="rounded-0 font-sans-alt border-secondary border-opacity-20"
                        style={{ padding: '0.8rem', fontSize: '0.85rem' }}
                        required
                      />
                    </Form.Group>

                    <button 
                      type="submit" 
                      className="btn btn-atelier btn-atelier-primary w-100 d-flex align-items-center justify-content-center gap-2"
                      style={{ padding: '1rem 2rem' }}
                    >
                      Send Message / Request Consultation <Send size={14} />
                    </button>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
