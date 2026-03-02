'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, Rocket, Layout } from 'lucide-react';
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
    icon: Layout,
    title: 'Desarrollo Web & Mobile',
    description: 'Construimos interfaces modernas y escalables utilizando React y React Native. Enfoque en performance, accesibilidad y experiencia de usuario excepcional.',
  },
  {
    icon: Users,
    title: 'Staff Augmentation',
    description: 'Integramos talento técnico senior en tu equipo actual. Amplía tu capacidad de desarrollo con ingenieros que comparten tu cultura y objetivos.',
  },
  {
    icon: Rocket,
    title: 'MVP para Startups',
    description: 'Transformamos ideas en productos mínimos viables en tiempo récord. Validamos tu modelo de negocio con arquitectura sólida desde el primer día.',
  },
];

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS', 'Figma'
];

export default function SoftwareFactoryPage() {
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
              SOFTWARE FACTORY
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Tu visión de negocio, <br /> respaldada por <span className="text-accent-cyan">arquitectura de alto nivel</span>
            </h1>
            
            <p className="text-lg text-muted-white max-w-3xl mx-auto leading-relaxed font-medium">
              Construimos plataformas robustas y escalables que se adaptan al crecimiento de tu empresa. Combinamos excelencia técnica con agilidad operativa.
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
              src="/sala2.jpeg"
              alt="TWS Software Factory Workspace"
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
            ¿Listo para escalar tu <br /> <span className="text-accent-cyan">infraestructura técnica?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-white mb-12 max-w-2xl mx-auto font-medium"
          >
            Analicemos juntos los requerimientos de tu proyecto y diseñemos una solución a medida que impulse tu crecimiento.
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
              className="px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-cyan/20 w-full sm:w-auto"
            >
              Iniciar Proyecto
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
