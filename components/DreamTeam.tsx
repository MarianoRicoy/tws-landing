import Image from 'next/image';
import Link from 'next/link';

const TeamMemberCard = ({ name, role, imageSrc }: { name: string, role: string, imageSrc?: string }) => (
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-4">
      <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center overflow-hidden relative">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        ) : (
          <p className="text-muted-white">[Image]</p>
        )}
      </div>
    </div>
    <h3 className="font-bold text-white text-lg">{name}</h3>
    <p className="text-muted-white text-sm">{role}</p>
  </div>
);

export default function DreamTeam() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-dark/40 rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">El Dream Team</h2>
              <p className="text-muted-white mt-2">Las mentes brillantes detrás de Tech With Soul.</p>
            </div>
            <Link href="/en-desarrollo" className="text-accent-cyan font-semibold text-sm hover:underline">
              Ver todos los roles →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TeamMemberCard name="Ezequiel Petruzzi" role="CEO/CTO" imageSrc="/DreamTeam/EzePetruzzi.jpeg" />
            <TeamMemberCard name="Rafael Alvarez Lopez" role="Head of Backend" imageSrc="/DreamTeam/donpablo.jpg"/>
            <TeamMemberCard name="Maria victoria Gallo" role="Product & Growth Lead" imageSrc="/DreamTeam/VickyGallo.jpeg" />
            <TeamMemberCard name="Mariano Ricoy" role="Frontend Lead" imageSrc="/DreamTeam/Marianoricoy.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
