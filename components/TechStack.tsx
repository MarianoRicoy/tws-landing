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
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs md:text-sm font-semibold text-accent-cyan tracking-[0.3em] uppercase text-center mb-12" style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}>
          Tecnologías que impulsan nuestros productos
        </h2>
        
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
