'use client';

import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-24">
      {/* Ambient Glow - Adjusted for Orizon Style (Stronger bottom blue) */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent -z-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <p className="text-base text-accent-cyan tracking-widest uppercase font-semibold" style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}>
            SOFTWARE FACTORY + PRODUCTOS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Tecnología con <span className="text-accent-cyan">Propósito</span>
          </h1>
          
          <p className="text-lg text-muted-white max-w-2xl mx-auto leading-relaxed">
            Fusionamos la ingeniería de una Software Factory con la visión de una incubadora de productos. Transformamos ideas complejas en soluciones digitales con alma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={openModal}
              className="px-8 py-3 rounded-md bg-accent-cyan text-white font-semibold text-sm hover:opacity-90 transition-opacity">
              Iniciar Proyecto
            </button>
            <Link 
              href="/en-desarrollo"
              className="px-8 py-3 rounded-md border border-muted-white/30 text-muted-white font-semibold text-sm hover:bg-white/5 transition-colors text-center">
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}