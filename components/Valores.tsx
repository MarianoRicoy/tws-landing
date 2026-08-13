'use client';

import { Hash, Heart, Zap } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const ValueCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
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

const values = [
  {
    icon: Hash,
    title: 'Ingeniería',
    description: 'Arquitecturas sólidas y escalables. Creemos en el código limpio como base de cualquier solución duradera.',
  },
  {
    icon: Heart,
    title: 'Alma',
    description: 'Empatía en el diseño y propósito en el desarrollo. Ponemos a las personas en el centro de la tecnología.',
  },
  {
    icon: Zap,
    title: 'Innovación',
    description: 'Exploración constante de nuevas fronteras. Incubamos ideas propias que desafían el status quo del mercado.',
  },
];

export default function Valores() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Valores</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard key={value.title} icon={value.icon} title={value.title}>
              {value.description}
            </ValueCard>
          ))}
        </div>
      </div>
    </section>
  );
}
