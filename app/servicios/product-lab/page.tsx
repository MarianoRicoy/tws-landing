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

const PillarCard = ({ icon: Icon, title, children, index }: { icon: React.ElementType, title: string, children: React.ReactNode, index: number }) => (
  <motion.div
    className="group relative bg-surface-dark/40 rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    custom={index}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-cyan/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative">
      <div className="w-14 h-14 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/50 transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent-cyan" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-muted-white leading-relaxed text-sm">{children}</p>
    </div>
  </motion.div>
);

const pillars = [
  {
    icon: Lightbulb,
    title: 'Incubación de Ideas',
    description: 'Transformamos conceptos en productos viables. Analizamos problemas reales del mercado y diseñamos soluciones tecnológicas que aporten valor inmediato.',
  },
  {
    icon: Microscope,
    title: 'Desarrollo de Productos Propios',
    description: 'Construimos y escalamos nuestro propio ecosistema de productos SaaS. Aplicamos las mejores prácticas de ingeniería en cada línea de código.',
  },
  {
    icon: Rocket,
    title: 'Experimentación Continua',
    description: 'Iteramos rápido basado en datos. Nuestro laboratorio es un entorno de innovación constante donde validamos hipótesis y optimizamos la experiencia.',
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
              Innovación interna, <br /> impacto <span className="text-accent-cyan">digital real</span>
            </h1>
            
            <p className="text-lg text-muted-white max-w-3xl mx-auto leading-relaxed font-medium">
              Detectamos problemas, construimos soluciones y escalamos productos propios. El Product Lab es donde la curiosidad técnica se encuentra con la visión de negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section - Restored Cards from Enfoque.tsx */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} icon={pillar.icon} title={pillar.title} index={i}>
                {pillar.description}
              </PillarCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <Image
              src="/fotoLiving.png"
              alt="TWS Product Lab Environment"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
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
            <Link 
              href="/en-desarrollo" 
              className="px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-cyan/20 w-full sm:w-auto"
            >
              Ver productos
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
