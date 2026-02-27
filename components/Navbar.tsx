'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useModal } from '@/contexts/ModalContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.substring(2);
      
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 100; // Approximate height of the navbar + margin
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      };

      if (pathname !== '/') {
        router.push('/');
        setTimeout(scrollToSection, 100); // Wait for page transition
      } else {
        scrollToSection();
      }
    } else {
      // Standard page navigation, let Next's Link handle it
      router.push(href);
    }
  };

  const handleContactAndCloseMenu = () => {
    openModal();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 0.6 
          }}
          className="fixed top-0 left-0 w-full z-50 pt-10"
        >
          <nav className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between md:justify-center relative">
              
              {/* Logo (Left on mobile, absolute on desktop) */}
              <div className="md:absolute md:left-0 flex items-center">
                <Link href="/" className="flex items-center group">
                  <img src="/Isologo.svg" alt="TWS Isologo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
                </Link>
              </div>

              {/* Minimal Desktop Menu (Centered) */}
              <div className="hidden md:flex items-center gap-6 text-[13px] font-medium tracking-[0.15em] uppercase text-muted-white">
                <a href="/#servicios" onClick={(e) => handleNavigation(e, '/#servicios')} className="hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white pb-0.5">Servicios</a>
                <span className="text-white/20 font-light text-lg">|</span>
                <Link href="/en-desarrollo" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Productos</Link>
                <span className="text-white/20 font-light text-lg">|</span>
                <Link href="/nosotros" className={`${pathname === '/nosotros' ? 'text-white border-white' : ''} hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5`}>Nosotros</Link>
                <span className="text-white/20 font-light text-lg">|</span>
                <button onClick={openModal} className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Contacto</button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                  {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-xl border-b border-white/5 md:hidden overflow-hidden">
                <div className="flex flex-col py-8 px-6 gap-8 text-center text-xs tracking-[0.2em] uppercase font-medium text-muted-white">
                  <a href="/#servicios" onClick={(e) => handleNavigation(e, '/#servicios')} className="hover:text-white transition-colors">Servicios</a>
                  <Link href="/en-desarrollo" onClick={(e) => handleNavigation(e, '/en-desarrollo')} className="hover:text-white transition-colors">Productos</Link>
                  <Link href="/nosotros" onClick={(e) => handleNavigation(e, '/nosotros')} className="hover:text-white transition-colors">Nosotros</Link>
                  <button onClick={handleContactAndCloseMenu} className="text-accent-cyan font-bold">Contacto</button>
                </div>
              </div>
            )}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}