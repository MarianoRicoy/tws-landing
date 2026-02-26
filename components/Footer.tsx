'use client';

import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="w-full bg-gradient-to-t from-black via-background-dark to-surface-dark/50 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 px-0">
          
          {/* Column 1: Isologo */}
          <div className="flex justify-center md:justify-start md:w-1/4">
            <Link href="/" className="inline-block">
              <img src="/Isologo.svg" alt="TWS Isologo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Links Container */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-6">Servicios</h4>
              <ul className="space-y-3 text-muted-white">
                <li><Link href="/#servicios" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/#servicios" className="hover:text-white transition-colors">Aplicaciones Móviles</Link></li>
                <li><Link href="/#servicios" className="hover:text-white transition-colors">Consultoría</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-6">Empresa</h4>
              <ul className="space-y-3 text-muted-white">
                <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/en-desarrollo" className="hover:text-white transition-colors">Productos</Link></li>
                <li><button onClick={openModal} className="hover:text-white transition-colors">Contacto</button></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-white mb-6">Social</h4>
              <ul className="space-y-3 text-muted-white">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-muted-white text-[10px] md:text-xs tracking-wider px-0">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} TWS Tech With Soul. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}