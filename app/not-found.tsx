import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-background-dark text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(54,126,237,0.15),rgba(255,255,255,0))]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 
          className="text-[25vw] md:text-[20rem] font-extrabold leading-none"
          style={{ color: 'rgba(255, 255, 255, 0.8)' }} // White with 80% opacity for a slightly muted look
        >
          404
        </h1>
        <Link 
          href="/"
          className="mt-8 px-8 py-3 rounded-md border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
