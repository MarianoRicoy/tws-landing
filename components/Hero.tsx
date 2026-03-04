'use client';

import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section data-theme="dark" className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle background glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          <p className="text-[10px] md:text-xs text-accent-cyan tracking-[0.4em] uppercase font-bold" style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}>
            DESARROLLO DE SOFTWARE + PRODUCTOS
          </p>

          <h1 className="text-[clamp(2.5rem,8vw,5rem)] md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1] max-w-5xl">
            Tecnología con <span className="text-accent-cyan" style={{ textShadow: '0 0 30px rgba(58, 130, 246, 0.6)' }}>Propósito</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
            Fusionamos la ingeniería de una agencia de desarrollo con la visión de una incubadora de productos. Transformamos ideas complejas en soluciones digitales con alma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={openModal}
              className="px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-cyan/20">
              Iniciar Proyecto
            </button>
            <Link 
              href="/en-desarrollo"
              className="px-10 py-4 rounded-md border border-white/10 text-white/80 font-bold text-sm hover:bg-white/5 hover:text-white transition-all text-center">
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}