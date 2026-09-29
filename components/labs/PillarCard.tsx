'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export const cardVariants: Variants = {
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

      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">{title}</h3>

      <p className={`text-slate-400 leading-relaxed text-sm ${points ? 'mb-8' : ''}`}>{children}</p>

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

export default PillarCard;
