import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Award, Compass, Heart, Feather, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const milestones = [
    { year: '2014', title: 'Studio Founded', desc: 'Established in Malibu by principal architects Marcus Vance and Elena Ross with a core belief in organic luxury.' },
    { year: '2017', title: 'Aman Residences Commission', desc: 'Collaborated on the interior layout design of 12 luxury private coastal villas in Greece.' },
    { year: '2020', title: 'Architectural Digest Top 100', desc: 'Recognized for our pioneering approach to sustainable coastal architectures.' },
    { year: '2023', title: 'Material Studio Launch', desc: 'Opened our custom material showroom and procurement lab in Venice Beach, California.' }
  ];

  const values = [
    { title: 'Bespoke Craftsmanship', desc: 'We coordinate with master stonemasons and wood-carvers. Every detail is unique.', icon: Feather },
    { title: 'Timeless Aesthetic', desc: 'We ignore temporary trends, designing spaces that age gracefully and grow more refined.', icon: Compass },
    { title: 'Human Centered', desc: 'We craft home layouts around family habits, light movements, and quiet moments.', icon: Heart },
    { title: 'Geographic Resonance', desc: 'Designs that echo their environment, blending sea breezes, cliffs, and sunlights.', icon: Award }
  ];

  return (
    <div className="about-page pt-5">
      {/* About Hero */}
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
            <Col lg={10}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Atelier Story</span>
              <h1 className="editorial-title text-dark mb-4">
                Designing Spaces Inspired by People, Places, and Timeless Beauty.
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '700px' }}>
                We believe that architecture and interior design are sensory extensions of life. Each home we write is a curated collection of light, organic details, and quiet emotions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="align-items-center mb-6">
            <Col lg={6} className="pe-lg-5 mb-4 mb-lg-0">
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Our Heritage</span>
              <h2 className="font-serif-editorial display-5 text-dark mb-4">Composed to Echo the Mediterranean Coast</h2>
              <p className="font-sans-alt text-muted-custom mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                The Coastal Atelier was born from a desire to combine the tranquil energy of coastal geography with structural precision. Founded in Malibu, California, our team works at the interface of custom architecture, raw materials, and interior design.
              </p>
              <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                We draw immense inspiration from the raw cliffs of Greece, the soft sands of Mallorca, and the organic textures of boutique hotels. Our work prioritizes breathing spaces, massive windows, limestone floors, and custom linen-wrapped furniture.
              </p>
            </Col>
            <Col lg={6}>
              <div 
                className="overflow-hidden" 
                style={{ 
                  height: '420px', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  backgroundColor: 'var(--color-bg-ivory)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
                  alt="Coastal Villa Interior" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div 
                className="overflow-hidden" 
                style={{ 
                  height: '420px', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  backgroundColor: 'var(--color-bg-ivory)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Boutique Hotel Concept" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5 mb-4 mb-lg-0">
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Our Philosophy</span>
              <h2 className="font-serif-editorial display-5 text-dark mb-4">Quiet Luxury & Spatial Breathing Room</h2>
              <p className="font-sans-alt text-muted-custom mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                We do not construct "showrooms". We create environments that invite inhabitants to kick off their shoes, touch the cool limestone, and look out onto the water.
              </p>
              <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                Every corner is calculated. We think about the flow of morning light, the acoustics of high wooden ceilings, and the tactile response of raw brass fittings. We believe luxury is found in the restraint, not the excess.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-9 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Our Directives</span>
              <h2 className="font-serif-editorial display-5 text-dark">Vision & Mission</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6}>
              <div className="bg-white p-5 h-100 border border-light shadow-sm">
                <span className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>Spatial Vision</span>
                <h3 className="font-serif-editorial my-3 fs-3 text-dark">A World Refined by Natural Architecture</h3>
                <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                  To design residential and commercial environments globally that restore peace and inspire natural connection. We envision structural designs that combine local geology, architectural history, and contemporary custom carpentry to define a new golden age of organic living.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white p-5 h-100 border border-light shadow-sm">
                <span className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>Studio Mission</span>
                <h3 className="font-serif-editorial my-3 fs-3 text-dark">Elevating the Rituals of Living</h3>
                <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                  Our mission is to coordinate bespoke architecture and materials to create tranquil sanctuaries for our clients. We take on full turnkey management, sourcing authentic components and managing execution to ensure our drawings become timeless structural realities.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Foundations</span>
              <h2 className="font-serif-editorial display-5 text-dark">Our Core Values</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <Col lg={3} md={6} key={val.title}>
                  <div className="p-4 bg-light h-100 text-center border border-light" style={{ backgroundColor: 'var(--color-bg-alabaster)' }}>
                    <div className="mx-auto mb-3 d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '56px', height: '56px' }}>
                      <Icon size={20} className="text-accent" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <h4 className="font-serif-editorial text-dark mb-2 fs-5">{val.title}</h4>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{val.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-9 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Growth</span>
              <h2 className="font-serif-editorial display-5 text-dark">Studio Milestones</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <Row className="gy-4">
              {milestones.map((ms, idx) => (
                <Col md={3} sm={6} key={ms.year}>
                  <div className="p-3 border-top border-dark border-opacity-25 pt-4">
                    <span className="font-serif-display display-6 text-accent d-block mb-2" style={{ color: 'var(--color-accent)' }}>{ms.year}</span>
                    <h5 className="font-serif-editorial text-dark mb-2 fs-5">{ms.title}</h5>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>{ms.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Link to Team */}
      <section className="py-9 bg-white text-center">
        <Container>
          <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Collaborators</span>
          <h2 className="font-serif-editorial display-5 text-dark mb-4">Meet The Artisans & Designers</h2>
          <p className="font-sans-alt text-muted-custom mx-auto mb-4" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
            Our team is a collective of master draughtsmen, interior designers, spatial programmers, and styling consultants. Get to know their credentials, visions, and accolades.
          </p>
          <Link to="/team" className="btn btn-atelier btn-atelier-primary">
            Explore Team & Portfolios
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default About;
