import Image from 'next/image';

export default function NuestraHistoria() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-dark/40 rounded-3xl border border-white/10 p-8 md:p-16 grid md:grid-cols-5 gap-16 items-center">
          <div className="text-left md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Historia</span>
            </h2>
            <div className="text-muted-white space-y-4 leading-relaxed">
              <p>
                Fundada con la visión de cerrar la brecha entre la ingeniería técnica y el propósito humano, TWS nació como una estrategia para la innovación sin restricciones.
              </p>
              <p>
                Desde nuestros inicios como una pequeña boutique de desarrollo, hemos evolucionado hasta convertirnos en una exitosa Software Factory + Product Lab que impulsa a startups y empresas globales hacia la era digital con una perspectiva única.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10">
              <Image src="/Isologo.svg" alt="TWS Isologo" width={59} height={47} />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
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
