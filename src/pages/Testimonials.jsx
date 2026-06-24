import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star, Play, Quote, Award } from 'lucide-react';

const testimonialsList = [
  {
    name: 'Julian & Sarah Thorne',
    location: 'Malibu Beach Villa Owner',
    review: 'Our Malibu villa was a complex architectural task: it required full concrete stability, high wind buffers, and massive glass openings. The Coastal Atelier managed it end-to-end. We stepped into our home and were met with the calm smell of cedar, perfect limestone work, and curated Belgian linen furniture that looked out onto the tide. They composed a masterpiece.',
    rating: 5,
    project: 'Luxury Coastal Villa Restoration'
  },
  {
    name: 'Claire Kensington',
    location: 'Atelier Mode Founder',
    review: 'We wanted our Paris showroom to be a sensory retail experience—not just clothing on metal racks. Elena and Sora sourced unlacquered dark bronze panels, custom plaster clothing stalls, and fluted amber glass partitions. The visual shadows in the room change the mood of the shoppers. Our clients frequently comment on the tranquil hotel-like feeling.',
    rating: 5,
    project: 'Atelier Mode Luxury Retail Staging'
  },
  {
    name: 'Marcus & Sophia Sterling',
    location: 'Manhattan Sky Penthouse',
    review: 'Marcus Vance understood acoustic design immediately. By layering the walls in textured linens and smocking the walnut cabinetry gaps, he completely silenced the noise of Central Park below. The spatial flow from the master bathroom Calacatta stone layout directly into the bedroom wardrobe is flawless.',
    rating: 5,
    project: 'Acoustic Penthouse Remodel'
  }
];

const videoTestimonials = [
  {
    title: 'The Sand Castle Tour',
    client: 'Julian Thorne',
    length: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Skyline Penthouse Walkthrough',
    client: 'Chloe Sterling',
    length: '4:20',
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-page pt-5">
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
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Critiques</span>
              <h1 className="editorial-title text-dark mb-4">
                Journals of Spatial Collaboration
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                Discover detailed written stories from residents and retail founders who collaborated with our design atelier.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Staging Section */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="mb-5 text-center justify-content-center">
            <Col lg={7}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Atmospheric Video Stories</span>
              <h2 className="font-serif-editorial display-5 text-dark">Cinematic Resident Walkthroughs</h2>
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            {videoTestimonials.map((vid) => (
              <Col md={6} lg={5} key={vid.title}>
                <div 
                  className="position-relative overflow-hidden mb-3 shadow-sm cursor-pointer"
                  style={{ height: '300px', backgroundColor: 'var(--color-bg-ivory)' }}
                >
                  <img src={vid.thumbnail} alt={vid.title} className="w-100 h-100 object-fit-cover" />
                  
                  {/* Play Button Overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-20 d-flex align-items-center justify-content-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle glass-panel text-dark"
                      style={{ 
                        width: '64px', 
                        height: '64px',
                        backgroundColor: 'rgba(250, 248, 245, 0.95)',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Play size={24} className="text-accent ms-1" style={{ color: 'var(--color-accent)' }} />
                    </div>
                  </div>

                  <span className="position-absolute bottom-3 right-3 font-sans-alt text-white bg-dark bg-opacity-50 px-2 py-1" style={{ right: '1rem', bottom: '1rem', fontSize: '0.7rem' }}>
                    {vid.length}
                  </span>
                </div>
                <h4 className="font-serif-editorial text-dark mb-1 fs-5">{vid.title}</h4>
                <p className="font-sans-alt text-muted-custom" style={{ fontSize: '0.8rem' }}>Client Tour: {vid.client}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Written journals list */}
      <section className="py-9 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="mb-5 text-center justify-content-center">
            <Col lg={7}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Written Chronicles</span>
              <h2 className="font-serif-editorial display-5 text-dark">Collaboration Memoirs</h2>
            </Col>
          </Row>
          <Row className="gy-4 justify-content-center">
            {testimonialsList.map((t, idx) => (
              <Col lg={10} key={idx}>
                <Card className="bg-white p-5 rounded-0 border border-light shadow-sm position-relative">
                  <Quote 
                    size={48} 
                    className="position-absolute text-secondary opacity-15" 
                    style={{ 
                      top: '1.5rem', 
                      left: '2rem', 
                      color: 'var(--color-secondary)',
                      opacity: '0.2'
                    }} 
                  />
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-uppercase font-sans-alt text-accent fw-bold" style={{ color: 'var(--color-accent)', fontSize: '0.75rem' }}>
                      {t.project}
                    </span>
                    <div className="text-warning d-flex">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>

                  <p className="font-serif-editorial fs-4 text-dark mb-4 italic" style={{ lineHeight: '1.6' }}>
                    "{t.review}"
                  </p>

                  <div className="border-top border-light pt-3">
                    <h6 className="font-serif-editorial text-dark mb-0 fs-6">{t.name}</h6>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.75rem' }}>{t.location}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Accolades Showcase */}
      <section className="py-8 bg-white text-center">
        <Container>
          <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Global Recognition</span>
          <h3 className="font-serif-editorial text-dark mb-4 fs-3">Awards & Design Credentials</h3>
          <Row className="justify-content-center gy-4 mt-2">
            {[
              'Gold Winner, International Design Awards 2024',
              'Architectural Digest Top 100 Studio',
              'Aman Residential Design Certificate of Excellence',
              'Kyoto Woodcraft Guild Sustainability Badge'
            ].map((award, i) => (
              <Col md={3} sm={6} key={i}>
                <div className="p-3 bg-light border border-light h-100" style={{ backgroundColor: 'var(--color-bg-alabaster)' }}>
                  <Award size={24} className="text-accent mb-2 mx-auto" style={{ color: 'var(--color-accent)' }} />
                  <span className="font-sans-alt text-dark" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>{award}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;
