'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';

const TeamMemberCard = ({ name, role, imageSrc, onClick }: { name: string, role: string, imageSrc?: string, onClick: () => void }) => (
  <div className="text-center cursor-pointer group" onClick={onClick}>
    <div className="relative w-48 h-48 mx-auto mb-4">
      <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center overflow-hidden relative group-hover:ring-2 group-hover:ring-accent-cyan/50 transition-all duration-300">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        ) : (
          <p className="text-muted-white">[Image]</p>
        )}
      </div>
    </div>
    <h3 className="font-bold text-white text-lg group-hover:text-accent-cyan transition-colors duration-300">{name}</h3>
    <p className="text-muted-white text-sm">{role}</p>
  </div>
);

export default function DreamTeam() {
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string; description: string; imageSrc?: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Ezequiel Petruzzi",
      role: "CEO / CTO",
      imageSrc: "/DreamTeam/EzeTwsPro.jpeg",
      description: "Eze es el que tiene el mapa en la cabeza cuando todos todavía estamos mirando el GPS recalculando. Piensa producto, piensa negocio y piensa arquitectura… todo al mismo tiempo. Si algo parece imposible, él ya está abriendo una pestaña mental con tres soluciones posibles y un plan B por si acaso.\n\nEs básicamente el que mezcla visión de futuro con código y lo hace parecer algo normal."
    },
    {
      name: "Rafael Alvarez Lopez",
      role: "Head of Backend",
      imageSrc: "/DreamTeam/RafaTwspro.jpeg",
      description: "Rafa es el señor de las profundidades. Donde nadie ve nada, él ve endpoints, estructuras limpias y bases de datos respirando ordenadamente. Si algo funciona perfecto y nadie sabe por qué… probablemente Rafa estuvo ahí.\n\nEs el que hace que todo lo que pasa 'detrás' no explote. Y si explota, ya tiene el log abierto antes de que termines la frase."
    },
    {
      name: "Maria Victoria Gallo",
      role: "Product & Growth Lead",
      imageSrc: "/DreamTeam/VickyTwsPro.jpeg",
      description: "Vicky es la que convierte ideas en estrategia y estrategia en resultados. No solo piensa qué construir, sino por qué, para quién y cómo hacerlo crecer. Mientras otros ven features, ella ve métricas, oportunidad y posicionamiento.\n\nEs el cerebro que conecta negocio, experiencia y expansión. Si algo crece, no es casualidad."
    },
    {
      name: "Mariano Ricoy",
      role: "Frontend Lead",
      imageSrc: "/DreamTeam/Marianoricoy.png",
      description: "Mariano es el escultor digital. Donde antes había un wireframe medio tímido, él crea interfaces que dan ganas de hacer clic aunque no sepas bien para qué. Pixel-perfect sin drama, animaciones con criterio y una obsesión sana por que todo se vea y se sienta bien.\n\nEs el que logra que lo complejo parezca simple."
    }
  ];

  const handleMemberClick = (member: typeof teamMembers[0]) => {
    setSelectedMember({
      name: member.name,
      role: member.role,
      description: member.description,
      imageSrc: member.imageSrc
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  return (
    <section data-theme="dark" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiénes <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Somos</span>
          </h2>
          <p className="text-lg text-muted-white">
            Conoce a los profesionales que impulsan la visión técnica y estratégica de TWS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              onClick={() => handleMemberClick(member)}
            />
          ))}
        </div>
      </div>
      
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={closeModal}
        member={selectedMember}
      />
    </section>
  );
}
