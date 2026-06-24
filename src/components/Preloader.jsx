import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container">
      <div className="text-center px-4">
        <span 
          className="preloader-brand d-block animate-fade-in"
          style={{ 
            animation: 'fadeIn 1s ease-out',
            letterSpacing: '0.2em',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' 
          }}
        >
          COASTAL ATELIER
        </span>
        <span 
          className="text-uppercase text-muted-custom font-sans-alt d-block mt-1" 
          style={{ 
            fontSize: '0.65rem', 
            letterSpacing: '0.4em' 
          }}
        >
          INTERIOR ARCHITECTURE
        </span>
        <div className="preloader-line mx-auto">
          <div className="preloader-progress" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
