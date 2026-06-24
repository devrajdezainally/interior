import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { ZoomIn, MapPin, Feather, Eye } from 'lucide-react';

const materialCollections = [
  {
    category: 'Marble Collection',
    items: [
      { name: 'Calacatta Viola', origin: 'Apuan Alps, Italy', desc: 'Dramatic cabernet veins cascading across a soft milky canvas.', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80' },
      { name: 'Verde Alpi', origin: 'Aosta Valley, Italy', desc: 'Deep forest greens interlaced with light quartz crystallization.', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Arabescato Corchia', origin: 'Tuscany, Italy', desc: 'Highly rounded gray patterns tracing an intricate mosaic design.', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    category: 'Wood Collection',
    items: [
      { name: 'Brushed White Oak', origin: 'Spessart, Germany', desc: 'Slow-grown oak dried by mountain winds, offering a quiet linen tone.', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80' },
      { name: 'Smoked Walnut', origin: 'Oregon, USA', desc: 'Dark amber hues obtained through gentle carbon-smoking processes.', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80' },
      { name: 'Kyoto Cedar', origin: 'Kyoto Prefecture, Japan', desc: 'Soft-grain aromatic timber left raw for sensory oil emission.', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    category: 'Metal Finishes',
    items: [
      { name: 'Patinated Brass', origin: 'Studio Hand-Rubbed', desc: 'Unlacquered brass chemically darkened to develop a custom oxide coating.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80' },
      { name: 'Burnished Bronze', origin: 'Hand-Forge Pressed', desc: 'Deep bronze with micro-scratches reflecting warm fireplace glows.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    category: 'Textiles & Stones',
    items: [
      { name: 'Belgian Linen', origin: 'Flanders, Belgium', desc: 'Coarse flax stalks spun into open weaves to maximize breeze transmission.', image: 'https://images.unsplash.com/photo-1562184560-a11b7cf7c166?auto=format&fit=crop&w=500&q=80' },
      { name: 'Roman Travertine', origin: 'Tivoli, Italy', desc: 'Warm beige sediment filled with natural vacuoles left unfilled for rustic tactile value.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500&q=80' }
    ]
  }
];

const MaterialStudio = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <div className="material-studio-page pt-5">
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
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Library</span>
              <h1 className="editorial-title text-dark mb-4">
                Interactive Tactile Material Studio
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                View our inventory of geographical textures. We collect authentic stones, woods, and textiles to formulate unique spatial foundations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Materials Grid */}
      <section className="py-9 bg-white">
        <Container>
          {materialCollections.map((col, cIdx) => (
            <div key={col.category} className={cIdx > 0 ? 'mt-6' : ''}>
              <h3 className="font-serif-editorial text-dark mb-4 border-bottom border-light pb-2 text-uppercase fs-4" style={{ letterSpacing: '0.1em' }}>
                {col.category}
              </h3>
              <Row className="g-4">
                {col.items.map((item) => (
                  <Col lg={4} md={6} key={item.name}>
                    <div
                      className="material-card"
                      style={{ height: '350px' }}
                      onClick={() => setSelectedMaterial(item)}
                    >
                      <img src={item.image} alt={item.name} className="material-card-img" />

                      {/* Zoom action icon */}
                      <div className="position-absolute top-3 end-3 glass-panel p-2 rounded-circle text-dark cursor-pointer opacity-0 hover-opacity-100 transition-all duration-300" style={{ right: '1rem', top: '1rem', transition: 'opacity 0.3s ease' }}>
                        <ZoomIn size={18} />
                      </div>

                      <div className="material-card-overlay">
                        <span className="d-flex align-items-center font-sans-alt text-white-50 mb-1" style={{ fontSize: '0.7rem' }}>
                          <MapPin size={12} className="me-1" /> {item.origin}
                        </span>
                        <h5 className="font-serif-editorial text-white mb-2 fs-5">{item.name}</h5>
                        <p className="font-sans-alt text-white-50 mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* Material Zoom Modal */}
      <Modal
        show={selectedMaterial !== null}
        onHide={() => setSelectedMaterial(null)}
        centered
        size="lg"
        contentClassName="bg-transparent border-0"
      >
        {selectedMaterial && (
          <div className="glass-panel p-4 border border-light text-dark position-relative">
            <button
              onClick={() => setSelectedMaterial(null)}
              className="position-absolute border-0 bg-transparent text-dark font-sans-alt fw-bold"
              style={{ top: '1.5rem', right: '1.5rem', zIndex: 10, cursor: 'pointer' }}
            >
              CLOSE
            </button>
            <Row className="align-items-center g-4">
              <Col md={6}>
                <div style={{ height: '400px', backgroundColor: 'var(--color-bg-ivory)' }} className="overflow-hidden">
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </Col>
              <Col md={6} className="pe-lg-4">
                <span className="d-flex align-items-center font-sans-alt text-muted-custom mb-2" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                  <MapPin size={14} className="me-1 text-accent" /> {selectedMaterial.origin}
                </span>
                <h3 className="font-serif-editorial text-dark display-6 mb-3">{selectedMaterial.name}</h3>
                <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {selectedMaterial.desc}
                </p>
                <div className="p-3 bg-light border-start border-3 border-accent" style={{ backgroundColor: 'var(--color-bg-alabaster)' }}>
                  <span className="font-sans-alt text-uppercase text-muted-custom d-block mb-1" style={{ fontSize: '0.65rem' }}>Tactile Profile</span>
                  <span className="font-sans-alt text-dark" style={{ fontSize: '0.8rem' }}>
                    Recommended for seaside custom mantels, sliding panels, and textured headboard backdrops.
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MaterialStudio;
