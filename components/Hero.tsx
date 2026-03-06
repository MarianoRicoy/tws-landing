'use client';

import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section data-theme="dark" className="relative pt-28 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle background glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] bg-white/[0.02] blur-[80px] md:blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <p className="text-[9px] md:text-xs text-accent-cyan tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold" style={{ textShadow: '0 0 20px rgba(58, 130, 246, 0.6)' }}>
            DESARROLLO DE SOFTWARE + PRODUCTOS
          </p>

          <h1 className="text-[2.75rem] leading-[1.1] md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white max-w-5xl">
            Tecnología con <span className="text-accent-cyan">Propósito</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed font-medium px-2 md:px-0">
            Fusionamos la ingeniería de una agencia de desarrollo con la visión de una incubadora de productos. Transformamos ideas complejas en soluciones digitales con alma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-2 md:pt-4 w-full sm:w-auto px-4 md:px-0">
            <button 
              onClick={openModal}
              className="px-8 md:px-10 py-4 rounded-md bg-accent-cyan border border-accent-cyan text-white font-bold text-sm hover:opacity-90 hover:shadow-md hover:shadow-accent-cyan/10 transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto shadow-md shadow-accent-cyan/10">
              Agendar Reunión
            </button>
            <button 
              onClick={openModal}
              className="px-8 md:px-10 py-4 rounded-md border border-white/10 text-white/80 font-bold text-sm hover:bg-accent-cyan hover:text-white hover:border-accent-cyan hover:shadow-md hover:shadow-accent-cyan/10 transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto">
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}