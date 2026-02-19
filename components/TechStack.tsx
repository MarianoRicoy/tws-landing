import React from 'react';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Node.js',
  'Figma',
  'Vercel',
];

const TechPill: React.FC<{ name: string }> = ({ name }) => (
  <div className="text-muted-white px-6 py-2 text-lg">
    {name}
  </div>
);

export default function TechStack() {
  const extendedTechs = [...technologies, ...technologies]; // Duplicate for seamless loop

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-base text-accent-cyan tracking-widest uppercase font-semibold text-center mb-12" style={{ textShadow: '0 0 15px rgba(58, 130, 246, 0.4)' }}>
          Tecnologías que impulsan nuestros productos
        </h2>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap">
            {extendedTechs.map((tech, index) => (
              <div key={index} className="mx-4">
                <TechPill name={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
