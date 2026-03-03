'use client';

import Link from 'next/link';
import { Wrench } from 'lucide-react';
import { useRouter } from 'next/navigation';

const UnderConstructionPage = () => {
  const router = useRouter();

  return (
    <div data-theme="dark" className="flex flex-col items-center justify-center text-center h-screen pt-20 overflow-hidden bg-tws-solid">
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full border border-white/5 animate-pulse [animation-delay:0.5s]"></div>
        <div className="w-40 h-40 bg-surface-dark/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 z-10">
          <Wrench className="w-16 h-16 text-accent-cyan" />
        </div>
      </div>
      <div className="z-10">
        <p className="text-accent-cyan uppercase tracking-widest mb-4 font-semibold">Próximamente</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">
          Sección en Desarr<span className="bg-clip-text text-transparent bg-gradient-to-r from-white/50 to-accent-cyan/80">ollo</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => router.back()}
            className="px-8 py-3 rounded-md border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Volver Atrás
          </button>
          <Link href="/"
            className="px-8 py-3 rounded-md border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Ir al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
