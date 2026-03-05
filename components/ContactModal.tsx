'use client';

import React, { useState, useRef } from 'react';
import { Mail, Linkedin, MapPin, X, Loader2, RefreshCcw, Home } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackState = ({ 
  type, 
  onClose, 
  onRetry 
}: { 
  type: 'success' | 'error', 
  onClose: () => void, 
  onRetry?: () => void 
}) => (
  <div className="h-full flex flex-col items-center justify-center text-center py-12 px-6 animate-in fade-in zoom-in duration-500">
    <div 
      className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg"
      style={{ 
        backgroundColor: 'rgba(58, 130, 246, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(58, 130, 246, 0.2)'
      }}
    >
      <img src="/Isologo.svg" alt="TWS" className="w-10 h-10" />
    </div>
    
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      {type === 'success' ? 'Mensaje enviado con éxito' : 'No se pudo enviar el mensaje'}
    </h2>
    
    <p className="text-[#94a3b8] max-w-sm mb-10 leading-relaxed">
      {type === 'success' 
        ? 'Gracias por contactarnos. Nuestro equipo revisará tu consulta y te responderá lo antes posible.' 
        : 'Hubo un problema técnico al procesar tu solicitud. Por favor, intenta de nuevo o contáctanos por email.'}
    </p>

    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md justify-center">
      {type === 'error' && onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95"
        >
          <RefreshCcw size={18} />
          Volver a intentar
        </button>
      )}
      <Link
        href="/"
        onClick={onClose}
        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent-cyan text-white font-bold hover:opacity-90 transition-all active:scale-95 shadow-md shadow-accent-cyan/20"
      >
        <Home size={18} />
        Ir al inicio
      </Link>
    </div>
  </div>
);

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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError(null);

    try {
      // Usar variables de entorno si están disponibles, de lo contrario usar strings vacíos para evitar crash
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        console.warn('Configuración de EmailJS incompleta. Por favor configure las variables de entorno.');
        throw new Error('Configuración incompleta');
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setIsSent(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('error');
    } finally {
      setIsSending(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    setIsSent(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after closing
    setTimeout(() => {
      setIsSent(false);
      setError(null);
      if (formRef.current) formRef.current.reset();
    }, 300);
  };

  return (
    <div onClick={handleClose} className="fixed inset-0 z-50 flex items-start justify-center bg-[#181C26]/80 backdrop-blur-md p-4 overflow-y-auto pt-20 pb-10 transition-all duration-300">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl bg-[#0F1219]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-[#94a3b8] hover:text-white transition-colors z-20 bg-[#0F1219]/50 p-2 rounded-full md:bg-transparent md:p-0"
        >
          <X className="h-6 w-6 md:h-7 md:w-7" />
        </button>
        
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 min-h-[500px] md:min-h-0">
          {/* Left Column */}
          <div className="md:col-span-4 bg-black/30 p-6 md:p-10 flex flex-col justify-between items-center text-center md:items-start md:text-left border-t md:border-t-0 md:border-r border-white/5">
            <div className="w-full flex flex-col items-center md:items-start">
              <img src="/Isologo.svg" alt="TWS Isologo" className="h-8 w-auto mb-10 md:h-6 opacity-90" />
              <div className="space-y-6 w-full text-left">
                <ContactInfo icon={Mail} title="Email" value="info@tws.ar" href="mailto:info@tws.ar" />
                <ContactInfo icon={Linkedin} title="LinkedIn" value="/company/tech-with-soul" href="https://www.linkedin.com/company/tech-with-soul" />
              </div>
            </div>
            <p className="text-sm font-semibold italic mt-12 md:mt-0 tracking-wide" style={{ color: '#3b82f6', textShadow: '0 0 15px rgba(58, 130, 246, 0.6)' }}>
              Tecnología con Propósito
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 p-6 md:p-10 flex flex-col">
            {isSent ? (
              <FeedbackState type="success" onClose={handleClose} />
            ) : error ? (
              <FeedbackState type="error" onClose={handleClose} onRetry={handleRetry} />
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Ponte en contacto</h2>
                <p className="text-[#94a3b8] mb-6 text-sm md:text-base">¿Tienes dudas? Estamos aquí para escucharte.</p>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="user_name" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Nombre completo</label>
                      <input 
                        type="text" 
                        id="user_name" 
                        name="user_name"
                        required
                        placeholder="Ej: Alex Soul" 
                        className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-accent-cyan transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="user_email" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="user_email" 
                        name="user_email"
                        required
                        placeholder="alex@ejemplo.com" 
                        className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-accent-cyan transition-all" 
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Asunto de interés</label>
                    <div className="relative">
                      <select 
                        id="subject" 
                        name="subject"
                        className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent-cyan transition-all appearance-none cursor-pointer"
                      >
                        <option value="Consulta General">Consulta General</option>
                        <option value="Presupuestos">Presupuestos</option>
                        <option value="Software Factory">Software Factory</option>
                        <option value="Product Lab">Product Lab</option>
                        <option value="Carreras">Carreras</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#64748b]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="block text-xs font-semibold text-transparent uppercase tracking-wider mb-2">.</div>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      rows={4} 
                      placeholder="Cuéntanos cómo podemos ayudarte..." 
                      className="w-full bg-[#181C26]/50 border border-white/10 rounded-xl p-3 text-white placeholder:text-[#64748b] focus:outline-none focus:border-accent-cyan transition-all"
                    ></textarea>
                  </div>

                  {error && error !== 'error' && (
                    <p className="text-red-500 text-xs mb-4 font-medium">{error}</p>
                  )}

                  <div className="flex justify-center pb-4 md:pb-0 pt-6">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="px-8 bg-accent-cyan text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-accent-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[200px]"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensaje'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;