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

const PillarCard = ({ 
  icon: Icon, 
  title, 
  children, 
  index, 
  tags, 
  points 
}: { 
  icon: React.ElementType, 
  title: string, 
  children: React.ReactNode, 
  index: number, 
  tags?: string[],
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
      <div className="flex justify-between items-start mb-8 gap-4">
        <div className="w-14 h-14 shrink-0 rounded-xl bg-background-dark border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors duration-500">
          <Icon className="w-7 h-7 text-accent-cyan" />
        </div>
        {tags && (
          <div className="relative flex-1 overflow-hidden h-7 mt-2">
            <motion.div 
              className="flex gap-3 whitespace-nowrap"
              animate={{ x: [0, -100] }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...tags, ...tags].map((tag, i) => (
                <span key={i} className="text-[9px] font-bold tracking-widest text-slate-400 border border-white/10 px-2.5 py-1 rounded-full uppercase bg-white/5 whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#181C26] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#181C26] to-transparent z-10" />
          </div>
        )}
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
    icon: Layout,
    title: 'Presencia Digital de Alto Impacto',
    tags: ['Web', 'Mobile', 'UI/UX'],
    description: 'Creamos plataformas web y aplicaciones móviles que no solo se ven bien, sino que funcionan a la perfección. Diseñamos experiencias pensadas para que tus clientes naveguen con facilidad y tu negocio pueda escalar sin límites técnicos.',
    points: [
      'Experiencia de usuario (UX) fluida',
      'Velocidad de carga optimizada',
      'Adaptable a cualquier dispositivo'
    ]
  },
  {
    icon: Users,
    title: 'Equipos Expertos a tu Medida',
    tags: ['Senior', 'Agile', 'DevOps'],
    description: 'Si ya tienes un proyecto en marcha pero necesitas más potencia de fuego, te brindamos profesionales senior que se integran a tu equipo actual. Es la forma más rápida de acelerar tus desarrollos con el respaldo de ingenieros que entienden tus objetivos.',
    points: [
      'Integración inmediata al equipo',
      'Reducción de tiempos de entrega',
      'Experiencia técnica comprobada'
    ]
  },
  {
    icon: Rocket,
    title: 'De la Idea al Producto Real',
    tags: ['Startup', 'MVP', 'Scale'],
    description: 'Ideal para startups que necesitan validar su negocio rápido. Construimos una primera versión sólida de tu producto para que puedas lanzarla al mercado, atraer usuarios y obtener inversión, asegurando que los cimientos técnicos sean los correctos.',
    points: [
      'Lanzamiento rápido al mercado',
      'Arquitectura sólida y escalable',
      'Listo para rondas de inversión'
    ]
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
              Ingeniería de Software <br /> para <span className="text-accent-cyan text-glow">Scale-ups</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Transformamos la complejidad técnica en ventaja competitiva. Nuestro enfoque de Software Factory combina la excelencia artesanal del código con procesos industriales de entrega continua.
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
                tags={pillar.tags}
                points={pillar.points}
              >
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
              src="/sala4.png"
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
