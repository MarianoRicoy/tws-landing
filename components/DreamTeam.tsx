'use client';

import { Plus } from 'lucide-react';
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
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-surface-dark transition-all duration-500 md:group-hover:border-accent-cyan/30 md:group-hover:bg-white/[0.03] active:bg-white/[0.05] active:border-accent-cyan/40">
      {/* Photo with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay for Text Readability - More subtle */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
      </div>

      {/* Plus Indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan">
          <Plus size={14} className="text-white transition-colors duration-300" strokeWidth={2.5} />
        </div>
      </div>

      {/* Decorative Gradient Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
    </div>

    {/* Content Block (Outside Card) */}
    <div className="mt-4 flex flex-col items-start text-left px-1 w-full overflow-hidden">
      <h3 className="text-lg font-bold text-white mb-0.5 transition-all duration-300 group-hover:text-accent-cyan">
        {name}
      </h3>
      <div className="relative w-full overflow-hidden h-4">
        <div className="flex gap-8 whitespace-nowrap items-center md:group-hover:hidden">
          <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase whitespace-nowrap">
            {role}
          </span>
        </div>
        <motion.div
          animate={{ x: [0, -200] }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 0
          }}
          className="hidden md:group-hover:flex gap-8 whitespace-nowrap items-center"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase whitespace-nowrap">
              {role}
            </span>
          ))}
        </motion.div>
      </div>
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
    <section data-theme="dark" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <img 
            src="/Isologo.svg" 
            alt="TWS Isologo" 
            className="h-5 w-auto mb-6 opacity-80"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Dirección y <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Estrategia</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
