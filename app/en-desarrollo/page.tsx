import Link from 'next/link';
import { Wrench } from 'lucide-react';

const UnderConstructionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-300px)] bg-background-dark">
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full border border-white/5 animate-pulse [animation-delay:0.5s]"></div>
        <div className="w-40 h-40 bg-surface-dark rounded-full flex items-center justify-center border border-white/10">
          <Wrench className="w-16 h-16 text-accent-cyan" />
        </div>
      </div>
      <p className="text-accent-cyan uppercase tracking-widest mb-4">Próximamente</p>
      <h1 className="text-6xl font-bold text-white mb-12">
        Sección en <span className="text-white/50">Desarrollo</span>
      </h1>
      <Link href="/"
        className="px-8 py-3 rounded-md border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default UnderConstructionPage;
