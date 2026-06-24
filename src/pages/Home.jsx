import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Compass, Calendar, Award, Star, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    title: 'Designing Extraordinary Spaces',
    subtitle: 'Precision, balance, and calm tailored to luxury coastal living.',
    location: 'Malibu, California'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    title: 'Modern Penthouse Oasis',
    subtitle: 'Urban sanctuaries crafted for elevated living in Manhattan.',
    location: 'Manhattan, New York'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    title: 'Bespoke Culinary Kitchens',
    subtitle: 'Where organic finishes meet advanced hardware layouts.',
    location: 'Santorini, Greece'
  },
  {
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
    title: 'Boutique Hotel Suites',
    subtitle: 'Sensory spatial experiences focused on quiet luxury.',
    location: 'Amalfi Coast, Italy'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    title: 'Creative Executive Suites',
    subtitle: 'Functional yet visually commanding corporate environments.',
    location: 'London, United Kingdom'
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    title: 'Mediterranean Courtyards',
    subtitle: 'Harmonizing open-air layouts with local raw materials.',
    location: 'Mallorca, Spain'
  }
];

const services = [
  { id: 1, title: 'Luxury Residential', desc: 'Crafting sophisticated living environments custom-tailored to families and high-end lifestyles.', details: 'Includes full scale layouts, custom joinery, light design, and styling.' },
  { id: 2, title: 'Villa Interiors', desc: 'Serene seaside and mountain estates combining nature, open air architectures, and premium comforts.', details: 'Special emphasis on Mediterranean/Coastal aesthetics and outdoor living configurations.' },
  { id: 3, title: 'Commercial Interiors', desc: 'Creating functional yet visually commanding brand environments, workspaces, and luxury showrooms.', details: 'Tailored to corporate identities, ergonomic spaces, and immersive retail experiences.' },
  { id: 4, title: 'Hospitality Design', desc: 'Bespoke designs for boutique hotels, lounges, and spas that offer guests immediate relaxation.', details: 'Sensory designs focused on lighting, texture, spatial flow, and quiet luxury.' },
  { id: 5, title: 'Modular Kitchens', desc: 'Ultra-modern culinary environments that integrate advanced German hardware with organic, rich finishes.', details: 'Seamless hidden pantries, integrated high-end appliances, and bespoke island architectures.' },
  { id: 6, title: 'Custom Furniture', desc: 'Designed in-house and built by master woodworkers, blacksmiths, and tailors.', details: 'One-of-a-kind stone dining tables, bespoke sofas, and handcrafted wardrobe solutions.' },
  { id: 7, title: 'Turnkey Projects', desc: 'End-to-end design, construction coordination, styling, and final handover.', details: 'Absolute peace of mind. We manage procurement, contractors, and white-glove setup.' },
  { id: 8, title: '3D Visualization', desc: 'Cinematic, ultra-realistic renders and VR walkthroughs before ground is even broken.', details: 'Accurate light simulations and real-time material textures representation.' }
];

