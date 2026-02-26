import Image from 'next/image';

export default function NuestraHistoria() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-t from-black via-background-dark to-surface-dark/40 rounded-3xl border border-white/10 p-8 md:p-16 grid md:grid-cols-5 gap-16 items-center">
          <div className="text-left md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Nuestra <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Historia</span>
            </h2>
            <div className="text-muted-white space-y-4 leading-relaxed">
              <p>
                Nos conocimos en un bootcamp. Cuatro personas, cuatro perfiles distintos y una química que fue demasiado evidente como para ignorarla. Entre cafés, bugs y deploys que daban más adrenalina que el examen final, nos dimos cuenta de algo: pensábamos diferente, pero encajábamos perfecto.
              </p>
              <p>
                Unimos cerebros, mezclamos visión, backend, producto y frontend… y de esa combinación nació TWS.
              </p>
              <p>
                Lo que empezó como una energía compartida terminó convirtiéndose en una Software Factory + Product Lab con una misión clara: construir tecnología con intención. No solo código. No solo estrategia. Sino productos que realmente funcionen, crezcan y tengan sentido.
              </p>
              <p>
                Porque cuando la técnica y la visión se alinean, la innovación deja de ser un concepto… y se vuelve realidad.
              </p>
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
