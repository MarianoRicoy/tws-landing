'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, FlaskConical } from 'lucide-react';

type Stage = {
  label: string;
  title: string;
  description: string;
  current?: boolean;
};

const stages: Stage[] = [
  {
    label: 'Ahora',
    title: 'Base experimental',
    description:
      'Detección y conteo sobre material aéreo; preparación del pipeline de entrenamiento y evaluación.',
    current: true,
  },
  {
    label: 'Próximo hito',
    title: 'MVP de campo',
    description:
      'Captura real, procesamiento automatizado, conteo contrastado con referencia y reporte de resultados.',
  },
  {
    label: 'Evolución',
    title: 'Video / tracking',
    description:
      'Conteo sobre secuencias de video, seguimiento temporal y prevención de duplicados.',
  },
  {
    label: 'Evolución',
    title: 'Inteligencia productiva',
    description:
      'Históricos, comparaciones, métricas y alertas; investigación de estimación de peso y condición mediante análisis visual.',
  },
];

const StageNode = ({ stage, index }: { stage: Stage; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 + index * 0.1 }}
    className={`relative flex-1 rounded-xl p-5 border flex flex-col ${
      stage.current
        ? 'bg-accent-cyan/10 border-accent-cyan/40'
        : 'bg-background-dark/80 border-white/10'
    }`}
  >
    {stage.current && (
      <motion.div
        aria-hidden="true"
        animate={{ boxShadow: ['0 0 20px rgba(58,130,246,0.15)', '0 0 35px rgba(58,130,246,0.35)', '0 0 20px rgba(58,130,246,0.15)'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-xl pointer-events-none"
      />
    )}
    <span
      className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${
        stage.current ? 'text-accent-cyan' : 'text-white/40'
      }`}
    >
      {stage.label}
    </span>
    <h4 className={`text-base font-bold mb-2 ${stage.current ? 'text-white' : 'text-white/80'}`}>{stage.title}</h4>
    <p className={`text-[13px] leading-relaxed ${stage.current ? 'text-white/70' : 'text-white/50'}`}>
      {stage.description}
    </p>
  </motion.div>
);

export default function RoadmapTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl border border-white/10 bg-surface-dark/60 p-6 md:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-glow/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-[11px] uppercase tracking-wider font-semibold">
          <span className="flex items-center gap-2 text-accent-cyan">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent-cyan/60 border border-accent-cyan" />
            Etapa actual
          </span>
          <span className="flex items-center gap-2 text-white/40">
            <span className="w-2.5 h-2.5 rounded-sm bg-background-dark border border-white/20" />
            Etapas futuras (no disponibles hoy)
          </span>
        </div>

        {/* Main timeline */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2">
          {stages.map((stage, i) => (
            <React.Fragment key={stage.title}>
              <StageNode stage={stage} index={i} />
              {i < stages.length - 1 && (
                <div className="flex items-center justify-center shrink-0 py-1 lg:py-0 lg:px-1">
                  <ArrowRight className="w-5 h-5 text-accent-cyan/50 rotate-90 lg:rotate-0" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Parallel R&D */}
        <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4 rounded-xl p-5 bg-background-dark/80 border border-dashed border-white/15"
          >
            <div className="w-10 h-10 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5 text-accent-cyan/70" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-1">
                I+D paralela
              </span>
              <h4 className="text-base font-bold text-white/80 mb-1">Plataforma aérea VTOL propia</h4>
              <p className="text-[13px] leading-relaxed text-white/50">
                Investigación y desarrollo de un VTOL de ala fija orientado a mayor autonomía, eficiencia y cobertura
                en relevamientos extensivos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-4 rounded-xl p-5 bg-background-dark/80 border border-dashed border-white/15"
          >
            <div className="w-10 h-10 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center shrink-0">
              <FlaskConical className="w-5 h-5 text-accent-cyan/70" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-1">
                I+D futura
              </span>
              <h4 className="text-base font-bold text-white/80 mb-1">Identidad individual</h4>
              <p className="text-[13px] leading-relaxed text-white/50">
                Investigación de mecanismos para asociar observaciones a individuos, incluyendo una posible
                integración con identificación electrónica ganadera / RFID.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
