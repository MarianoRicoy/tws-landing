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
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-xl p-4">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-surface-dark/60 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted-white hover:text-white transition-colors z-10"
        >
          <X className="h-7 w-7" />
        </button>
        
        <div className="grid md:grid-cols-12">
          {/* Left Column */}
          <div className="md:col-span-4 bg-black/20 p-10 flex flex-col justify-between">
            <div>
              <img src="/logo.svg" alt="TWS Logo" className="h-8 w-auto mb-12" />
              <div className="space-y-6">
                <ContactInfo icon={Mail} title="Email" value="hola@tws.tech" href="mailto:hola@tws.tech" />
                <ContactInfo icon={Linkedin} title="LinkedIn" value="/company/tws-tech" href="https://www.linkedin.com/company/tws-tech" />
                <ContactInfo icon={MapPin} title="Ubicación" value="Remote / Global" href="#" />
              </div>
            </div>
            <p className="text-muted-white text-xs tracking-widest uppercase">Tecnologia Con Proposito</p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 p-10">
            <h2 className="text-4xl font-bold text-white mb-3">Ponte en contacto</h2>
            <p className="text-muted-white mb-8">¿Tienes dudas? Estamos aquí para escucharte.</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-white mb-2">Nombre completo</label>
                  <input type="text" id="name" placeholder="Ej: Alex Soul" className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-white mb-2">Correo electrónico</label>
                  <input type="email" id="email" placeholder="alex@ejemplo.com" className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-muted-white mb-2">Asunto de interés</label>
                <select id="subject" className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors appearance-none">
                  <option>Consulta General</option>
                  <option>Software Factory</option>
                  <option>Product Lab</option>
                  <option>Carreras</option>
                </select>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-muted-white mb-2">Tu mensaje</label>
                <textarea id="message" rows={5} placeholder="Cuéntanos cómo podemos ayudarte..." className="w-full bg-surface-dark border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 py-3 px-8 bg-accent-cyan hover:opacity-90 rounded-md text-white font-bold transition-opacity text-base"
                >
                  Enviar Mensaje <Send className="w-5 h-5" />
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
