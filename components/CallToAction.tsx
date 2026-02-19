'use client';

import { useModal } from '@/contexts/ModalContext';

export default function CallToAction() {
  const { openModal } = useModal();

  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-muted-white text-lg mb-8">
          Hablemos sobre cómo TWS puede impulsar tu producto.
        </p>
        <button
          onClick={openModal}
          className="px-8 py-3 rounded-md bg-white text-background-dark font-semibold hover:bg-opacity-90 transition-opacity"
        >
          Contactar Ahora
        </button>
      </div>
    </section>
  );
}
