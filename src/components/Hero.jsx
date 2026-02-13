import { Link } from 'react-router-dom';

export default function Hero({ onContactClick }) {
  return (
    <section className="relative bg-[#0c1935] pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO Y CTA */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SOFTWARE FACTORY + PRODUCTOS
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Tecnología con <br />
            <span className="font-extrabold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Propósito
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            Fusionamos la ingeniería de una <strong>Software Factory</strong> con la visión de una incubadora de productos. Transformamos ideas complejas en soluciones digitales con alma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onContactClick}
              className="px-8 py-3 rounded-full bg-white text-[#0c1935] font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-blue-500/20">
              Iniciar Proyecto
            </button>
            <Link 
              to="/productos"
              className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all text-center">
              Ver Productos
            </Link>
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN CON GLOW */}
        <div className="relative mt-12 md:mt-0 flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/40 blur-[100px] rounded-full z-0"></div>
          <div className="relative z-10">
            <img 
              src="/hero-image.jpeg" 
              alt="TWS Tech Soul"
              className="w-full max-w-md rounded-3xl border border-white/20 shadow-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}