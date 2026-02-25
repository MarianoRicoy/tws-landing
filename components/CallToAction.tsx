'use client';

import { useModal } from '@/contexts/ModalContext';

export default function CallToAction() {
  const { openModal } = useModal();

  return (
    <section className="relative py-24 md:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,37,81,0.5),transparent_60%)] -z-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-muted-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Hablemos sobre cómo TWS puede impulsar tu producto.
        </p>
        <button
          onClick={openModal}
          className="px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-base shadow-lg shadow-accent-cyan/10 hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-cyan/20 transition-all duration-300"
        >
          Contactar Ahora
        </button>
      </div>
    </section>
  );
}
