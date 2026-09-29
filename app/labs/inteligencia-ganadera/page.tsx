'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plane, Route, ScanEye, LayoutDashboard, Landmark, Cpu, Handshake, FileText } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import PillarCard from '@/components/labs/PillarCard';
import RoadmapTimeline from '@/components/labs/RoadmapTimeline';
import { LABS_DOSSIER_URL } from '@/lib/labs';

const layers = [
  {
    icon: Plane,
    title: 'Plataforma aérea',
    description:
      'Captura sistemática de imágenes y video mediante drones comerciales y, a futuro, una plataforma VTOL propia.',
  },
  {
    icon: Route,
    title: 'Autonomía de misión',
    description: 'Planificación de áreas, recorridos repetibles y adquisición consistente de información.',
  },
  {
    icon: ScanEye,
    title: 'Inteligencia artificial',
    description:
      'Detección y conteo de bovinos; evolución hacia video, tracking y nuevas métricas productivas.',
  },
  {
    icon: LayoutDashboard,
    title: 'Software TWS',
    description:
      'Procesamiento, históricos, métricas, reportes, alertas e interfaces simples para el productor.',
  },
];

const partnerships = [
  {
    icon: Landmark,
    title: 'Partner financiero',
    description:
      'Aporta capital para cubrir desarrollo, infraestructura, campañas, validación y/o prototipado.',
  },
  {
    icon: Cpu,
    title: 'Partner tecnológico',
    description:
      'Aporta hardware, infraestructura, créditos de cómputo, conectividad, cámaras, plataformas aéreas u otros recursos.',
  },
  {
    icon: Handshake,
    title: 'Partner estratégico',
    description:
      'Aporta una combinación relevante de capital, tecnología, capacidades comerciales o acceso a ecosistemas que aceleren la llegada al mercado.',
  },
];

const primaryButton =
  'px-10 py-4 rounded-md bg-accent-cyan text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent-cyan/10 w-full sm:w-auto text-center';
const secondaryButton =
  'inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-accent-cyan/5 border border-accent-cyan/40 text-white font-bold text-sm hover:text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan/60 hover:shadow-md hover:shadow-accent-cyan/10 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center';

