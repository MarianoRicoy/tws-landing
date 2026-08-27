'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Share2, Link as LinkIcon, Check, X, Mail, MessageCircle, Linkedin } from 'lucide-react';

interface ShareButtonProps {
  url: string;
  name: string;
  role: string;
  photoSrc: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, name, role, photoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      label: copied ? 'Copiado' : 'Copiar link',
      icon: copied ? <Check size={20} className="text-accent-cyan" /> : <LinkIcon size={20} className="text-white/80" />,
      onClick: handleCopy,
    },
    {
      label: 'WhatsApp',
      icon: <MessageCircle size={20} className="text-[#25D366]" />,
      href: `https://wa.me/?text=${encodeURIComponent(url)}`,
    },
    {
      label: 'LinkedIn',
      icon: <Linkedin size={20} className="text-[#0A66C2]" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: 'Email',
      icon: <Mail size={20} className="text-white/80" />,
      href: `mailto:?body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Compartir"
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-colors"
      >
        <Share2 size={16} />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#0F1219]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 relative"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-base">Compartir tarjeta</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            {/* Preview card */}
            <div className="rounded-2xl bg-surface-dark/60 border border-white/10 p-6 flex flex-col items-center text-center mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 mb-3">
                <Image src={photoSrc} alt={name} fill className="object-cover" />
              </div>
              <p className="text-white font-bold text-sm">{name}</p>
              <p className="text-accent-cyan/90 text-xs font-semibold mt-0.5">{role}</p>
              <div className="flex items-center gap-1.5 mt-3 opacity-40">
                <Image src="/Isologo.svg" alt="TWS" width={12} height={12} />
                <span className="text-[10px] uppercase tracking-widest text-white/60">tws.ar</span>
              </div>
            </div>

            {/* Share options */}
            <div className="grid grid-cols-4 gap-3">
              {shareOptions.map((option) => {
                const content = (
                  <>
                    <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      {option.icon}
                    </div>
                    <span className="text-[11px] text-white/60 text-center leading-tight">{option.label}</span>
                  </>
                );

                if (option.href) {
                  return (
                    <a
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <button key={option.label} onClick={option.onClick} className="flex flex-col items-center gap-2">
                    {content}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;
