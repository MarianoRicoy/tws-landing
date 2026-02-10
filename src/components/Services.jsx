// src/components/Services.jsx
export default function Services() {
  return (
    <section className="py-24 bg-tws-navy relative overflow-hidden">
      
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Un Ecosistema <span className="text-blue-400">Híbrido</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          No somos solo desarrolladores. Somos creadores que entienden el código desde ambas perspectivas: el servicio al cliente y el producto propio.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* CARD 1: SOFTWARE FACTORY */}
        <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-blue-500/50 hover:to-blue-600/50 transition-all duration-500">
          <div className="relative h-full bg-tws-navy rounded-xl p-8 md:p-12 overflow-hidden">
            {/* Fondo decorativo hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-8 border border-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Software Factory</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Desarrollamos soluciones tecnológicas de alto impacto para empresas que buscan escalar. Código limpio, arquitectura escalable y entrega ágil.
              </p>
              
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Desarrollo Web & Mobile (React/Native)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Staff Augmentation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> MVP para Startups
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CARD 2: PRODUCT LAB */}
        <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-purple-500/50 hover:to-purple-600/50 transition-all duration-500">
          <div className="relative h-full bg-tws-navy rounded-xl p-8 md:p-12 overflow-hidden">
             {/* Fondo decorativo hover */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-all"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-8 border border-purple-500/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Product Lab</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Nuestra incubadora interna. Detectamos problemas reales y construimos productos SaaS propios para resolverlos. Innovación sin intermediarios.
              </p>
              
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Incubación de Ideas
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Desarrollo de Productos Propios
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Experimentación Continua
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}