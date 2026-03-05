'use client';

import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer data-theme="dark" className="w-full bg-[#0F1219] text-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 px-0">
          
          {/* Column 1: Brand Name */}
          <div className="flex justify-center md:justify-start md:w-1/4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-muted-white tracking-tight">
                Tech With <span className="bg-clip-text text-transparent bg-gradient-to-r from-muted-white to-accent-cyan/80">Soul</span>
              </span>
            </Link>
          </div>

          {/* Column 2: Servicios */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Servicios</h4>
            <ul className="space-y-4 text-[#94a3b8]">
              <li><Link href="/#servicios" className="hover:text-accent-cyan transition-colors">Desarrollo Web</Link></li>
              <li><Link href="/#servicios" className="hover:text-accent-cyan transition-colors">Aplicaciones Móviles</Link></li>
              <li><Link href="/#servicios" className="hover:text-accent-cyan transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Empresa</h4>
            <ul className="space-y-4 text-[#94a3b8]">
              <li><Link href="/nosotros" className="hover:text-accent-cyan transition-colors">Sobre Nosotros</Link></li>
              <li><button onClick={openModal} className="hover:text-accent-cyan transition-colors">Contacto</button></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Social</h4>
            <ul className="space-y-4 text-[#94a3b8]">
              <li><a href="https://www.linkedin.com/company/tech-with-soul" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/tech.with.soul/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 order-2 md:order-1">
            <img src="/Isologo.svg" alt="TWS Mini Logo" className="h-5 w-auto opacity-50" />
            <p className="text-[#64748b] text-xs">
              &copy; {new Date().getFullYear()} TWS Tech With Soul. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex gap-8 text-[#64748b] text-xs order-1 md:order-2">
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/en-desarrollo" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}