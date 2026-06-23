import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Material Studio', path: '/material-studio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`py-3 transition-all duration-500 ${
        scrolled 
          ? 'glass-panel shadow-sm bg-opacity-95' 
          : 'bg-transparent'
      }`}
      style={{
        transition: 'background-color 0.5s ease, padding 0.5s ease, box-shadow 0.5s ease',
        paddingTop: scrolled ? '0.8rem' : '1.5rem',
        paddingBottom: scrolled ? '0.8rem' : '1.5rem',
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex flex-column"
          style={{ letterSpacing: '0.15em' }}
        >
          <span 
            className="font-serif-display text-uppercase" 
            style={{ 
              fontSize: '1.4rem', 
              color: 'var(--color-text-dark)',
              fontWeight: '600'
            }}
          >
            COASTAL ATELIER
          </span>
          <span 
            className="text-uppercase text-muted-custom" 
            style={{ 
              fontSize: '0.55rem', 
              letterSpacing: '0.4em', 
              marginTop: '-3px' 
            }}
          >
            INTERIOR ARCHITECTURE
          </span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0 p-0 text-dark focus-none"
        >
          {expanded ? <X size={24} /> : <Menu size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
          <Nav className="mx-auto align-items-lg-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Nav.Link
                  key={link.name}
                  as={Link}
                  to={link.path}
                  className={`px-3 py-2 text-uppercase font-sans-alt transition-all`}
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-dark)',
                    borderBottom: isActive ? '1px solid var(--color-accent)' : '1px solid transparent',
                  }}
                >
                  {link.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <Link 
              to="/contact?consultation=true" 
              className="btn btn-atelier btn-atelier-primary text-nowrap"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.75rem' }}
            >
              Book Consultation
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
