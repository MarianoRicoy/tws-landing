import Image from 'next/image';

export default function NuestraHistoria() {
  return (
    <section data-theme="dark" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Nuestra <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Historia</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="text-left md:col-span-2">
            <div className="text-white/90 space-y-4 leading-relaxed text-lg font-medium">
              <p>
                Nos conocimos en un entorno de alto rendimiento. Cuatro perfiles distintos que encontraron una sinergia innegable al enfrentar desafíos técnicos complejos. Entre optimizaciones, despliegues y resolución de problemas críticos, confirmamos que la diversidad de nuestro enfoque era la clave de nuestra solidez como equipo.
              </p>
              <p>
                Al integrar nuestra experiencia en visión estratégica, arquitectura backend, desarrollo de producto y frontend, fundamos TWS.
              </p>
              <p>
                Lo que comenzó como un enfoque compartido se consolidó como una Software Factory + Product Lab. Nuestra misión es clara: construir tecnología con intención. Vamos más allá de la escritura de código o la planificación estratégica para entregar productos escalables, eficientes y que aporten valor real al mercado.
              </p>
              <p>
                Porque cuando la solidez técnica y la visión de producto se alinean, la innovación deja de ser un concepto para convertirse en soluciones tangibles.
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/oficinastws.png"
                alt="Oficinas TWS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
