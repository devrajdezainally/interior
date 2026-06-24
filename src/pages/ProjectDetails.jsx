import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Compass } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

const projectDatabase = {
  1: {
    title: 'The Sand Castle',
    category: 'Luxury Villa',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    story: 'Hanging over the rugged cliffs of Malibu, California, The Sand Castle is a sanctuary built to withstand ocean breezes while preserving a calm, open relationship with the water. The structure is composed of raw concrete slabs, sea-washed limestone, and bleached cedar wood, seamlessly blending into the geography.',
    challenge: 'Designing high windows that offer 180-degree ocean views while protecting the interior from harsh afternoon glare and coastal wind currents.',
    concept: 'Organic Minimalism. Merging structural weight with lightweight linens, sliding panels, and floating partitions that keep corridors airy and sun-drenched.',
    materials: ['Travertine Limestone', 'Bleached White Oak', 'Raw Linen Textiles', 'Aged Patinated Brass', 'Etched Fluted Glass'],
    clientQuote: 'The team composed a space where the ocean feels like our living room wall. It is calm, warm, and architectural.',
    clientAuthor: 'Julian & Sarah Thorne'
  },
  2: {
    title: 'Skyline Sanctuary',
    category: 'Modern Penthouse',
    location: 'New York, New York',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    story: 'Positioned high above Manhattan, the Skyline Sanctuary is an acoustic fortress of quiet luxury. We replaced standard drywall partitions with linen-covered panels and custom white oak wardrobes, creating visual and acoustic absorption.',
    challenge: 'Subduing the busy energy and noise of Manhattan while optimizing space inside a structural penthouse frame.',
    concept: 'Acoustic Silence. Using soft textures, low furniture layout, and warm dimming lights that mimic the setting sun.',
    materials: ['Calacatta Viola Marble', 'Smoked Brushed Oak', 'Bouclé Wool Fabrics', 'Hand-rubbed Dark Bronze', 'Suede Panels'],
    clientQuote: 'Stepping into this home feels like pressing a mute button on New York City. The spatial flow is incredibly calm.',
    clientAuthor: 'Alexander & Chloe Sterling'
  }
};

const defaultProject = {
  title: 'Luxury Mediterranean Sanctuary',
  category: 'Coastal Villa',
  location: 'Mallorca, Spain',
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
  story: 'This coastal residence blends centuries-old Spanish stone arches with modern glass structures. We curated organic limestone blocks, rough timber columns, and custom raw plaster finishes to create a luxurious boutique hotel environment.',
  challenge: 'Integrating modern climate systems and electrical layers without disturbing historic stone structures.',
  concept: 'Timeless Warmth. Composing spaces with rich texture contrasts, oversized pottery, raw plaster walls, and custom furniture.',
  materials: ['Mallorcan Limestone', 'Reclaimed Pine Beams', 'Handwoven Linen Tassels', 'Polished Soft Copper', 'Crushed Slate'],
  clientQuote: 'It feels like walking through an ancient villa with all the light and warmth of modern luxury. Beautifully executed.',
  clientAuthor: 'Mateo & Elena Gomez'
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDatabase[id] || defaultProject;

  return (
    <div className="project-details-page pt-5">
      {/* Hero Banner */}
      <section 
        className="w-100 vh-75 d-flex align-items-end" 
        style={{
          backgroundImage: `linear-gradient(rgba(42, 51, 58, 0.2), rgba(42, 51, 58, 0.6)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '4rem'
        }}
      >
        <Container className="pb-5">
          <Row>
            <Col lg={8} className="text-white">
              <Link to="/portfolio" className="text-decoration-none text-white d-inline-flex align-items-center gap-2 mb-3 hover-opacity-70 font-sans-alt" style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}>
                <ArrowLeft size={16} /> BACK TO CATALOG
              </Link>
              <span className="text-uppercase font-sans-alt d-block mb-2 text-white-50" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                {project.category} — {project.location}
              </span>
              <h1 className="editorial-title text-white mb-0 display-4">{project.title}</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story & Challenges */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="gy-5">
            {/* Column 1: Core Story */}
            <Col lg={7} className="pe-lg-5">
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Project Story</span>
              <h2 className="font-serif-editorial text-dark mb-4 fs-2">Writing a Spatial Chapter of Calm</h2>
              <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                {project.story}
              </p>
              
              <hr className="my-4" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />

              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.15em', fontSize: '0.75rem' }}>The Architect's Dilemma</span>
              <h4 className="font-serif-editorial text-dark mb-3">Core Challenges</h4>
              <p className="font-sans-alt text-muted-custom" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                {project.challenge}
              </p>
            </Col>

            {/* Column 2: Material Palette & Specs */}
            <Col lg={5}>
              <div className="p-4 glass-panel border border-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
                <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.15em', fontSize: '0.7rem' }}>Material Specification</span>
                <h4 className="font-serif-editorial text-dark mb-3 fs-4">Sourced Textures</h4>
                <ul className="list-unstyled mb-4">
                  {project.materials.map((mat) => (
                    <li key={mat} className="d-flex align-items-center mb-2 font-sans-alt text-dark" style={{ fontSize: '0.9rem' }}>
                      <Check size={16} className="text-accent me-2" style={{ color: 'var(--color-accent)' }} />
                      {mat}
                    </li>
                  ))}
                </ul>

                <hr className="my-3" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />

                <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.15em', fontSize: '0.7rem' }}>Design Concept</span>
                <h5 className="font-serif-editorial text-dark mb-2 fs-5">Atmospheric Design</h5>
                <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {project.concept}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Moodboard / Blueprint Concept Visual */}
      <section className="py-8 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="mb-4">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-1" style={{ letterSpacing: '0.15em', fontSize: '0.7rem' }}>Technical Blueprint</span>
              <h3 className="font-serif-editorial text-dark fs-3">Spatial Arrangement & Mood Board</h3>
            </Col>
          </Row>
          <Row className="gy-4">
            <Col md={8}>
              <div 
                className="bg-white p-5 border border-light d-flex flex-column justify-content-center align-items-center text-center" 
                style={{ height: '380px' }}
              >
                <Compass size={40} className="text-accent mb-3" style={{ color: 'var(--color-accent)' }} />
                <span className="font-sans-alt text-uppercase text-muted-custom" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>Layout Plan 01</span>
                <h4 className="font-serif-editorial text-dark my-2 fs-4">Indoor-Outdoor Fluid Blueprint</h4>
                <p className="font-sans-alt text-muted-custom mx-auto mb-0" style={{ maxWidth: '400px', fontSize: '0.85rem' }}>
                  Calculating a continuous grid linking the custom terrace infinity pool with the central living area fireplace.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div 
                className="overflow-hidden" 
                style={{ height: '380px', backgroundColor: 'var(--color-bg-ivory)' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80" 
                  alt="Material texture moodboard" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Client Feedback quote block */}
      <section className="py-9 bg-white text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>Client Journal</span>
              <p className="font-serif-editorial fs-4 text-dark mb-4 italic">
                "{project.clientQuote}"
              </p>
              <h6 className="font-serif-editorial text-dark mb-0 fs-6">— {project.clientAuthor}</h6>
              <p className="font-sans-alt text-muted-custom" style={{ fontSize: '0.75rem' }}>Commissioned Residents</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProjectDetails;
