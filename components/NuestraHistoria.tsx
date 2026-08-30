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
                TWS nace de la unión de ingeniería, producto y una forma diferente de entender la tecnología. Frente a desafíos complejos, buscamos comprender primero el problema y el negocio antes de diseñar una solución. Combinamos estrategia, ingeniería de software e inteligencia artificial para construir tecnología que aporte valor real.
              </p>
              <p>
                Hoy desarrollamos software, sistemas de inteligencia artificial y productos digitales con una misma misión: convertir problemas y oportunidades en soluciones robustas, escalables y con propósito. Creemos que la mejor tecnología no es necesariamente la más compleja, sino la que logra generar un impacto real.
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
