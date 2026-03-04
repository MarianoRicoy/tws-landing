'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  {
    src: '/FotosCultura/Argentina(1).jpg',
    alt: 'Team in Argentina',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/FotosCultura/Medellin(1).jpg',
    alt: 'Team in Medellin',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/FotosCultura/Medellin(2).jpg',
    alt: 'Another team picture in Medellin',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/FotosCultura/Argentina(2).jpg',
    alt: 'Another team picture in Argentina',
    className: 'col-span-1 row-span-1',
  },
];

export default function Cultura() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const paragraphs = [
    "Tres argentinos y un colombiano en el mismo equipo. Ya con eso podríamos haber armado una banda, pero decidimos armar algo mejor.",
    "Nuestra cultura es una mezcla interesante: intensidad argentina para debatir ideas como si estuviéramos en la final del mundo, y la calidez colombiana que baja un cambio cuando hace falta. Acá se discute fuerte, se piensa en grande y después se comparte el mate (o el café bien cargado).",
    "No somos de los que dicen “vemos”. Somos de los que dicen “probemos”. No creemos en jerarquías rígidas, creemos en criterio, responsabilidad y ganas de hacer que las cosas pasen.",
    "Nos une algo simple: ambición sana. Queremos construir cosas que funcionen, que crezcan y que tengan impacto real. Y en el medio del proceso, la pasamos bien. Porque si vas a resolver problemas complejos todos los días, mejor hacerlo con buena energía y confianza en el equipo.",
    "En TWS hay visión, hay backend sólido, hay producto estratégico y hay frontend fino. Pero sobre todo, hay química. Y eso no se fuerza.",
    "Se nota."
  ];

  return (
    <section className="py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] md:text-5xl font-bold text-white tracking-tight mb-4">
            Nuestra <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Cultura</span>
          </h2>
          <p className="text-muted-white text-lg max-w-2xl mx-auto">
            Donde la intensidad y la química se unen para crear software con alma.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[600px] mb-24">
          {images.map((image, index) => (
            <div key={index} className={`${image.className} group relative rounded-2xl overflow-hidden min-h-[250px] md:min-h-0`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Scroll Illuminated Text Section */}
        <div className="max-w-4xl mx-auto space-y-12 py-12">
          {paragraphs.map((text, i) => {
            return (
              <ScrollText key={i} text={text} index={i} total={paragraphs.length} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScrollText({ text, index, total }: { text: string, index: number, total: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 50%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 1)"]
  );

  const isLast = index === total - 1;

  return (
    <motion.p
      ref={ref}
      style={{ opacity, y, color }}
      className={`${
        isLast 
          ? "text-[clamp(1.75rem,5vw,3rem)] md:text-5xl font-bold text-accent-cyan" 
          : "text-[clamp(1.25rem,4vw,1.875rem)] md:text-3xl font-medium leading-relaxed"
      } transition-colors duration-300`}
    >
      {text}
    </motion.p>
  );
}