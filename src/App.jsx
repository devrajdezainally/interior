import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Global Components
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import MaterialStudio from './pages/MaterialStudio';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Preloader />
      <CustomCursor />
      <ScrollToTop />
      
      {/* Global Header */}
      <Header />
      
      {/* Route Definitions */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Redirect /projects to /portfolio as requested by header navigation specifications */}
          <Route path="/projects" element={<Navigate to="/portfolio" replace />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/material-studio" element={<MaterialStudio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Concierge floating chat widget */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
