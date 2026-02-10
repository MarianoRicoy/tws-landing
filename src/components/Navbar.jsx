// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-tws-navy/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO REAL */}
        <a href="#" className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="TWS Logo" 
            className="h-8 w-auto" 
          />
        </a>

        {/* LINKS DE NAVEGACIÓN */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Servicios</a>
          <a href="#" className="hover:text-white transition-colors">Productos</a>
          <a href="#" className="hover:text-white transition-colors">Nosotros</a>
        </div>

        {/* CTA BUTTON */}
        <button className="hidden md:block px-5 py-2 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-tws-navy transition-all">
          Contacto
        </button>

      </div>
    </nav>
  )
}