const projects = [
  { id: 1, title: 'The Sand Castle', category: 'Luxury Villa', location: 'Malibu, CA', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Skyline Sanctuary', category: 'Modern Penthouse', location: 'New York, NY', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'The Glass Pavilion', category: 'Executive Office', location: 'London, UK', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Ochre & Olive Cafe', category: 'Boutique Café', location: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Atelier Mode', category: 'Retail Store', location: 'Paris, France', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Serene Cliffs Lodge', category: 'Resort Residence', location: 'Cabo, Mexico', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' }
];

const materials = [
  { name: 'Marble', texture: 'Calacatta Violac', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80' },
  { name: 'Natural Wood', texture: 'Brushed Oak', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80' },
  { name: 'Limestone', texture: 'Travertine Classico', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Brass', texture: 'Satin Antique Brass', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80' },
  { name: 'Textiles', texture: 'Bouclé & Organic Linen', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80' },
  { name: 'Glass', texture: 'Fluted Amber Glass', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=500&q=80' }
];

const journeySteps = [
  { phase: 'Discover', desc: 'Initial consultation and spatial discovery dialogue' },
  { phase: 'Research', desc: 'Site analysis, geographical context, and architectural dialogue' },
  { phase: 'Concept Creation', desc: 'Mood boarding, material collages, and layout proposals' },
  { phase: 'Visualization', desc: 'High-fidelity cinematic 3D rendering and space walk' },
  { phase: 'Execution', desc: 'Procurement, designer supervision, and master craftsmanship coordination' },
  { phase: 'Final Styling', desc: 'White-glove styling, artwork sourcing, and sensory tuning' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const [stats, setStats] = useState({ projects: 0, years: 0, satisfaction: 0, specialists: 0 });

  const leftColumnProjects = projects.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = projects.filter((_, idx) => idx % 2 !== 0);

  // Floating project cards cursor coordinates offset
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseOffset({
        x: (e.clientX - window.innerWidth / 2) * 0.03,
        y: (e.clientY - window.innerHeight / 2) * 0.03,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Animated numbers trigger on scroll (simulated with a simple timer on mount here)
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let count = 0;

    const timer = setInterval(() => {
      count++;
      setStats({
        projects: Math.min(Math.floor((500 / steps) * count), 500),
        years: Math.min(Math.floor((12 / steps) * count), 12),
        satisfaction: Math.min(Math.floor((98 / steps) * count), 98),
        specialists: Math.min(Math.floor((50 / steps) * count), 50),
      });

      if (count >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Journey steps toggle based on scroll location (mock scroll progress helper)
  useEffect(() => {
    let lastStep = -1;
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      // Map 35% - 60% scroll to journey steps
      if (scrollPercent > 30 && scrollPercent < 65) {
        const stepIndex = Math.min(
          Math.floor(((scrollPercent - 30) / 35) * journeySteps.length),
          journeySteps.length - 1
        );
        if (stepIndex !== lastStep) {
          lastStep = stepIndex;
          setActiveStep(stepIndex);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page overflow-hidden">
      {/* 1. Immersive Editorial Hero Carousel */}
      <section className="position-relative w-100 vh-100 d-flex align-items-center justify-content-start overflow-hidden bg-white">
        {/* Background Image Carousel with AnimatePresence */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-100 h-100 position-absolute"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </AnimatePresence>
        </div>

        {/* Gradient Overlay Layer */}
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-gradient-overlay" style={{ zIndex: 1 }} />

        {/* Hero Overlay Content */}
        <Container className="position-relative pt-5 pt-lg-0" style={{ zIndex: 2 }}>
          <Row className="align-items-center">
            {/* Left side text column */}
            <Col lg={6} md={10} className="text-start">
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-uppercase font-sans-alt mb-2 d-inline-block hero-label"
                style={{ fontSize: '0.8rem' }}
              >
                Welcome to the Atelier
              </motion.span>
              
              {/* Dynamic Text Carousel Content */}
              <div style={{ minHeight: '190px' }} className="d-flex flex-column justify-content-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h1
                      className="editorial-title hero-title mb-3"
                      style={{ fontSize: 'clamp(2rem, 3.8vw, 3.8rem)', lineHeight: '1.2' }}
                    >
                      {slides[currentSlide].title}
                    </h1>

                    <p
                      className="editorial-subtitle hero-subtitle mb-0"
                      style={{ fontSize: '1.05rem', maxWidth: '520px' }}
                    >
                      {slides[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Minimalist text buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="d-flex gap-4 align-items-center mt-3 mt-lg-4"
              >
                <Link 
                  to="/contact?consultation=true" 
                  className="text-decoration-none text-uppercase font-sans-alt hero-btn-link"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.2em', paddingBottom: '4px', transition: 'var(--transition-fast)' }}
                >
                  Book Consultation
                </Link>
                <Link 
                  to="/portfolio" 
                  className="text-decoration-none text-uppercase font-sans-alt hero-btn-link"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.2em', paddingBottom: '4px', transition: 'var(--transition-fast)' }}
                >
                  Explore Projects
                </Link>
              </motion.div>

              {/* Slide Indicators bottom left */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="d-flex gap-2 align-items-center mt-4 mt-lg-5"
              >
                {slides.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{ 
                      width: idx === currentSlide ? '32px' : '8px', 
                      height: '2px', 
                      backgroundColor: idx === currentSlide ? 'var(--color-accent)' : 'rgba(42, 51, 58, 0.2)',
                      transition: 'width 0.4s ease, background-color 0.4s ease',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </motion.div>
            </Col>

            {/* Right side floating elements (desktop only, synchronized with slides) */}
            <Col lg={6} className="d-none d-lg-block position-relative">
              <div className="d-flex flex-column align-items-end pe-5" style={{ minHeight: '300px', justifyContent: 'center' }}>
                {/* Floating pill 1 (Location) */}
                <motion.div 
                  key={`loc-${currentSlide}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="glass-panel p-3 px-4 shadow-sm mb-3 d-flex align-items-center gap-2 border border-light"
                  style={{ 
                    borderRadius: '50px',
                    backgroundColor: 'rgba(250, 248, 245, 0.85)',
                    backdropFilter: 'blur(10px)',
                    transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }} />
                  <span className="font-sans-alt fw-bold text-dark text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                    {slides[currentSlide].location}
                  </span>
                </motion.div>

                {/* Floating pill 2 (Feature Details) */}
                <motion.div 
                  key={`det-${currentSlide}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="glass-panel p-3 px-4 shadow-sm d-flex align-items-center gap-2 border border-light"
                  style={{ 
                    borderRadius: '50px',
                    backgroundColor: 'rgba(250, 248, 245, 0.85)',
                    backdropFilter: 'blur(10px)',
                    transform: `translate(${-mouseOffset.x}px, ${-mouseOffset.y}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />
                  <span className="font-sans-alt fw-bold text-dark text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                    {slides[currentSlide].title}
                  </span>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Navigation Arrows at bottom right */}
        <div className="position-absolute d-flex gap-3" style={{ bottom: '3rem', right: '5%', zIndex: 10 }}>
          <button 
            className="border-0 bg-transparent text-dark d-flex align-items-center justify-content-center"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            style={{ 
              width: '44px', 
              height: '44px', 
              borderRadius: '50%', 
              border: '1px solid rgba(42, 51, 58, 0.3)',
              backgroundColor: 'rgba(250, 248, 245, 0.85)',
              transition: 'var(--transition-fast)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(42, 51, 58, 0.3)'; e.currentTarget.style.color = 'var(--color-text-dark)'; }}
            aria-label="Previous slide"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            className="border-0 bg-transparent text-dark d-flex align-items-center justify-content-center"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            style={{ 
              width: '44px', 
              height: '44px', 
              borderRadius: '50%', 
              border: '1px solid rgba(42, 51, 58, 0.3)',
              backgroundColor: 'rgba(250, 248, 245, 0.85)',
              transition: 'var(--transition-fast)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(42, 51, 58, 0.3)'; e.currentTarget.style.color = 'var(--color-text-dark)'; }}
            aria-label="Next slide"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute text-center d-none d-lg-block" style={{ bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <div className="scroll-indicator-line" style={{ height: '40px' }} />
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="py-9 bg-white text-center d-flex align-items-center" style={{ minHeight: '60vh' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <span className="text-uppercase font-sans-alt mb-4 d-block text-muted-custom" style={{ letterSpacing: '0.2em', fontSize: '0.85rem' }}>Our Creed</span>
              <h2 className="font-serif-editorial display-4 text-dark mb-4 lh-base" style={{ fontWeight: '300' }}>
                "We believe exceptional interiors are not merely designed—they are thoughtfully composed experiences."
              </h2>
              <p className="font-sans-alt text-muted-custom mx-auto" style={{ maxWidth: '600px', fontSize: '1rem', lineHeight: '1.8' }}>
                Every element we select, every architecture we compose, acts as a sensory landscape. We look past the superficial trends to focus on light, raw texture, and the emotions of the inhabitants.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Signature Services Carousel */}
      <section className="py-8" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="mb-5 align-items-end">
            <Col md={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>Studio Capabilities</span>
              <h2 className="font-serif-editorial display-5 mb-0">Signature Design Services</h2>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Link to="/services" className="text-decoration-none text-dark d-inline-flex align-items-center font-sans-alt gap-2 hover-opacity-70" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                EXPLORE ALL SERVICES <MoveRight size={16} />
              </Link>
            </Col>
          </Row>

          {/* Horizontally scrolling list */}
          <div className="d-flex gap-4 overflow-auto pb-4 custom-scroll" style={{ scrollbarWidth: 'thin' }}>
            {services.map((srv) => (
              <motion.div
                key={srv.id}
                layout
                onClick={() => setExpandedService(expandedService === srv.id ? null : srv.id)}
                className="glass-panel p-4 flex-shrink-0 cursor-pointer transition-all border border-light"
                style={{ 
                  width: '320px', 
                  minHeight: '260px',
                  borderRadius: '0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
              >
                <div>
                  <span className="text-muted-custom font-sans-alt d-block mb-3" style={{ fontSize: '0.8rem' }}>0{srv.id}</span>
                  <h4 className="font-serif-editorial mb-3 text-dark">{srv.title}</h4>
                  <p className="font-sans-alt text-muted-custom" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{srv.desc}</p>
                </div>
                
                <AnimatePresence>
                  {expandedService === srv.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-top border-light mt-3 pt-3"
                    >
                      <p className="font-sans-alt text-dark" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                        {srv.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-end mt-2">
                  <span className="font-sans-alt text-muted-custom" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                    {expandedService === srv.id ? 'CLOSE' : 'LEARN MORE'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Featured Projects Experience (Asymmetrical) */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="mb-5 align-items-end">
            <Col md={8}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>Recent Commissions</span>
              <h2 className="font-serif-editorial display-5 mb-0">Featured Living Masterpieces</h2>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Link to="/portfolio" className="text-decoration-none text-dark d-inline-flex align-items-center font-sans-alt gap-2 hover-opacity-70" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                PORTFOLIO CATALOG <MoveRight size={16} />
              </Link>
            </Col>
          </Row>

          {/* Desktop Staggered Layout */}
          <Row className="d-none d-lg-flex">
            <Col lg={6} className="pe-lg-4">
              {leftColumnProjects.map((proj) => {
                const originalIndex = projects.indexOf(proj);
                return (
                  <div className="project-card-container mb-5" key={proj.id}>
                    <Link to={`/project/${proj.id}`} className="text-decoration-none text-dark">
                      <div className="masterpiece-card-image-wrap masterpiece-height-tall">
                        <img 
                          src={proj.image} 
                          alt={proj.title}
                          className="w-100 h-100 object-fit-cover img-hover-zoom"
                        />
                        <div className="masterpiece-card-overlay">
                          <div className="masterpiece-badge font-sans-alt">
                            <span>0{originalIndex + 1}</span>
                            <span className="badge-divider">|</span>
                            <span>Editorial Cover</span>
                          </div>
                          <h3 className="masterpiece-overlay-title font-serif-editorial">Explore Journey</h3>
                        </div>
                      </div>
                      <div className="masterpiece-details mt-3 d-flex justify-content-between align-items-baseline">
                        <div>
                          <span className="masterpiece-category font-sans-alt text-uppercase">{proj.category}</span>
                          <h4 className="masterpiece-title font-serif-editorial mt-1">{proj.title}</h4>
                        </div>
                        <span className="masterpiece-location font-sans-alt">{proj.location}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Col>
            
            <Col lg={6} className="ps-lg-4 mt-lg-5">
              {rightColumnProjects.map((proj) => {
                const originalIndex = projects.indexOf(proj);
                return (
                  <div className="project-card-container mb-5" key={proj.id}>
                    <Link to={`/project/${proj.id}`} className="text-decoration-none text-dark">
                      <div className="masterpiece-card-image-wrap masterpiece-height-short">
                        <img 
                          src={proj.image} 
                          alt={proj.title}
                          className="w-100 h-100 object-fit-cover img-hover-zoom"
                        />
                        <div className="masterpiece-card-overlay">
                          <div className="masterpiece-badge font-sans-alt">
                            <span>0{originalIndex + 1}</span>
                            <span className="badge-divider">|</span>
                            <span>Editorial Cover</span>
                          </div>
                          <h3 className="masterpiece-overlay-title font-serif-editorial">Explore Journey</h3>
                        </div>
                      </div>
                      <div className="masterpiece-details mt-3 d-flex justify-content-between align-items-baseline">
                        <div>
                          <span className="masterpiece-category font-sans-alt text-uppercase">{proj.category}</span>
                          <h4 className="masterpiece-title font-serif-editorial mt-1">{proj.title}</h4>
                        </div>
                        <span className="masterpiece-location font-sans-alt">{proj.location}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Col>
          </Row>

          {/* Mobile/Tablet Grid Layout */}
          <Row className="d-flex d-lg-none gy-5">
            {projects.map((proj, idx) => (
              <Col md={6} key={proj.id}>
                <div className="project-card-container">
                  <Link to={`/project/${proj.id}`} className="text-decoration-none text-dark">
                    <div className="masterpiece-card-image-wrap masterpiece-height-mobile">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="w-100 h-100 object-fit-cover img-hover-zoom"
                      />
                      <div className="masterpiece-card-overlay">
                        <div className="masterpiece-badge font-sans-alt">
                          <span>0{idx + 1}</span>
                          <span className="badge-divider">|</span>
                          <span>Editorial Cover</span>
                        </div>
                        <h3 className="masterpiece-overlay-title font-serif-editorial">Explore Journey</h3>
                      </div>
                    </div>
                    <div className="masterpiece-details mt-3 d-flex justify-content-between align-items-baseline">
                      <div>
                        <span className="masterpiece-category font-sans-alt text-uppercase">{proj.category}</span>
                        <h4 className="masterpiece-title font-serif-editorial mt-1">{proj.title}</h4>
                      </div>
                      <span className="masterpiece-location font-sans-alt">{proj.location}</span>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. Material Library Experience */}
      <section className="py-9 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="mb-5 text-center justify-content-center">
            <Col lg={7}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>Tactile & Organic</span>
              <h2 className="font-serif-editorial display-5 mb-3">Atelier Material Library</h2>
              <p className="font-sans-alt text-muted-custom" style={{ fontSize: '0.95rem' }}>
                We curate materials with geographic resonance—stones shaped by tides, oaks dried by valley winds, and hand-beaten metals that gather patina with age.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {materials.map((mat) => (
              <Col key={mat.name} lg={2} md={4} sm={6}>
                <div className="material-card">
                  <img src={mat.image} alt={mat.name} className="material-card-img" />
                  <div className="material-card-overlay">
                    <h5 className="font-serif-editorial text-white mb-1 fs-5">{mat.name}</h5>
                    <p className="font-sans-alt mb-0 text-white-50" style={{ fontSize: '0.75rem' }}>{mat.texture}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/material-studio" className="btn btn-atelier btn-atelier-accent">
              Explore Texture Studio
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. The Design Journey Pathway */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>The Methodology</span>
              <h2 className="font-serif-editorial display-5 mb-4">Our Calibrated Design Journey</h2>
              <p className="font-sans-alt text-muted-custom mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                We compose extraordinary homes through a patient, architectural sequence. Watch the path light up as your vision progresses through our hands.
              </p>
              <div className="p-4 glass-panel border-start border-3 border-accent mt-4">
                <span className="font-sans-alt text-uppercase text-muted-custom d-block mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Current Highlighted Stage</span>
                <h5 className="font-serif-editorial mb-2">{journeySteps[activeStep].phase}</h5>
                <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.85rem' }}>{journeySteps[activeStep].desc}</p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="journey-path ps-md-5">
                {journeySteps.map((step, idx) => (
                  <div 
                    key={step.phase}
                    className={`journey-step ${idx === activeStep ? 'active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="font-sans-alt text-uppercase text-muted-custom d-block" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>Phase 0{idx + 1}</span>
                    <h3 className="font-serif-editorial my-1 text-dark fs-4">{step.phase}</h3>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.85rem' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 7. Why Choose Us & Statistics */}
      <section className="py-9 bg-light" style={{ backgroundColor: 'var(--color-bg-ivory)' }}>
        <Container>
          <Row className="mb-5 text-center justify-content-center">
            <Col lg={7}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>Excellence Defined</span>
              <h2 className="font-serif-editorial display-5">Why Connoisseurs Choose Us</h2>
            </Col>
          </Row>

          <Row className="gy-4 mb-6">
            {[
              { title: 'Personalized Design Process', desc: 'We do not build templates. Your lifestyle dictates the floor plan, light flow, and custom furnishings.' },
              { title: 'Bespoke Solutions', desc: 'In-house furniture blueprints and relationships with premium stonemasons in Tuscany and wood-carvers in Kyoto.' },
              { title: 'Premium Raw Materials', desc: 'No synthetic replacements. We only use stone, plaster, solid timber, organic linens, and brushed metals.' },
              { title: 'Attention to Detail', desc: 'Aligning joinery gaps to the millimeter and calculating light incidence changes throughout the seasons.' },
              { title: 'End-to-End Coordination', desc: 'Complete procurement management, contractor vetting, and white-glove site setup.' },
              { title: 'Exceptional Craftsmanship', desc: 'Decades of experience building luxury Mediterranean villas and luxury boutique hotels.' }
            ].map((card, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div 
                  className="bg-white p-4 h-100 transition-all border border-light"
                  style={{ 
                    boxShadow: '0 4px 30px rgba(42, 51, 58, 0.02)',
                    transition: 'var(--transition-medium)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3 p-2 bg-light text-accent rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-bg-alabaster)' }}>
                      <Compass size={18} className="text-accent" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <h5 className="font-serif-editorial mb-0 text-dark fs-5">{card.title}</h5>
                  </div>
                  <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{card.desc}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Animated Statistics */}
          <Row className="text-center mt-5 gy-4 pt-5 border-top border-light">
            <Col md={3} xs={6}>
              <h3 className="font-serif-display display-4 mb-2 text-accent" style={{ color: 'var(--color-accent)' }}>{stats.projects}+</h3>
              <p className="font-sans-alt text-uppercase text-muted-custom mb-0" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Projects Completed</p>
            </Col>
            <Col md={3} xs={6}>
              <h3 className="font-serif-display display-4 mb-2 text-accent" style={{ color: 'var(--color-accent)' }}>{stats.years}+</h3>
              <p className="font-sans-alt text-uppercase text-muted-custom mb-0" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Years Experience</p>
            </Col>
            <Col md={3} xs={6}>
              <h3 className="font-serif-display display-4 mb-2 text-accent" style={{ color: 'var(--color-accent)' }}>{stats.satisfaction}%</h3>
              <p className="font-sans-alt text-uppercase text-muted-custom mb-0" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Client Satisfaction</p>
            </Col>
            <Col md={3} xs={6}>
              <h3 className="font-serif-display display-4 mb-2 text-accent" style={{ color: 'var(--color-accent)' }}>{stats.specialists}+</h3>
              <p className="font-sans-alt text-uppercase text-muted-custom mb-0" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>Design Specialists</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-9 bg-white">
        <Container>
          <Row className="mb-5 text-center justify-content-center">
            <Col lg={7}>
              <span className="text-uppercase font-sans-alt text-muted-custom d-block mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>Client Journals</span>
              <h2 className="font-serif-editorial display-5">Stories of Elevated Living</h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="p-5 glass-panel text-center position-relative">
                <div className="d-flex justify-content-center mb-4 text-warning">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif-editorial fs-4 text-dark mb-4 italic">
                  "Working with The Coastal Atelier was a masterclass in collaboration. They listened to our stories, walked the property in different lights, and delivered a residence that literally mirrors our soul. It feels like a bespoke sanctuary."
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="rounded-circle overflow-hidden" style={{ width: '50px', height: '50px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                      alt="Helena Vance" 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="text-start">
                    <h6 className="font-serif-editorial text-dark mb-0 fs-6">Helena Vance & Family</h6>
                    <p className="font-sans-alt text-muted-custom mb-0" style={{ fontSize: '0.75rem' }}>Malibu Beach Estate Villa</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 9. Final Call to Action */}
      <section 
        className="py-10 text-center text-white position-relative cta-parallax-section" 
        style={{
          backgroundImage: 'linear-gradient(rgba(42, 51, 58, 0.45), rgba(42, 51, 58, 0.45)), url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={8}>
              <span className="text-uppercase font-sans-alt mb-3 d-inline-block text-white-50" style={{ letterSpacing: '0.25em', fontSize: '0.85rem' }}>Start Your Journey</span>
              <h2 className="font-serif-editorial display-4 text-white mb-4">Let's Create Spaces That Inspire Everyday Living.</h2>
              <p className="font-sans-alt text-white-50 mx-auto mb-5" style={{ maxWidth: '600px', fontSize: '1rem', lineHeight: '1.7' }}>
                Whether you seek a serene coastal villa, a contemporary workspace, or a completely custom modular kitchen, our design studio is ready to write your spatial chapter.
              </p>
              <div className="cta-btn-group d-flex gap-3 justify-content-center align-items-center">
                <Link to="/contact?consultation=true" className="btn btn-atelier btn-atelier-accent text-nowrap">
                  Book Consultation
                </Link>
                <Link to="/portfolio" className="btn btn-atelier btn-atelier-secondary border-white text-white text-nowrap">
                  Explore Projects
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
