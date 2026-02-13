// src/components/UnderConstruction.jsx
import { Link } from 'react-router-dom';

export default function UnderConstruction() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32">
      
      {/* Icon */}
      <div className="w-24 h-24 mb-8 flex items-center justify-center rounded-full border border-white/10 bg-white/5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
        Sección en Desarrollo
      </h1>

      {/* Paragraph */}
      <p className="text-slate-400 text-lg max-w-lg mx-auto mb-10">
        Estamos construyendo esta parte del ecosistema TWS. Estará disponible muy pronto.
      </p>

      {/* Button */}
      <Link 
        to="/"
        className="border border-white/20 hover:bg-white/5 text-white rounded-full px-8 py-3 transition-all inline-block"
      >
        Volver al Inicio
      </Link>

    </div>
  );
}
