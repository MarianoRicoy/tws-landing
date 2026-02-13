// src/components/Footer.jsx
export default function Footer({ onContactClick }) {
  return (
    <footer className="border-t border-white/10 bg-[#081226] text-sm">
      <div className="max-w-7xl mx-auto px-6">

        {/* PRE-FOOTER CTA */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para dar el siguiente paso?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Hablemos sobre cómo TWS puede impulsar tu producto.</p>
          <button 
            onClick={onContactClick}
            className="bg-white text-[#0c1935] font-bold rounded-full px-8 py-3 hover:scale-105 transition-transform duration-300"
          >
            Contactar Ahora
          </button>
        </div>

        <div className="border-b border-white/10 my-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: INFO DE LA EMPRESA */}
          <div className="space-y-4">
            
            <img 
              src="/logo.svg" 
              alt="TWS Logo" 
              className="h-8 w-auto"
            />
            
            <p className="text-slate-400 leading-relaxed">
              Transformamos ideas complejas en productos digitales con alma. Software Factory + Product Lab.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center hover:-translate-y-1 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300">
                LN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center hover:-translate-y-1 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300">
                GH
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center hover:-translate-y-1 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300">
                IG
              </a>
            </div>
          </div>

          {/* COLUMNA 2: SERVICIOS */}
          <div>
            <h4 className="font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Aplicaciones Móviles</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Consultoría Tecnológica</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Diseño UX/UI</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: EMPRESA */}
          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Nuestro Proceso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Carreras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">Email:</span>
                <a href="mailto:hola@tws.tech" className="hover:text-white transition-colors duration-200">hola@tws.tech</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">Ubicación:</span>
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} TWS Tech With Soul. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  )
}