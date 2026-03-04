'use client';

import React from 'react';
import { Mail, Linkedin, MapPin, X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactInfo = ({ icon: Icon, title, value, href }: { icon: React.ElementType, title: string, value: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
    <div className="w-12 h-12 bg-[#181C26]/50 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan transition-all duration-300">
      <Icon className="w-6 h-6 text-[#94a3b8] group-hover:text-accent-cyan transition-colors duration-300" />
    </div>
    <div>
      <p className="text-xs text-[#64748b] uppercase tracking-wider font-semibold">{title}</p>
      <p className="text-white font-medium group-hover:text-accent-cyan transition-colors duration-300">{value}</p>
    </div>
  </a>
);

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-start justify-center bg-[#181C26]/80 backdrop-blur-md p-4 overflow-y-auto pt-20 pb-10 transition-all duration-300">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-[#0F1219]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-[#94a3b8] hover:text-white transition-colors z-20 bg-[#0F1219]/50 p-2 rounded-full md:bg-transparent md:p-0"
        >
          <X className="h-6 w-6 md:h-7 md:w-7" />
        </button>
        
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 min-h-screen md:min-h-0">
          {/* Left Column */}
          <div className="md:col-span-4 bg-black/30 p-6 md:p-10 flex flex-col justify-between items-center text-center md:items-start md:text-left border-t md:border-t-0 md:border-r border-white/5">
            <div className="w-full flex flex-col items-center md:items-start">
              <img src="/Isologo.svg" alt="TWS Isologo" className="h-8 w-auto mb-10 md:h-6 opacity-90" />
              <div className="space-y-6 w-full text-left">
                <ContactInfo icon={Mail} title="Email" value="tws.registros@gmail.com" href="mailto:tws.registros@gmail.com" />
                <ContactInfo icon={Linkedin} title="LinkedIn" value="/company/tech-with-soul" href="https://www.linkedin.com/company/tech-with-soul" />
              </div>
            </div>
            <p className="text-sm font-semibold italic mt-12 md:mt-0 tracking-wide" style={{ color: '#3b82f6', textShadow: '0 0 15px rgba(58, 130, 246, 0.6)' }}>
              Tecnología con Propósito
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Ponte en contacto</h2>
            <p className="text-[#94a3b8] mb-6 text-sm md:text-base">¿Tienes dudas? Estamos aquí para escucharte.</p>
            <form className="space-y-4 md:space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Nombre completo</label>
                  <input type="text" id="name" placeholder="Ej: Alex Soul" className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-accent-cyan transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Correo electrónico</label>
                  <input type="email" id="email" placeholder="alex@ejemplo.com" className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-accent-cyan transition-all" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Asunto de interés</label>
                <div className="relative">
                  <select id="subject" className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent-cyan transition-all appearance-none cursor-pointer">
                    <option>Consulta General</option>
                    <option>Software Factory</option>
                    <option>Product Lab</option>
                    <option>Carreras</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#64748b]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Tu mensaje</label>
                <textarea id="message" rows={4} placeholder="Cuéntanos cómo podemos ayudarte..." className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-accent-cyan transition-all"></textarea>
              </div>
              <div className="flex justify-center pb-4 md:pb-0">
                <button
                  type="submit"
                  disabled={false}
                  className="w-full bg-accent-cyan text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-accent-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;