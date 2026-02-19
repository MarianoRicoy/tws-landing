export default function NuestraHistoria() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-dark/40 rounded-3xl border border-white/10 p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
            <div className="text-muted-white space-y-4 leading-relaxed">
              <p>
                Fundada con la visión de cerrar la brecha entre la ingeniería técnica y el propósito humano, TWS nació como una estrategia para la innovación sin restricciones.
              </p>
              <p>
                Desde nuestros inicios como una pequeña boutique de desarrollo, hemos evolucionado hasta convertirnos en una exitosa Software Factory + Product Lab que impulsa a startups y empresas globales hacia la era digital con una perspectiva única.
              </p>
            </div>
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold text-accent-cyan">100+</p>
                <p className="text-muted-white text-sm">Proyectos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-cyan">50+</p>
                <p className="text-muted-white text-sm">Expertos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-cyan">8</p>
                <p className="text-muted-white text-sm">Países</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-96 bg-white/5 rounded-2xl flex items-center justify-center">
              <p className="text-muted-white">[Image Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
