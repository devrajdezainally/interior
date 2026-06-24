import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, title: 'Seaside Open Lounge', category: 'Living Room', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Calacatta Bath Master', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Brushed Oak Suite', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Ancient Stone Courtyard', category: 'Exterior', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Smoked Glass Office', category: 'Workspace', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Ochre Plaster Accent', category: 'Cafe', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Seagrass Dining Corner', category: 'Dining Room', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Sunset Terrace Deck', category: 'Terrace', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' }
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page pt-5">
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
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Showcase</span>
              <h1 className="editorial-title text-dark mb-4">
                Visual Sanctuary Masonry
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                Browse snapshots of our curated textures, furniture angles, and window arrangements.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Masonry Layout grid */}
      <section className="py-9 bg-white">
        <Container>
          <div className="row g-4">
            {/* Split galleryImages into two columns to simulate masonry grid height differences */}
            <div className="col-md-6 d-flex flex-column gap-4">
              {galleryImages.filter((_, idx) => idx % 2 === 0).map((img, idx) => {
                const globalIndex = idx * 2;
                return (
                  <div 
                    key={img.id}
                    className="position-relative overflow-hidden cursor-pointer"
                    style={{ backgroundColor: 'var(--color-bg-ivory)' }}
                    onClick={() => setSelectedIndex(globalIndex)}
                  >
                    <img 
                      src={img.image} 
                      alt={img.title} 
                      className="w-100 object-fit-cover transition-all"
                      style={{ 
                        maxHeight: idx % 2 === 0 ? '550px' : '400px',
                        transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)' 
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div 
                      className="position-absolute start-0 bottom-0 w-100 p-4 text-white d-flex justify-content-between align-items-end"
                      style={{ 
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                        opacity: 0,
                        transition: 'opacity 0.4s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                    >
                      <div>
                        <span className="font-sans-alt text-uppercase text-white-50 d-block" style={{ fontSize: '0.65rem' }}>{img.category}</span>
                        <h5 className="font-serif-editorial mb-0 text-white">{img.title}</h5>
                      </div>
                      <ZoomIn size={18} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-md-6 d-flex flex-column gap-4">
              {galleryImages.filter((_, idx) => idx % 2 !== 0).map((img, idx) => {
                const globalIndex = idx * 2 + 1;
                return (
                  <div 
                    key={img.id}
                    className="position-relative overflow-hidden cursor-pointer"
                    style={{ backgroundColor: 'var(--color-bg-ivory)' }}
                    onClick={() => setSelectedIndex(globalIndex)}
                  >
                    <img 
                      src={img.image} 
                      alt={img.title} 
                      className="w-100 object-fit-cover transition-all"
                      style={{ 
                        maxHeight: idx % 2 === 0 ? '420px' : '580px',
                        transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)' 
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div 
                      className="position-absolute start-0 bottom-0 w-100 p-4 text-white d-flex justify-content-between align-items-end"
                      style={{ 
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                        opacity: 0,
                        transition: 'opacity 0.4s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                    >
                      <div>
                        <span className="font-sans-alt text-uppercase text-white-50 d-block" style={{ fontSize: '0.65rem' }}>{img.category}</span>
                        <h5 className="font-serif-editorial mb-0 text-white">{img.title}</h5>
                      </div>
                      <ZoomIn size={18} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal
        show={selectedIndex !== null}
        onHide={() => setSelectedIndex(null)}
        centered
        size="xl"
        contentClassName="bg-transparent border-0"
      >
        {selectedIndex !== null && (
          <div className="position-relative d-flex align-items-center justify-content-center">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="position-absolute border-0 bg-transparent text-white p-2 rounded-circle glass-panel"
              style={{ top: '-3rem', right: '0', cursor: 'pointer', zIndex: 1000 }}
            >
              <X size={20} className="text-white" />
            </button>

            {/* Prev Arrow */}
            <button 
              onClick={handlePrev}
              className="position-absolute start-3 border-0 bg-transparent text-white p-2 rounded-circle glass-panel"
              style={{ left: '1rem', cursor: 'pointer', zIndex: 1000 }}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Image display */}
            <div className="text-center" style={{ maxWidth: '90%', maxHeight: '80vh' }}>
              <img 
                src={galleryImages[selectedIndex].image} 
                alt={galleryImages[selectedIndex].title} 
                className="img-fluid object-fit-contain" 
                style={{ maxHeight: '75vh', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <div className="glass-panel text-white p-3 mt-3 mx-auto" style={{ maxWidth: '400px' }}>
                <span className="font-sans-alt text-uppercase text-white-50 d-block" style={{ fontSize: '0.65rem' }}>
                  {galleryImages[selectedIndex].category}
                </span>
                <h5 className="font-serif-editorial text-white mb-0 fs-5">
                  {galleryImages[selectedIndex].title}
                </h5>
              </div>
            </div>

            {/* Next Arrow */}
            <button 
              onClick={handleNext}
              className="position-absolute end-3 border-0 bg-transparent text-white p-2 rounded-circle glass-panel"
              style={{ right: '1rem', cursor: 'pointer', zIndex: 1000 }}
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
