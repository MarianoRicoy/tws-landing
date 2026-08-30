'use client';

import { BrainCircuit, Code, Repeat } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const PillarCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <motion.div
    className="group relative bg-surface-dark/40 rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-cyan/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative">
      <div className="w-14 h-14 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/50 transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent-cyan" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-muted-white leading-relaxed text-sm">{children}</p>
    </div>
  </motion.div>
);

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Estrategia y Diseño',
    description: 'Antes de escribir una línea de código, entendemos el problema, definimos la arquitectura y trazamos el roadmap. Diseñamos pensando en el producto, el negocio y su capacidad de escalar.',
  },
  {
    icon: Code,
    title: 'Ingeniería y Ejecución',
    description: 'Construimos soluciones robustas, seguras y escalables, combinando ingeniería de software, inteligencia artificial y buenas prácticas de desarrollo.',
  },
  {
    icon: Repeat,
    title: 'Iteración e Impacto',
    description: 'Lanzamos, medimos y evolucionamos. La tecnología no termina con el deploy: mejoramos continuamente el producto a partir de resultados reales.',
  },
];

export default function Enfoque() {
  return (
    <section data-theme="dark" className="py-28 bg-tws-solid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] md:text-5xl font-bold text-white mb-4">
            Cómo Abordamos Cada <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Proyecto</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} icon={pillar.icon} title={pillar.title}>
              {pillar.description}
            </PillarCard>
          ))}
        </div>
      </div>
    </section>
  );
}
