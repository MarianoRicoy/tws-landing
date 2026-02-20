import Image from 'next/image';

const images = [
  {
    src: '/Fotos Cultura/Argentina(1).jpg',
    alt: 'Team in Argentina',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/Fotos Cultura/Medellin(1).jpg',
    alt: 'Team in Medellin',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/Fotos Cultura/Medellin(2).jpg',
    alt: 'Another team picture in Medellin',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/Fotos Cultura/Argentina(2).jpg',
    alt: 'Another team picture in Argentina',
    className: 'col-span-1 row-span-1',
  },
];

export default function Cultura() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestra Cultura</h2>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 h-[600px]">
          {images.map((image, index) => (
            <div key={index} className={`${image.className} group relative rounded-2xl overflow-hidden`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
