// src/components/TechStack.jsx
const technologies = [
  'React',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Node.js',
  'Figma',
];

const TechPill = ({ name }) => (
  <div className="bg-white/5 border border-white/10 text-slate-300 px-8 py-3 rounded-full hover:border-blue-500/50 transition-colors duration-300">
    {name}
  </div>
);

export default function TechStack() {
  const extendedTechs = [...technologies, ...technologies]; // Duplicate for seamless loop

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm text-blue-400 tracking-widest uppercase font-semibold text-center mb-12">
          Tecnologías que impulsan nuestros productos
        </h2>
        <div className="relative w-full overflow-hidden">
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
