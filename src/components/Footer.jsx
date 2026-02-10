// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-tws-navy pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: INFO DE LA EMPRESA */}
          <div className="space-y-4">
            
            {/* LOGO REAL */}
            <img 
              src="/logo.svg" 
              alt="TWS Logo" 
              className="h-8 w-auto" // Mantenemos la consistencia de tamaño con la Navbar
            />
            
            <p className="text-slate-400 leading-relaxed">
              Transformamos ideas complejas en productos digitales con alma. Software Factory + Product Lab.
            </p>
            <div className="flex gap-4">
              {/* Iconos sociales (Placeholders) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-tws-navy transition-all">
                LN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-tws-navy transition-all">
                GH
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-tws-navy transition-all">
                IG
              </a>
            </div>
          </div>

          {/* COLUMNA 2: SERVICIOS */}
          <div>
            <h4 className="font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consultoría Tecnológica</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Diseño UX/UI</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: EMPRESA */}
          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nuestro Proceso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">Email:</span>
                <a href="mailto:hola@tws.tech" className="hover:text-white transition-colors">hola@tws.tech</a>
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
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  )
}