import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleChat = () => {
    // Open a template WhatsApp link without prefilled text message
    window.open('https://wa.me/13105558930', '_blank');
  };

  return (
    <div 
      className="position-fixed" 
      style={{ 
        bottom: '2.5rem', 
        right: '2.5rem', 
        zIndex: 999,
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleChat}
      aria-label="Chat on WhatsApp"
    >
      <div className="d-flex align-items-center justify-content-end">
        {/* Circular Floating Button */}
        <div 
          className="d-flex align-items-center justify-content-center whatsapp-btn-pulse"
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: hovered ? '#128C7E' : '#25D366', 
            color: '#FFFFFF',
            borderRadius: '50%',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
            transition: 'background-color 0.4s ease, transform 0.4s ease',
            transform: hovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.416 1.451 5.414 0 9.825-4.411 9.829-9.83.002-2.628-1.023-5.1-2.885-6.963C17.144 1.86 14.675 1.83 12.002 1.83c-5.417 0-9.829 4.412-9.832 9.832-.001 1.93.502 3.818 1.458 5.424L2.684 21.02l4.116-1.079zm11.456-6.879c-.312-.156-1.85-.913-2.137-1.018-.287-.104-.497-.156-.708.156-.21.312-.816 1.018-1 1.229-.184.21-.368.234-.68.078-.312-.156-1.319-.486-2.514-1.551-.93-.83-1.557-1.855-1.74-2.167-.184-.312-.02-.48.136-.636.14-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.708-1.706-.97-2.336-.255-.614-.515-.531-.708-.541-.184-.01-.395-.01-.606-.01s-.552.08-.84.39c-.287.312-1.097 1.072-1.097 2.616 0 1.543 1.124 3.033 1.28 3.242.156.21 2.21 3.376 5.353 4.733.748.323 1.332.517 1.789.662.752.239 1.436.205 1.977.125.602-.09 1.85-.757 2.112-1.453.262-.697.262-1.299.184-1.423-.079-.12-.288-.192-.6-.348z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
