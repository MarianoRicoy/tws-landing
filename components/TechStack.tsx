import React from 'react';
import InfiniteMarquee from './InfiniteMarquee';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Node.js',
  'Figma',
  'AWS',
  'Vercel',
  'Docker',
  'MongoDB',
  'Google Cloud',
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] md:text-5xl font-bold text-white text-center mb-4">
          Tecnologías que Impulsan <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Nuestros Productos</span>
        </h2>
        <p className="text-muted-white/80 max-w-2xl mx-auto text-base md:text-lg text-center mb-12">
          Elegimos cada tecnología por su capacidad de resolver el problema, no por seguir una tendencia.
        </p>
        
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <InfiniteMarquee speed="30s">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xl md:text-3xl font-bold text-white/40 mx-8 md:mx-12 hover:text-accent-cyan transition-colors duration-300 whitespace-nowrap">
                {tech}
              </span>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}
