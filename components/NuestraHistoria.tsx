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
                TWS surge de la sinergia de cuatro perfiles técnicos en un entorno de alto rendimiento. Al enfrentar desafíos complejos, optimizaciones y despliegues críticos, confirmamos que la diversidad de enfoques es nuestra mayor solidez.
              </p>
              <p>
                Integramos experiencia en visión estratégica, arquitectura backend, desarrollo de producto y frontend para crear TWS.
              </p>
              <p>
                Lo que comenzó como un enfoque compartido hoy es una Software Factory + Product Lab con una misión clara: construir tecnología con intención. Superamos la simple escritura de código para entregar productos escalables y eficientes que aporten valor real.
              </p>
              <p>
                Porque cuando la solidez técnica y la visión de producto se alinean, la innovación se convierte en soluciones tangibles.
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/oficinasTwsSinGente.png"
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
