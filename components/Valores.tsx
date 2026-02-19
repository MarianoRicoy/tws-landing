import { Hash, Heart, Zap } from 'lucide-react';

import React from 'react';

const ValueCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-surface-dark/40 rounded-2xl p-8 border border-white/10">
    <div className="w-12 h-12 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-accent-cyan" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-muted-white leading-relaxed text-sm">{children}</p>
  </div>
);

export default function Valores() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Valores</h2>
          <p className="text-muted-white max-w-xl mx-auto">Los pilares que sostienen cada línea de código que escribimos.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard icon={Hash} title="Ingeniería">
            Arquitecturas sólidas y escalables. Creemos en el código limpio como base de cualquier solución duradera.
          </ValueCard>
          <ValueCard icon={Heart} title="Alma">
            Empatía en el diseño y propósito en el desarrollo. Ponemos a las personas en el centro de la tecnología.
          </ValueCard>
          <ValueCard icon={Zap} title="Innovación">
            Exploración constante de nuevas fronteras. Incubamos ideas propias que desafían el status quo del mercado.
          </ValueCard>
        </div>
      </div>
    </section>
  );
}
