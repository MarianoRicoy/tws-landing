const ImageCard = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white/5 rounded-2xl flex items-center justify-center ${className}`}>
    <p className="text-muted-white">[Image]</p>
  </div>
);

export default function Cultura() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestra Cultura</h2>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 h-[600px]">
          <div className="col-span-1 row-span-1">
            <ImageCard className="w-full h-full" />
          </div>
          <div className="col-span-2 row-span-1">
            <ImageCard className="w-full h-full" />
          </div>
          <div className="col-span-2 row-span-1">
            <ImageCard className="w-full h-full" />
          </div>
          <div className="col-span-1 row-span-1">
            <ImageCard className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
