import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Mail, Compass, ShieldCheck } from 'lucide-react';

const teamMembers = [
  {
    name: 'Marcus Vance',
    role: 'Principal Architect & Co-Founder',
    philosophy: 'Architecture is the frame; natural light is the canvas. We must let the room breathe.',
    bio: 'Marcus has over 15 years of experience blueprinting high-end beach residences and custom commercial offices across Europe and the California coast. He has a masters degree in architecture from UC Berkeley.',
    expertise: 'Spatial Layouts, Ocean-Flow Structural Engineering, Custom Concrete Forms',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    accolades: 'Architectural Digest Top 100 Designer, International Architectural Gold Medal'
  },
  {
    name: 'Elena Ross',
    role: 'Head of Interior Design & Co-Founder',
    philosophy: 'Textures carry weight. Soft linen, rough limestone, and cold brass write the story of a home.',
    bio: 'Elena specializes in luxury residential staging and custom furniture blueprinting. She works directly with stonemasons in Italy and fabric weavers in Belgium to source authentic components for clients.',
    expertise: 'Bespoke Furniture, Textile Curations, Lighting Systems',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    accolades: 'IDA Design Award Winner, Best Residential Concept 2024'
  },
  {
    name: 'Sora Tanaka',
    role: 'Lead Furniture Designer & Stylist',
    philosophy: 'Every piece of furniture should tell a story of timber, stone, and human hands.',
    bio: 'Sora coordinates custom woodwork and metal blueprints. Her furniture creations highlight the organic curves of walnut and the natural imperfections of travertine.',
    expertise: 'Joinery Blueprints, Antique Sourcing, Sensory Accents',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    accolades: 'Bespoke Furniture Guild Special Citation, Kyoto Eco-Timber Showcase'
  }
];

const Team = () => {
  return (
    <div className="team-page pt-5">
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
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-3" style={{ letterSpacing: '0.3em', fontSize: '0.8rem' }}>The Artisans</span>
              <h1 className="editorial-title text-dark mb-4">
                The Minds Shaping Your Sanctuaries
              </h1>
              <p className="editorial-subtitle text-muted-custom mx-auto mb-0" style={{ maxWidth: '600px' }}>
                We are a collection of custom architects, interior stylists, and furniture draughtsmen dedicated to organic luxury.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Profiles Grid */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="gy-5">
            {teamMembers.map((member, idx) => (
              <Col lg={4} md={6} key={member.name}>
                <div 
                  className="bg-light p-3 border border-light h-100 d-flex flex-column justify-content-between"
                  style={{ backgroundColor: 'var(--color-bg-alabaster)' }}
                >
                  <div>
                    {/* Portrait Image */}
                    <div 
                      className="overflow-hidden mb-4" 
                      style={{ 
                        height: '400px', 
                        backgroundColor: 'var(--color-bg-ivory)' 
                      }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-100 h-100 object-fit-cover"
                        style={{
                          transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>

                    <span className="font-sans-alt text-uppercase text-accent d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                      {member.role}
                    </span>
                    <h3 className="font-serif-editorial text-dark mb-3 fs-3">{member.name}</h3>
                    
                    <p className="font-sans-alt text-dark italic mb-3" style={{ fontSize: '0.85rem', borderLeft: '2px solid var(--color-primary)', paddingLeft: '0.75rem' }}>
                      "{member.philosophy}"
                    </p>

                    <p className="font-sans-alt text-muted-custom mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      {member.bio}
                    </p>
                  </div>

                  <div className="border-top border-light pt-3 mt-3">
                    <span className="font-sans-alt text-uppercase text-muted-custom d-block" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Expertise</span>
                    <span className="font-sans-alt text-dark d-block mb-2" style={{ fontSize: '0.8rem' }}>{member.expertise}</span>
                    
                    <span className="font-sans-alt text-uppercase text-muted-custom d-block" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Accolades</span>
                    <span className="font-sans-alt text-dark d-block" style={{ fontSize: '0.8rem' }}>{member.accolades}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;
