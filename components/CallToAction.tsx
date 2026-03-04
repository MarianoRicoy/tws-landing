'use client';

import { useModal } from '@/contexts/ModalContext';

export default function CallToAction() {
  const { openModal } = useModal();

  return (
    <section data-theme="dark" className="relative py-24 md:py-32 text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-muted-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Conversemos sobre cómo TWS puede impulsar su crecimiento con soluciones tecnológicas de alto impacto.
        </p>
        <button 
          onClick={openModal}
          className="px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent-cyan/10 w-full sm:w-auto"
        >
          Agendar Reunión
        </button>
      </div>
    </section>
  );
}
