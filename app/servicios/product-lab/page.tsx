'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Lightbulb, Microscope, Rocket } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import Link from 'next/link';
import Image from 'next/image';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const PillarCard = ({ 
  icon: Icon, 
  title, 
  children, 
  index, 
  points 
}: { 
  icon: React.ElementType, 
  title: string, 
  children: React.ReactNode, 
  index: number, 
  points?: string[]
}) => (
  <motion.div
    className="group relative bg-surface-dark/40 rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(58,130,246,0.1)] flex flex-col h-full"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    custom={index}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl bg-background-dark border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent-cyan/50 transition-colors duration-500">
        <Icon className="w-7 h-7 text-accent-cyan" />
      </div>

      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
        {title}
      </h3>
      
      <p className="text-slate-400 leading-relaxed text-sm mb-8">
        {children}
      </p>

      {points && (
        <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/40" />
              <p className="text-[13px] text-white/60 font-medium leading-tight">{point}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const pillars = [
  {
    icon: Lightbulb,
    title: 'Discovery & Estrategia',
    description: 'No empezamos con código, empezamos con preguntas. Validamos la viabilidad técnica y de mercado para asegurar que cada línea de desarrollo tenga un propósito de negocio claro.',
    points: [
      'Análisis de viabilidad técnica',
      'Definición de propuesta de valor',
      'Roadmap de producto estratégico'
    ]
  },
  {
    icon: Microscope,
    title: 'Prototipado Ágil',
    description: 'Construimos versiones funcionales de alta fidelidad en ciclos cortos. Este enfoque nos permite iterar sobre feedback real antes de comprometer recursos masivos.',
    points: [
      'Iteraciones rápidas (Sprints)',
      'Validación con usuarios reales',
      'Ajuste constante según feedback'
    ]
  },
  {
    icon: Rocket,
    title: 'Lanzamiento & Escalado',
    description: 'Desplegamos productos con arquitectura preparada para el tráfico real. Monitoreamos métricas clave y optimizamos el producto basado en datos.',
    points: [
      'Arquitectura lista para el mercado',
      'Monitoreo de métricas clave',
      'Optimización continua de producto'
    ]
  },
];

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS', 'Figma'
];

export default function ProductLabPage() {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen bg-tws-solid pt-36 pb-20 md:pt-48 md:pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-8"
          >
            <p className="text-base text-accent-cyan tracking-widest uppercase font-semibold" style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}>
              PRODUCT LAB
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Diseño de Productos <br /> con <span className="text-accent-cyan text-glow">Mentalidad VC</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              El Product Lab es nuestro ecosistema de innovación. Aquí incubamos soluciones digitales diseñadas para ser escalables, eficientes y con un propósito claro de mercado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section - Restored Cards from Enfoque.tsx */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <PillarCard 
                key={pillar.title} 
                icon={pillar.icon} 
                title={pillar.title} 
                index={i}
                points={pillar.points}
              >
                {pillar.description}
              </PillarCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section - Interactive Hover Fade */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl cursor-pointer"
          >
            {/* Base Image (Living Normal) */}
            <Image
              src="/fotoLiving.png"
              alt="TWS Product Lab Environment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Hover Image (Living con Gente) */}
            <motion.div
              className="absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/LivingConGente.png"
                alt="TWS Product Lab Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent z-20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight"
          >
            ¿Querés conocer nuestros <br /> <span className="text-accent-cyan">proyectos activos?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-white mb-12 max-w-2xl mx-auto font-medium"
          >
            te invitamos a descubrir nuestro catálogo de soluciones tecnológicas
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center pt-4"
          >
            <button 
              onClick={openModal}
              className="px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent-cyan/10 w-full sm:w-auto"
            >
              Agendar Reunión
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
