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
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-theme');
            setIsDarkTheme(theme !== 'light');
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px', // Detects theme based on what's under the navbar
        threshold: 0
      }
    );

    const sections = document.querySelectorAll('[data-theme]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
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
                <Link 
                  href="/" 
                  className="flex items-center group"
                  onClick={handleLogoClick}
                >
                  <img 
                    src="/Isologo.svg" 
                    alt="TWS Isologo" 
                    className={`h-8 w-auto transition-all duration-500 group-hover:scale-110 ${!isDarkTheme ? 'invert brightness-0' : ''}`} 
                  />
                </Link>
              </div>

              {/* Minimal Desktop Menu (Centered) */}
              <div className={`hidden md:flex items-center gap-10 text-[15px] font-normal transition-colors duration-500 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                {pathname !== '/' && (
                  <>
                    <Link 
                      href="/" 
                      className={`transition-all border-b-2 border-transparent hover:border-white pb-1 ${pathname === '/' ? 'border-white' : ''}`}
                    >
                      Inicio
                    </Link>
                    <span className={`font-light text-lg transition-colors duration-500 ${isDarkTheme ? 'text-white/20' : 'text-black/10'}`}>|</span>
                  </>
                )}
                <a 
                  href="/#servicios" 
                  onClick={(e) => handleNavigation(e, '/#servicios')} 
                  className={`transition-all border-b-2 border-transparent hover:border-white pb-1`}
                >
                  Servicios
                </a>
                <span className={`font-light text-lg transition-colors duration-500 ${isDarkTheme ? 'text-white/20' : 'text-black/10'}`}>|</span>
                <Link 
                  href="/nosotros" 
                  className={`transition-all border-b-2 border-transparent hover:border-white pb-1 ${pathname === '/nosotros' ? 'border-white' : ''}`}
                >
                  Nosotros
                </Link>
                <span className={`font-light text-lg transition-colors duration-500 ${isDarkTheme ? 'text-white/20' : 'text-black/10'}`}>|</span>
                <button 
                  onClick={openModal} 
                  className={`transition-all border-b-2 border-transparent hover:border-white pb-1`}
                >
                  Contacto
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`transition-colors duration-500 p-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
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

            {isMobileMenuOpen && (
              <div className="fixed inset-x-0 top-[90px] mx-6 rounded-2xl bg-background-dark/95 backdrop-blur-xl border border-white/10 md:hidden overflow-hidden shadow-2xl z-50">
                <div className="flex flex-col py-8 px-6 gap-6 text-center text-[11px] tracking-[0.2em] font-bold text-white uppercase">
                  <Link href="/" onClick={handleLogoClick} className="hover:text-accent-cyan transition-colors">Inicio</Link>
                  <a href="/#servicios" onClick={(e) => handleNavigation(e, '/#servicios')} className="hover:text-accent-cyan transition-colors">Servicios</a>
                  <Link href="/nosotros" onClick={(e) => handleNavigation(e, '/nosotros')} className="hover:text-accent-cyan transition-colors">Nosotros</Link>
                  <button onClick={handleContactAndCloseMenu} className="text-accent-cyan font-black hover:opacity-80 transition-opacity">Contacto</button>
                </div>
              </div>
            )}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}