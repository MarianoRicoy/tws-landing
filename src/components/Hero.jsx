export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Fondo con degradado sutil (Glow effect) */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO Y CTA */}
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SOFTWARE FACTORY + PRODUCTOS
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Tecnología con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
              Propósito
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            Fusionamos la ingeniería de una <strong>Software Factory</strong> con la visión de una incubadora de productos. Transformamos ideas complejas en soluciones digitales con alma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 rounded-lg bg-white text-tws-navy font-bold text-sm hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Iniciar Proyecto
            </button>
            <button className="px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-semibold text-sm hover:border-white hover:text-white transition-all">
              Ver Nuestros Productos
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN PRINCIPAL */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
          {/* Glow detrás de la imagen */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-90 -z-10"></div>
          
          <img 
            src="/hero-image.jpeg" 
            alt="TWS Tech Soul"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:scale-[1.02] transition-transform duration-500 object-cover"
          />
        </div>

      </div>
    </section>
  )
}