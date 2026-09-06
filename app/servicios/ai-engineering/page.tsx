'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BrainCircuit, Database, Cpu, Sparkles, BookOpen, Bot, Wrench, ArrowRight } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';

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
  points,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  index: number;
  points?: string[];
}) => (
  <motion.div
    className="group relative bg-surface-dark/40 rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(58,130,246,0.1)] flex flex-col h-full"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    custom={index}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl bg-background-dark border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent-cyan/50 transition-colors duration-500">
        <Icon className="w-7 h-7 text-accent-cyan" />
      </div>

      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
        {title}
      </h3>

      <p className="text-slate-400 leading-relaxed text-sm mb-8">{children}</p>

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
    icon: BrainCircuit,
    title: 'Sistemas y Agentes de IA',
    description:
      'Diseñamos agentes y sistemas capaces de trabajar con contexto, utilizar herramientas y ejecutar tareas dentro de procesos reales.',
    points: ['Agentes especializados', 'Orquestación de tareas', 'Integración con herramientas'],
  },
  {
    icon: Database,
    title: 'IA Privada y Conocimiento Empresarial',
    description:
      'Construimos sistemas que aprovechan información y conocimiento propio de cada organización, con arquitecturas diseñadas para mantener control sobre sus datos.',
    points: ['Modelos privados y controlados', 'RAG y bases de conocimiento', 'Memoria y contexto empresarial'],
  },
  {
    icon: Cpu,
    title: 'Integración y Automatización Inteligente',
    description:
      'Integramos inteligencia artificial con sistemas, APIs, bases de datos y procesos existentes para llevar la IA del chat a la operación real.',
    points: ['Integración con sistemas existentes', 'Automatización de procesos', 'APIs y herramientas'],
  },
];

const flowModules = [
  { icon: BookOpen, label: 'Knowledge' },
  { icon: Bot, label: 'Agents' },
  { icon: Wrench, label: 'Tools' },
];

function Brain01FlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl border border-white/10 bg-surface-dark/60 p-6 md:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-glow/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-glow/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
        {/* Brain-01 node */}
        <motion.div
          animate={{ boxShadow: ['0 0 20px rgba(58,130,246,0.15)', '0 0 35px rgba(58,130,246,0.35)', '0 0 20px rgba(58,130,246,0.15)'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-background-dark border border-accent-cyan/40"
        >
          <BrainCircuit className="w-5 h-5 text-accent-cyan shrink-0" />
          <span className="text-sm font-bold text-white tracking-wide">Brain-01</span>
        </motion.div>

        <ArrowRight className="w-5 h-5 text-accent-cyan/50 rotate-90 md:rotate-90" />

        {/* Knowledge + Agents + Tools */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
          {flowModules.map((mod, i) => (
            <React.Fragment key={mod.label}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-background-dark/80 border border-white/10 min-w-[100px] flex-1 sm:flex-none"
              >
                <mod.icon className="w-4 h-4 text-accent-cyan" />
                <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">{mod.label}</span>
              </motion.div>
              {i < flowModules.length - 1 && (
                <span className="hidden sm:inline text-accent-cyan/40 text-lg font-light">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <ArrowRight className="w-5 h-5 text-accent-cyan/50 rotate-90" />

        {/* AI Engineering output */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30"
        >
          <Sparkles className="w-5 h-5 text-accent-cyan shrink-0" />
          <span className="text-sm font-bold text-white tracking-wide">AI Engineering</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function AIEngineeringPage() {
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
            <p
              className="text-base text-accent-cyan tracking-widest uppercase font-semibold"
              style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}
            >
              AI ENGINEERING
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Inteligencia Artificial <br />{' '}
              <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                aplicada a problemas reales
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Diseñamos sistemas de inteligencia artificial que conectan modelos, conocimiento, agentes y
              herramientas para automatizar procesos, ampliar capacidades y resolver desafíos complejos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
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

      {/* Brain-01 Featured Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <p
                className="text-sm text-accent-cyan tracking-widest uppercase font-semibold mb-6"
                style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}
              >
                BRAIN-01
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                Construimos la tecnología que nosotros mismos usamos
              </h2>

              <p className="text-white/70 leading-relaxed text-base md:text-lg font-medium">
                Brain-01 es nuestra infraestructura interna de inteligencia artificial: un entorno privado
                donde conectamos modelos, conocimiento, agentes y herramientas para asistir nuestros propios
                procesos de ingeniería. Nos permite experimentar, aprender y aplicar en nuestros proyectos
                tecnologías que primero utilizamos dentro de TWS.
              </p>
            </motion.div>

            <Brain01FlowDiagram />
          </div>
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
            ¿Tenés un desafío donde la IA pueda hacer la{' '}
            <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
              diferencia?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-white mb-12 max-w-2xl mx-auto font-medium"
          >
            Conversemos sobre el problema antes de hablar de modelos. Diseñamos la solución de IA adecuada
            para tu negocio, tus datos y tus procesos.
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
