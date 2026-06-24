import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Accordion } from 'react-bootstrap';
import { ArrowRight, Check, Hammer, Palette, Eye, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeKey, setActiveKey] = useState('residential');

  const faqs = [
    { q: 'How long does a typical luxury villa project take?', a: 'Depending on size and structural requirements, a complete design and custom construction coordination takes between 6 to 12 months. This includes layout concepts, detailed material orders, carpentry blueprinting, and onsite handover.' },
    { q: 'Can you work with our existing contractors?', a: 'Yes. While we offer full turnkey styling and contractor management services, we frequently collaborate with clients\' chosen architects and builders, acting as the design directors to ensure layouts, joinery, and lighting align with our specifications.' },
    { q: 'Do you charge a flat design fee or percentage?', a: 'Our billing is tailored to the project size and complexity. We typically work with a design fee covering blueprints, renders, and materials consultations, alongside a coordination fee for procurement and project management.' },
    { q: 'Do you handle artwork and landscaping sourcing?', a: 'Absolutely. True spatial harmony includes surrounding flora and custom canvases. We curate artwork from independent galleries globally and collaborate with luxury landscape designers to fuse outdoor styling with our interiors.' }
  ];

  return (
    <div className="services-page pt-5">
      {/* Services Hero */}
      <section 
        className="py-9 text-center"
        style={{ 
          backgroundColor: 'var(--color-bg-ivory)', 
          marginTop: '4rem', 
          borderBottom: '1px solid rgba(42, 51, 58, 0.05)'
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>Atelier Focus</span>
              <h1 className="editorial-title text-dark mb-4">
                Boutique Design & Architectural Curations
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                Explore our full suite of residential drafting, commercial staging, and specialized custom styling capabilities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Tabbed Services */}
      <section className="py-9 bg-white">
        <Container>
          <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            {/* Custom Luxury Tab Headers */}
            <Row className="justify-content-center mb-5">
              <Col lg={8}>
                <Nav className="nav-justified glass-panel p-2 border border-light" style={{ borderRadius: '0' }}>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="residential"
                      className="text-uppercase font-sans-alt py-3 border-0 rounded-0"
                      style={{ 
                        fontSize: '0.75rem', 
                        letterSpacing: '0.15em', 
                        color: activeKey === 'residential' ? 'var(--color-white)' : 'var(--color-text-dark)',
                        backgroundColor: activeKey === 'residential' ? 'var(--color-primary)' : 'transparent',
                        fontWeight: '600',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      Residential Interiors
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="commercial"
                      className="text-uppercase font-sans-alt py-3 border-0 rounded-0"
                      style={{ 
                        fontSize: '0.75rem', 
                        letterSpacing: '0.15em', 
                        color: activeKey === 'commercial' ? 'var(--color-white)' : 'var(--color-text-dark)',
                        backgroundColor: activeKey === 'commercial' ? 'var(--color-primary)' : 'transparent',
                        fontWeight: '600',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      Commercial Interiors
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="specialized"
                      className="text-uppercase font-sans-alt py-3 border-0 rounded-0"
                      style={{ 
                        fontSize: '0.75rem', 
                        letterSpacing: '0.15em', 
                        color: activeKey === 'specialized' ? 'var(--color-white)' : 'var(--color-text-dark)',
                        backgroundColor: activeKey === 'specialized' ? 'var(--color-primary)' : 'transparent',
                        fontWeight: '600',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      Specialized Services
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            {/* Tab content panel */}
            <Tab.Content className="pt-3">
              {/* RESIDENTIAL */}
              <Tab.Pane eventKey="residential">
                <Row className="align-items-center mb-5">
                  <Col lg={6} className="pe-lg-5 mb-4 mb-lg-0">
                    <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.1em', fontSize: '0.75rem' }}>Core Specialization</span>
                    <h3 className="font-serif-editorial display-5 text-dark mb-3">Residential Architecture & Staging</h3>
                    <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      We treat homes as personal sanctuaries. Whether blueprinting a seaside estate in Malibu or renovating a luxury penthouse in New York, we construct spaces reflecting comfort, serenity, and geographic context.
                    </p>
                    
                    <Row className="gy-2 mb-4">
                      {[
                        'Custom Luxury Villas', 'Holiday & Cliffside Residences', 'Editorial Living Rooms', 
                        'Linen-wrapped Master Bedrooms', 'Satin-brass Bathrooms', 'Sensory Dining Spaces'
                      ].map((item) => (
                        <Col sm={6} key={item} className="d-flex align-items-center">
                          <Check size={16} className="text-accent me-2" style={{ color: 'var(--color-accent)' }} />
                          <span className="font-sans-alt text-dark" style={{ fontSize: '0.85rem' }}>{item}</span>
                        </Col>
                      ))}
                    </Row>

                    <div className="p-3 bg-light border-start border-3 border-accent" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
                      <span className="font-sans-alt text-uppercase text-muted-custom d-block mb-1" style={{ fontSize: '0.65rem' }}>Materials Recommendation</span>
                      <p className="font-sans-alt mb-0 text-dark" style={{ fontSize: '0.8rem' }}>
                        *Soft Travertine, Fluted Calacatta Marble, Brushed White Oak, Natural Tussah Silk, and Organic Belgian Linens.*
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="overflow-hidden" style={{ height: '400px', backgroundColor: 'var(--color-bg-ivory)' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
                        alt="Residential design" 
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* COMMERCIAL */}
              <Tab.Pane eventKey="commercial">
                <Row className="align-items-center mb-5">
                  <Col lg={6} className="pe-lg-5 mb-4 mb-lg-0">
                    <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.1em', fontSize: '0.75rem' }}>Workspace & Hospitality</span>
                    <h3 className="font-serif-editorial display-5 text-dark mb-3">Immersive Brand Environments</h3>
                    <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      A commercial space is a physical extension of a brand's ethos. We design offices, boutique hotels, salons, and cafés that prioritize ergonomics and architectural drama to engage clients.
                    </p>
                    
                    <Row className="gy-2 mb-4">
                      {[
                        'Corporate Offices & Hubs', 'Luxury Fashion Showrooms', 'Fine Dining Restaurants',
                        'Boutique Hotels & Suites', 'High-end Med Spas & Clinics', 'Artistic Cafés'
                      ].map((item) => (
                        <Col sm={6} key={item} className="d-flex align-items-center">
                          <Check size={16} className="text-accent me-2" style={{ color: 'var(--color-accent)' }} />
                          <span className="font-sans-alt text-dark" style={{ fontSize: '0.85rem' }}>{item}</span>
                        </Col>
                      ))}
                    </Row>

                    <div className="p-3 bg-light border-start border-3 border-primary" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
                      <span className="font-sans-alt text-uppercase text-muted-custom d-block mb-1" style={{ fontSize: '0.65rem' }}>Materials Recommendation</span>
                      <p className="font-sans-alt mb-0 text-dark" style={{ fontSize: '0.8rem' }}>
                        *Acoustic Oak Panels, Acid-washed Steel, Terrazzo, Smoked Glass, and Full-grain Amber Leathers.*
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="overflow-hidden" style={{ height: '400px', backgroundColor: 'var(--color-bg-ivory)' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                        alt="Commercial design" 
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* SPECIALIZED */}
              <Tab.Pane eventKey="specialized">
                <Row className="align-items-center mb-5">
                  <Col lg={6} className="pe-lg-5 mb-4 mb-lg-0">
                    <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.1em', fontSize: '0.75rem' }}>Expertise</span>
                    <h3 className="font-serif-editorial display-5 text-dark mb-3">Custom Carpentry & Sourcing</h3>
                    <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      For properties requiring specific, rare, or completely custom curations. We provide individual blueprints for carpentry, manage smart home technology layers, and consult on lighting and art.
                    </p>
                    
                    <Row className="gy-2 mb-4">
                      {[
                        'Space Planning & Drafting', 'Ultra-real 3D Visualization', 'Custom Modular Kitchens',
                        'Art Sourcing & Placement', 'Smart Home Integration', 'Lighting Systems Design'
                      ].map((item) => (
                        <Col sm={6} key={item} className="d-flex align-items-center">
                          <Check size={16} className="text-accent me-2" style={{ color: 'var(--color-accent)' }} />
                          <span className="font-sans-alt text-dark" style={{ fontSize: '0.85rem' }}>{item}</span>
                        </Col>
                      ))}
                    </Row>

                    <div className="p-3 bg-light border-start border-3 border-accent" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
                      <span className="font-sans-alt text-uppercase text-muted-custom d-block mb-1" style={{ fontSize: '0.65rem' }}>Materials Recommendation</span>
                      <p className="font-sans-alt mb-0 text-dark" style={{ fontSize: '0.8rem' }}>
                        *Solid Walnut Joinery, Patinated Unlacquered Brass, Frosted Crystal, and Woven Seagrass Cord.*
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="overflow-hidden" style={{ height: '400px', backgroundColor: 'var(--color-bg-ivory)' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                        alt="Specialized design" 
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      {/* The Design Process Phase Cards */}
      <section className="py-9 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Workflow</span>
              <h2 className="font-serif-editorial display-5 text-dark">Our Calibrated Design Method</h2>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { title: '1. Vision Dialogue', desc: 'We converse about your memories, travels, and routine to identify how layout can best serve your spirit.', icon: Palette },
              { title: '2. Schematic Drafting', desc: 'Creating structural mood boards, material palettes, and 2D flow diagrams to align layout proportions.', icon: Hammer },
              { title: '3. Immersive Renders', desc: 'Generating cinema-quality 3D renders so you can visualize shadows and textures prior to construction.', icon: Eye },
              { title: '4. White-glove Handover', desc: 'Managing purchase logs, custom millwork, contractor timelines, and the final placement of styled accents.', icon: ShieldCheck }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <Col md={3} sm={6} key={idx}>
                  <div className="bg-white p-4 h-100 border border-light text-center shadow-sm">
                    <div className="mx-auto mb-3 d-flex align-items-center justify-content-center bg-light text-accent rounded-circle" style={{ width: '48px', height: '48px', color: 'var(--color-accent)', backgroundColor: 'var(--color-bg-alabaster)' }}>
                      <Icon size={18} />
                    </div>
                    <h5 className="font-serif-editorial text-dark mb-2 fs-5">{step.title}</h5>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>{step.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Clarifications</span>
              <h2 className="font-serif-editorial display-5 text-dark">Frequently Answered Questions</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion flush>
                {faqs.map((faq, idx) => (
                  <Accordion.Item eventKey={idx.toString()} key={idx} className="border-bottom border-light py-2">
                    <Accordion.Header className="font-serif-editorial text-dark fs-5 py-2">
                      <span className="d-flex align-items-center text-dark">
                        <HelpCircle size={18} className="text-accent me-2" style={{ color: 'var(--color-accent)' }} />
                        {faq.q}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="font-sans-alt text-muted-custom" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                      {faq.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-9 text-center bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Engage Us</span>
          <h2 className="font-serif-editorial display-5 text-dark mb-4">Ready to Compose Your Sanctuary?</h2>
          <p className="font-sans-alt text-muted-custom mx-auto mb-4" style={{ maxWidth: '500px', fontSize: '0.95rem' }}>
            Book a private material studio tour or video consultation with our principal interior designers.
          </p>
          <Link to="/contact" className="btn btn-atelier btn-atelier-primary">
            Schedule Studio Consultation
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Services;
