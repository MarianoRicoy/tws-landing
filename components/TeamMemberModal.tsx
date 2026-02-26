'use client';

import React from 'react';
import { X } from 'lucide-react';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    description: string;
    imageSrc?: string;
  } | null;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ isOpen, onClose, member }) => {
  if (!isOpen || !member) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/60 backdrop-blur-md p-4 overflow-y-auto pt-20 pb-10">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-surface-dark/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-muted-white hover:text-white transition-colors z-20 bg-background-dark/50 p-2 rounded-full md:bg-transparent md:p-0"
        >
          <X className="h-6 w-6 md:h-7 md:w-7" />
        </button>
        
        <div className="flex flex-col md:grid md:grid-cols-12 min-h-[300px] md:min-h-[500px]">
          {/* Left Column - Member Info & Photo */}
          <div className="md:col-span-5 bg-black/30 p-6 md:p-12 flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-white/5">
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3 tracking-tight">{member.name}</h3>
              <p className="text-base md:text-lg font-semibold tracking-wide uppercase" style={{ color: '#3b82f6', textShadow: '0 0 20px rgba(58, 130, 246, 0.9)' }}>
                {member.role}
              </p>
            </div>
            
            {member.imageSrc && (
              <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-2xl overflow-hidden mb-6 md:mb-8 ring-1 ring-white/10">
                <img 
                  src={member.imageSrc} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="hidden md:block mt-auto pt-8 border-t border-white/5 w-full">
              <p className="text-muted-white text-xs tracking-[0.2em] uppercase font-medium">Tech With Soul</p>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="md:col-span-7 p-6 md:p-16 flex flex-col justify-center bg-surface-dark/10">
            <div className="text-muted-white text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 max-w-2xl">
              {member.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="opacity-90">{paragraph}</p>
              ))}
            </div>
            <div className="md:hidden mt-8 pt-6 border-t border-white/5 w-full text-center">
              <p className="text-muted-white text-[10px] tracking-[0.2em] uppercase font-medium">Tech With Soul</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
