import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const allProjects = [
  { id: 1, title: 'The Sand Castle', category: 'Luxury Villas', location: 'Malibu, CA', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', description: 'A seamless concrete and glass villa hugging the coastal rocks.' },
  { id: 2, title: 'Skyline Sanctuary', category: 'Residential', location: 'New York, NY', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80', description: 'Linen-wrapped walls and warm oak acoustics in a Manhattan sky-home.' },
  { id: 3, title: 'The Glass Pavilion', category: 'Workspaces', location: 'London, UK', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80', description: 'A creative workspace emphasizing natural shadows and quiet corners.' },
  { id: 4, title: 'Ochre & Olive Cafe', category: 'Hospitality', location: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', description: 'Warm plaster walls and custom travertine counters in a historic piazza.' },
  { id: 5, title: 'Atelier Mode', category: 'Retail', location: 'Paris, France', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', description: 'A sensory fashion atelier with unlacquered brass display fittings.' },
  { id: 6, title: 'Serene Cliffs Lodge', category: 'Hospitality', location: 'Cabo, Mexico', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', description: 'An open-air retreat styled with natural seagrass, limestone, and linen.' },
  { id: 7, title: 'Mediterranean Courtyard', category: 'Luxury Villas', location: 'Mallorca, Spain', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', description: 'A courtyard residence focusing on outdoor-indoor flow and ancient stone arches.' },
  { id: 8, title: 'Bespoke Culinary Penthouse', category: 'Residential', location: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', description: 'Minimalist white architecture featuring a custom fluted marble island.' }
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail', 'Luxury Villas', 'Workspaces'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => {
        // Map Commercial to Retail/Workspaces if needed, or check category match
        if (selectedCategory === 'Commercial') {
          return p.category === 'Retail' || p.category === 'Workspaces';
        }
        return p.category === selectedCategory;
      });

  return (
    <div className="portfolio-page pt-5">
      {/* Portfolio Hero */}
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
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Catalog</span>
              <h1 className="editorial-title text-dark mb-4">
                Compositions & Built Sanctuaries
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                Walk through our portfolio of custom residential estates, beach villas, sensory boutiques, and quiet work environments.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Navigation */}
      <section className="py-5 bg-white border-bottom border-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="btn btn-sm border-0 font-sans-alt text-uppercase"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0',
                  color: selectedCategory === cat ? 'var(--color-white)' : 'var(--color-text-dark)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-accent)' : 'transparent',
                  fontWeight: selectedCategory === cat ? '600' : '400',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Magazine Grid layout */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="gy-5">
            {filteredProjects.map((proj, idx) => (
              <Col lg={idx % 3 === 0 ? 8 : 4} md={6} key={proj.id}>
                <div 
                  className="bg-light p-3 border border-light h-100 d-flex flex-column justify-content-between"
                  style={{ backgroundColor: 'var(--color-bg-alabaster)' }}
                >
                  <Link to={`/project/${proj.id}`} className="text-decoration-none text-dark">
                    <div 
                      className="overflow-hidden mb-4" 
                      style={{ 
                        height: idx % 3 === 0 ? '480px' : '360px',
                        backgroundColor: 'var(--color-bg-ivory)'
                      }}
                    >
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-100 h-100 object-fit-cover"
                        style={{
                          transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                  </Link>

                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-uppercase font-sans-alt text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                        {proj.category} — {proj.location}
                      </span>
                      <span className="font-serif-editorial text-muted-custom" style={{ fontSize: '0.85rem' }}>
                        /0{proj.id}
                      </span>
                    </div>
                    <Link to={`/project/${proj.id}`} className="text-decoration-none text-dark">
                      <h3 className="font-serif-editorial fs-4 mb-2 hover-opacity-70">{proj.title}</h3>
                    </Link>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      {proj.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Final note */}
      <section className="py-8 bg-light text-center border-top border-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.15em', fontSize: '0.7rem' }}>Bespoke Commissions</span>
          <h2 className="font-serif-editorial display-6 text-dark mb-3">Looking for a custom project format?</h2>
          <p className="font-sans-alt text-muted-custom mx-auto mb-4" style={{ maxWidth: '480px', fontSize: '0.9rem' }}>
            We work on residential and commercial scales globally. Share your details for a structural assessment.
          </p>
          <Link to="/contact" className="btn btn-atelier btn-atelier-accent">
            Inquire About Commissions
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Portfolio;
