'use client';

import { Code, FlaskConical, Check, Plus } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const servicesText = 'Fusionamos la precisión de una software factory con la audacia de un product lab, creando soluciones robustas y explorando nuevas fronteras tecnológicas.';

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

const ServiceCard = ({ icon: Icon, title, description, items, href, iconClassName }: {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  href: string;
  iconClassName?: string;
}) => (
  <Link href={href} passHref>
    <motion.div
      className="group relative h-full bg-surface-dark/40 rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300 md:hover:bg-white/[0.03] md:hover:border-accent-cyan/30 md:hover:-translate-y-2 active:bg-white/[0.05] active:border-accent-cyan/40"
      variants={cardVariants}
    >
      {/* Decorative Gradient and Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-cyan/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Plus Indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan">
          <Plus size={18} className="text-white transition-colors duration-300" strokeWidth={2.5} />
        </div>
      </div>

      <div className="relative flex flex-col h-full">
        <div className="w-14 h-14 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/50 transition-colors duration-300">
          <Icon size={28} className={iconClassName} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors duration-300">{title}</h3>
        <p className="text-muted-white mb-8 leading-relaxed text-sm flex-grow">
          {description}
        </p>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start text-muted-white text-sm">
              <Check className="w-4 h-4 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Link>
);

const services = [
  {
    icon: Code,
    title: 'Software Factory',
    description: 'Desarrollamos soluciones tecnológicas de alto impacto para empresas que buscan escalar. Código limpio, arquitectura escalable y entrega ágil.',
    items: ['Creación de Apps', 'Desarrollo Web a Medida', 'Sistemas de Gestión'],
    href: '/servicios/software-factory',
    iconClassName: 'text-white'
  },
  {
    icon: FlaskConical,
    title: 'Product Lab',
    description: 'Nuestra incubadora interna. Detectamos problemas reales y construimos productos SaaS propios para resolverlos. Innovación sin intermediarios.',
    items: ['Incubación de Ideas', 'Desarrollo de Productos Propios', 'Experimentación Continua'],
    href: '/servicios/product-lab',
    iconClassName: 'text-white'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] md:text-5xl font-bold text-white mb-6">
          Un Ecosistema <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Híbrido</span>
        </h2>
        <p className="text-muted-white/80 max-w-2xl mx-auto text-base md:text-lg">
          {servicesText}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}