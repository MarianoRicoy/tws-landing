'use client';

import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-background-dark text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="border-b border-white/10 my-12"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="TWS Logo" className="h-7 w-auto" />
            </Link>
            <p className="text-muted-white leading-relaxed pr-8">
              Transformamos ideas complejas en productos digitales con alma. Software Factory + Product Lab.
            </p>
          </div>

          {/* Links Container */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
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

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-white text-xs">
          <p>&copy; {new Date().getFullYear()} TWS Tech With Soul. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}