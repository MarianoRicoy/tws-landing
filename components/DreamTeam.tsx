'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TeamMemberModal from './TeamMemberModal';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ name, role, imageSrc, onClick }: { name: string, role: string, imageSrc: string, onClick: () => void }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative cursor-pointer"
    onClick={onClick}
  >
    {/* Card Container with Portrait Aspect Ratio */}
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-surface-dark transition-all duration-500 group-hover:border-accent-cyan/30 shadow-2xl">
      {/* Photo with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Content Block (Inside Card) */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col items-start text-left">
        <h3 className="text-xl font-bold text-white mb-1 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan/80">
          {name}
        </h3>
        <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">
          {role}
        </p>
      </div>

      {/* Interaction Icon (+) */}
      <div className="absolute bottom-6 right-6 z-20 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-white text-xl font-light">+</span>
      </div>
      
      {/* Metallic Border Effect on Hover */}
      <div className="absolute inset-0 border-2 border-accent-cyan/0 rounded-xl transition-all duration-500 group-hover:border-accent-cyan/20 pointer-events-none" />
    </div>
  </motion.div>
);

export default function DreamTeam() {
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string; description: string; imageSrc?: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Ezequiel Petruzzi",
      role: "CEO / CTO",
      imageSrc: "/DreamTeam/EzeTwsPro.jpeg",
      description: "Lidera la visión tecnológica y estratégica de TWS. Su enfoque integra la arquitectura técnica con los objetivos de negocio, asegurando que cada desarrollo sea escalable y aporte valor real. Especialista en resolver desafíos complejos, garantiza la solidez y el alto rendimiento en cada proyecto de la Software Factory."
    },
    {
      name: "Rafael Alvarez Lopez",
      role: "Head of Backend",
      imageSrc: "/DreamTeam/RafaTwsPro.jpeg",
      description: "Responsable de la arquitectura y robustez técnica de nuestras soluciones. Se especializa en diseñar estructuras backend escalables y seguras que soportan el alto tráfico y las demandas de productos en crecimiento. Su enfoque garantiza que la lógica del negocio funcione con precisión y eficiencia absoluta."
    },
    {
      name: "Maria Victoria Gallo",
      role: "Product & Growth Lead",
      imageSrc: "/DreamTeam/VickyTwsPro.jpeg",
      description: "Responsable de convertir la visión del producto en resultados concretos. Su rol es analizar más allá de las funcionalidades técnicas, enfocándose en la viabilidad, el posicionamiento y las métricas clave. Actúa como el puente estratégico entre el diseño de la experiencia, el modelo de negocio y la expansión del producto en el mercado. Si un desarrollo escala con éxito, es producto de su planificación y análisis de oportunidades"
    },
    {
      name: "Mariano Ricoy",
      role: "Frontend Lead",
      imageSrc: "/DreamTeam/Marianoricoy.png",
      description: "Lidera la construcción visual e interactiva de nuestros desarrollos. Combina un diseño de interfaz riguroso (pixel-perfect) con arquitectura frontend moderna para crear productos digitales que no solo destacan visualmente, sino que garantizan la mejor experiencia de usuario. Su especialidad es hacer que lo complejo parezca y se sienta simple."
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dirección y <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Estrategia</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 max-w-5xl mx-auto">
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
