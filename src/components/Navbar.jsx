// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ onContactClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleContactAndCloseMenu = () => {
    onContactClick();
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      handleMobileLinkClick();
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0c1935]/80 backdrop-blur-md">
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="TWS Logo" className="h-8 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/#servicios" onClick={handleServicesClick} className="hover:text-white transition-colors">Servicios</a>
          <Link to="/productos" className="hover:text-white transition-colors">Productos</Link>
          <Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          <button 
            onClick={onContactClick}
            className="px-5 py-2 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-[#0c1935] transition-all"
          >
            Contacto
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0c1935] border-b border-white/10 shadow-xl md:hidden">
            <div className="flex flex-col p-6 gap-6 text-center">
              <a href="/#servicios" onClick={handleServicesClick} className="hover:text-white transition-colors py-2">Servicios</a>
              <Link to="/productos" onClick={handleMobileLinkClick} className="hover:text-white transition-colors py-2">Productos</Link>
              <Link to="/nosotros" onClick={handleMobileLinkClick} className="hover:text-white transition-colors py-2">Nosotros</Link>
              <button 
                onClick={handleContactAndCloseMenu}
                className="w-full px-5 py-3 rounded-full bg-white text-[#0c1935] font-semibold transition-all"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}