export default function InteligenciaGanaderaPage() {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen bg-tws-solid pt-36 pb-20 md:pt-48 md:pb-32">
      {/* Hero Section */}
      <section data-theme="dark" className="relative overflow-hidden mb-24 md:mb-32">
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
              TWS LABS · PROYECTO
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl">
              Plataforma integral de{' '}
              <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                inteligencia ganadera
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Estado: investigación y experimentación
              </span>
            </div>

            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Una plataforma en la que aeronave, autonomía, inteligencia artificial y software trabajan como un único
              sistema. El conteo automático de bovinos es el primer caso de uso; el objetivo de largo plazo es
              transformar relevamientos recurrentes en inteligencia productiva sobre el rodeo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-2 w-full sm:w-auto">
              <a href={LABS_DOSSIER_URL} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                <FileText size={16} />
                Ver dossier de partnership
              </a>
              <button onClick={openModal} className={primaryButton}>
                Conversemos
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto aspect-[3/2] mt-16 md:mt-20 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src="/nfc/inteligencia-ganadera.png"
              alt="Plataforma integral de inteligencia ganadera — TWS Labs"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* La oportunidad */}
      <section data-theme="dark" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-sm text-accent-cyan tracking-widest uppercase font-semibold mb-6"
                style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}
              >
                LA OPORTUNIDAD
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Del relevamiento manual a la{' '}
                <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                  información operativa
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/70 leading-relaxed text-base md:text-lg font-medium space-y-5"
            >
              <p>
                La gestión ganadera depende de información que muchas veces exige recorridas, observación directa,
                conteos manuales y procesos separados. TWS Labs está desarrollando una plataforma capaz de convertir
                relevamientos aéreos en información operativa para el productor, reduciendo la fricción entre la
                captura del dato y la decisión.
              </p>
              <p>
                El proyecto comienza por un problema concreto y medible: <span className="text-white">automatizar el conteo de bovinos</span>.
                La visión es más amplia: construir una capa de inteligencia que permita observar el rodeo de forma
                periódica, comparar su evolución y generar métricas, alertas y reportes mediante software propio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qué estamos construyendo */}
      <section data-theme="dark" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-sm text-accent-cyan tracking-widest uppercase font-semibold mb-6"
              style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}
            >
              QUÉ ESTAMOS CONSTRUYENDO
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Cuatro capas, un{' '}
              <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                único sistema
              </span>
            </h2>
            <p className="text-muted-white/80 max-w-2xl mx-auto text-base md:text-lg">
              Una plataforma integral de monitoreo ganadero que combina captura aérea, automatización de misiones,
              visión artificial especializada y software de TWS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {layers.map((layer, i) => (
              <PillarCard key={layer.title} icon={layer.icon} title={layer.title} index={i}>
                {layer.description}
              </PillarCard>
            ))}
          </div>
        </div>
      </section>

      {/* Estado actual + roadmap */}
      <section data-theme="dark" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <p
                className="text-sm text-accent-cyan tracking-widest uppercase font-semibold mb-6"
                style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}
              >
                ESTADO ACTUAL Y ROADMAP
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                Dónde estamos hoy
              </h2>
              <div className="text-white/70 leading-relaxed text-base md:text-lg font-medium space-y-5">
                <p>
                  TWS Labs se encuentra en etapa de investigación y experimentación. Se han preparado flujos de datos
                  y entrenamiento, realizado pruebas iniciales de detección aérea y definido líneas de mejora para
                  escenarios de animales pequeños, diferentes alturas y condiciones de captura.
                </p>
                <p>
                  El proyecto dispone además de contactos que permiten acceder a establecimientos y rodeos para
                  realizar pruebas de campo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 rounded-2xl border border-white/10 bg-surface-dark/40 p-8"
            >
              <p className="text-[11px] text-accent-cyan tracking-[0.2em] uppercase font-semibold mb-4">
                Validar hoy, diferenciar mañana
              </p>
              <p className="text-white/70 leading-relaxed text-base font-medium">
                El MVP no depende de terminar una aeronave propia. Las primeras validaciones pueden realizarse con
                drones comerciales, permitiendo avanzar inmediatamente sobre software, IA y operación. En paralelo,
                TWS Labs proyecta una plataforma VTOL de ala fija especializada para relevamiento rural, planteada
                como una ventaja estratégica de mediano plazo y no como una condición para demostrar el valor inicial
                del sistema.
              </p>
            </motion.div>
          </div>

          <RoadmapTimeline />
        </div>
      </section>

      {/* Partnership */}
      <section data-theme="dark" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-sm text-accent-cyan tracking-widest uppercase font-semibold mb-6"
              style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}
            >
              PARTNERSHIP
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Construyamos la{' '}
              <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                próxima etapa
              </span>
            </h2>
            <p className="text-muted-white/80 max-w-2xl mx-auto text-base md:text-lg">
              Buscamos partners que aceleren el paso desde la experimentación actual hacia un MVP validado en campo.
              La propuesta concreta se diseña caso por caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((p, i) => (
              <PillarCard key={p.title} icon={p.icon} title={p.title} index={i}>
                {p.description}
              </PillarCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-theme="dark" className="py-32 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight"
          >
            De contar animales a comprender su{' '}
            <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
              evolución.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-white mb-12 max-w-2xl mx-auto font-medium"
          >
            Estamos abriendo esta etapa del proyecto a organizaciones que compartan nuestra visión sobre el potencial
            de la tecnología aplicada a la producción ganadera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4"
          >
            <a href={LABS_DOSSIER_URL} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              <FileText size={16} />
              Ver dossier de partnership
            </a>
            <button onClick={openModal} className={primaryButton}>
              Conversemos
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
