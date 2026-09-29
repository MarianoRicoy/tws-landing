'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/contexts/ModalContext';
import LabProjectCard from '@/components/labs/LabProjectCard';
import { labsProjects } from '@/lib/labs';

export default function LabsPage() {
  const { openModal } = useModal();
  const isSingleProject = labsProjects.length === 1;

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
              TWS LABS
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Investigación y desarrollo <br />{' '}
              <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                aplicado
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              El espacio de TWS donde investigamos, experimentamos y desarrollamos tecnología antes de convertirla en
              producto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proyectos */}
      <section data-theme="dark" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] md:text-5xl font-bold text-white mb-6">
              Proyectos en{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
                desarrollo
              </span>
            </h2>
            <p className="text-muted-white/80 max-w-2xl mx-auto text-base md:text-lg">
              Iniciativas en las que estamos investigando, experimentando y construyendo hoy.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 gap-8 ${
              isSingleProject ? 'md:max-w-xl md:mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {labsProjects.map((project, i) => (
              <LabProjectCard key={project.slug} project={project} index={i} />
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
            ¿Querés colaborar con{' '}
            <span className="inline-block pr-[0.08em] bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">
              TWS Labs?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-white mb-12 max-w-2xl mx-auto font-medium"
          >
            Conversemos sobre proyectos de investigación, alianzas tecnológicas o desafíos que quieras explorar con
            nosotros.
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
              Conversemos
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
