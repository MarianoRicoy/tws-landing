import Image from 'next/image';

export default function NuestraHistoria() {
  return (
    <section data-theme="dark" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sobre <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Tech With Soul</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="text-left md:col-span-2">
            <div className="text-white/90 space-y-4 leading-relaxed text-lg font-medium">
              <p>
                TWS surge de la sinergia de un equipo técnico multidisciplinario en un entorno de alto rendimiento. Al enfrentar desafíos complejos, confirmamos que la clave de toda gran solución es entender el negocio detrás del código. Integramos visión estratégica, diseño de producto y desarrollo a medida para crear herramientas que realmente aporten valor.
              </p>
              <p>
                Hoy somos un socio tecnológico estratégico con una misión clara: construir ecosistemas digitales robustos, escalables y eficientes que impulsen el crecimiento de las empresas. Porque cuando la solidez técnica y los objetivos de negocio se alinean, la innovación se convierte en resultados tangibles.
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/oficinasTwsSinGente.png"
                alt="Oficinas TWS"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
