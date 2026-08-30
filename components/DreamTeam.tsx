'use client';

import { Plus } from 'lucide-react';
import Image from 'next/image';
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
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
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
      role: "FOUNDER · CEO & CTO",
      imageSrc: "/DreamTeam/EzeTwsTeam.png",
      description: "Lidera la visión estratégica y tecnológica de TWS, conectando arquitectura, ingeniería, inteligencia artificial y negocio. Su enfoque está orientado a transformar problemas complejos en soluciones escalables, tomando decisiones tecnológicas con una mirada integral sobre el producto y su impacto."
    },
    {
      name: "Mariano Ricoy",
      role: "FOUNDER · LEAD SOFTWARE ENGINEER",
      imageSrc: "/DreamTeam/Marianoricoy.png",
      description: "Founder de TWS y referente técnico en la construcción de productos digitales. Lidera la ejecución y evolución de soluciones, combinando ingeniería de software, experiencia de usuario y una mirada práctica orientada a convertir ideas y desafíos en productos sólidos, intuitivos y de alta calidad."
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
          <Image 
            src="/Isologo.svg" 
            alt="TWS Isologo" 
            width={20}
            height={20}
            className="h-5 w-auto mb-6 opacity-80"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Dirección y <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-cyan/80">Estrategia</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
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
