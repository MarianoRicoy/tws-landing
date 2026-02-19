'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useModal } from '@/contexts/ModalContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const pathname = usePathname();

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleContactAndCloseMenu = () => {
    openModal();
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      handleMobileLinkClick();
    }
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative max-w-4xl mx-auto mt-6 rounded-full bg-surface-dark/30 backdrop-blur-md border border-white/10 flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="TWS Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-8 text-sm font-medium text-muted-white">
            <a href="/#servicios" onClick={handleServicesClick} className="hover:text-white transition-colors">Servicios</a>
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Productos</Link>
            <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <button 
            onClick={openModal}
            className="px-6 py-2 rounded-full bg-accent-cyan text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Hamburger Button */}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full mt-4 left-0 w-full bg-surface-dark/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl md:hidden">
            <div className="flex flex-col p-6 gap-6 text-center text-muted-white">
              <a href="/#servicios" onClick={handleServicesClick} className="hover:text-white transition-colors py-2">Servicios</a>
              <Link href="/en-desarrollo" onClick={handleMobileLinkClick} className="hover:text-white transition-colors py-2">Productos</Link>
              <Link href="/en-desarrollo" onClick={handleMobileLinkClick} className="hover:text-white transition-colors py-2">Nosotros</Link>
              <button 
                onClick={handleContactAndCloseMenu}
                className="w-full px-5 py-3 rounded-full bg-accent-cyan text-white font-semibold transition-opacity hover:opacity-90"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}