'use client';

import React from 'react';
import { Mail, Linkedin, MapPin, X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactInfo = ({ icon: Icon, title, value, href }: { icon: React.ElementType, title: string, value: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
    <div className="w-12 h-12 bg-surface-dark/50 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan transition-all duration-300">
      <Icon className="w-6 h-6 text-muted-white group-hover:text-accent-cyan transition-colors duration-300" />
    </div>
    <div>
      <p className="text-xs text-muted-white uppercase tracking-wider">{title}</p>
      <p className="text-white font-medium group-hover:text-accent-cyan transition-colors duration-300">{value}</p>
    </div>
  </a>
);

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-start justify-center bg-background-dark/80 backdrop-blur-xl p-4 overflow-y-auto pt-20 pb-10">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-surface-dark/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-muted-white hover:text-white transition-colors z-20 bg-background-dark/50 p-2 rounded-full md:bg-transparent md:p-0"
        >
          <X className="h-6 w-6 md:h-7 md:w-7" />
        </button>
        
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 min-h-screen md:min-h-0">
          {/* Left Column */}
          <div className="md:col-span-4 bg-black/20 p-6 md:p-10 flex flex-col justify-between items-center text-center md:items-start md:text-left border-t md:border-t-0 md:border-r border-white/5">
            <div className="w-full flex flex-col items-center md:items-start">
              <img src="/Isologo.svg" alt="TWS Isologo" className="h-8 w-auto mb-10 md:h-6" />
              <div className="space-y-6 w-full text-left">
                <ContactInfo icon={Mail} title="Email" value="tws.registros@gmail.com" href="mailto:tws.registros@gmail.com" />
                <ContactInfo icon={Linkedin} title="LinkedIn" value="/company/tech-with-soul" href="https://www.linkedin.com/company/tech-with-soul" />
              </div>
            </div>
            <p className="text-sm font-medium italic mt-12 md:mt-0" style={{ color: '#3b82f6', textShadow: '0 0 15px rgba(58, 130, 246, 0.8)' }}>
              Tecnología con Propósito
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ponte en contacto</h2>
            <p className="text-muted-white mb-6 text-sm md:text-base">¿Tienes dudas? Estamos aquí para escucharte.</p>
            <form className="space-y-4 md:space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-white mb-2">Nombre completo</label>
                  <input type="text" id="name" placeholder="Ej: Alex Soul" className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-white mb-2">Correo electrónico</label>
                  <input type="email" id="email" placeholder="alex@ejemplo.com" className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-muted-white mb-2">Asunto de interés</label>
                <select id="subject" className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors appearance-none">
                  <option>Consulta General</option>
                  <option>Software Factory</option>
                  <option>Product Lab</option>
                  <option>Carreras</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-muted-white mb-2">Tu mensaje</label>
                <textarea id="message" rows={4} placeholder="Cuéntanos cómo podemos ayudarte..." className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"></textarea>
              </div>
              <div className="flex justify-center pb-4 md:pb-0">
                <button
                  type="submit"
                  className="w-full md:w-auto py-3 px-8 bg-accent-cyan hover:opacity-90 rounded-md text-white font-bold transition-opacity text-base"
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