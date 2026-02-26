export default function NosotrosHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-24 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-glow/20 rounded-full blur-[150px] -z-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <p className="text-base text-accent-cyan tracking-widest uppercase font-semibold" style={{ textShadow: '0 0 25px rgba(58, 130, 246, 0.8)' }}>
            CONÓCENOS
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Creamos tecnología <br /> con <span className="text-accent-cyan">alma digital</span>
          </h1>
          <p className="text-lg text-muted-white max-w-3xl mx-auto leading-relaxed">
            Somos un equipo multidisciplinario dedicado a transformar ideas complejas en soluciones digitales de alto impacto. No solo escribimos código, construimos futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
