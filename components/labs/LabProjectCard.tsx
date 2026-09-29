'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LabProject } from '@/lib/labs';
import { cardVariants } from './PillarCard';

const LabProjectCard = ({ project, index }: { project: LabProject; index: number }) => (
  <Link href={project.href} className="block h-full">
    <motion.div
      className="group relative h-full bg-surface-dark/40 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 md:hover:bg-white/[0.03] md:hover:border-accent-cyan/30 md:hover:-translate-y-2 active:bg-white/[0.05] active:border-accent-cyan/40 flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={index}
    >
      <div className="relative w-full aspect-[3/2] border-b border-white/10">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      <div className="relative flex flex-col flex-grow p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <p className="text-[11px] text-accent-cyan tracking-[0.2em] uppercase font-semibold mb-4">
            Estado: {project.status}
          </p>
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-white leading-relaxed text-sm mb-8">{project.summary}</p>

          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white/90">
            Conocé el proyecto
            <ArrowRight size={16} className="text-accent-cyan transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default LabProjectCard;
