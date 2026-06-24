import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const blogArticles = [
  {
    id: 1,
    title: 'The Silent Architecture of Mediterranean Residences',
    category: 'Architecture',
    date: 'June 18, 2026',
    author: 'Marcus Vance',
    summary: 'An exploration of natural stone arches, light shafts, and how spatial breathing room creates emotional comfort.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Sourcing Calacatta Marble: A Journey to Tuscany',
    category: 'Materials',
    date: 'June 10, 2026',
    author: 'Elena Ross',
    summary: 'A recount of our visit to the Apuan Alps, selection of blocks, and understanding custom stone vein matching.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Designing for the Sun: Light Proportions in Kitchen Space Planning',
    category: 'Space Planning',
    date: 'May 28, 2026',
    author: 'Marcus Vance',
    summary: 'How solar pathways throughout the seasons should dictate kitchen islands placements and window glass specifications.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Sensory Staging: Textures Over Synthetic Color Palettes',
    category: 'Interior Trends',
    date: 'May 14, 2026',
    author: 'Elena Ross',
    summary: 'Why neutral travertine, unpolished copper, and linen provide a more sustainable, long-term luxury than neon colors.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
  }
];

const categories = ['All', 'Architecture', 'Materials', 'Space Planning', 'Interior Trends', 'Luxury Living', 'Design Tips'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? blogArticles
    : blogArticles.filter((art) => art.category === selectedCategory);

  return (
    <div className="blog-page pt-5">
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
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Journal</span>
              <h1 className="editorial-title text-dark mb-4">
                Atelier Style Editorials
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                Read articles written by our principal designers regarding materiality, architecture history, and coastal layouts.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category filters */}
      <section className="py-4 bg-white border-bottom border-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="btn btn-sm border-0 font-sans-alt text-uppercase"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  padding: '0.4rem 1.1rem',
                  color: selectedCategory === cat ? 'var(--color-white)' : 'var(--color-text-dark)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'transparent',
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

      {/* Article list */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="gy-5 justify-content-center">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art) => (
                <Col lg={5} md={6} key={art.id}>
                  <div className="bg-light p-3 border border-light h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--color-bg-alabaster)' }}>
                    <div>
                      {/* Image Frame */}
                      <div className="overflow-hidden mb-4" style={{ height: '280px', backgroundColor: 'var(--color-bg-ivory)' }}>
                        <img 
                          src={art.image} 
                          alt={art.title} 
                          className="w-100 h-100 object-fit-cover"
                          style={{
                            transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>

                      {/* Header Specs */}
                      <div className="d-flex justify-content-between align-items-center mb-2 font-sans-alt text-muted-custom" style={{ fontSize: '0.75rem' }}>
                        <span className="text-uppercase text-accent font-weight-bold" style={{ color: 'var(--color-accent)' }}>
                          {art.category}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <Calendar size={12} /> {art.date}
                        </span>
                      </div>

                      <h3 className="font-serif-editorial text-dark mb-3 fs-4" style={{ lineHeight: '1.4' }}>
                        {art.title}
                      </h3>

                      <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                        {art.summary}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-top border-light pt-3 mt-2">
                      <span className="font-sans-alt text-muted-custom" style={{ fontSize: '0.75rem' }}>
                        By {art.author}
                      </span>
                      <span 
                        className="font-sans-alt text-uppercase text-dark d-inline-flex align-items-center gap-1 cursor-pointer hover-opacity-70"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.05em', fontWeight: '500' }}
                      >
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <Col lg={6} className="text-center py-5">
                <BookOpen size={48} className="text-muted-custom mb-3" />
                <h4 className="font-serif-editorial text-dark">No Articles Found</h4>
                <p className="font-sans-alt text-muted-custom">We are writing new editorials for this category. Check back soon.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
