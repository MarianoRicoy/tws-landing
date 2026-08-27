'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, X, Mail, MessageCircle } from 'lucide-react';

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled the native share sheet, do nothing.
      }
      return;
    }
    setIsOpen(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleShare}
        aria-label="Compartir"
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-colors"
      >
        <Share2 size={16} />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#0F1219] rounded-3xl border border-white/10 shadow-2xl p-6 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            <h3 className="text-white font-bold text-lg mb-6">Compartir</h3>

            <div className="space-y-3">
              <button
                onClick={handleCopy}
                className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-left transition-colors"
              >
                {copied ? (
                  <Check size={18} className="text-accent-cyan" />
                ) : (
                  <LinkIcon size={18} className="text-white/70" />
                )}
                <span className="text-sm text-white/90">{copied ? 'Enlace copiado' : 'Copiar enlace'}</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors"
              >
                <MessageCircle size={18} className="text-white/70" />
                <span className="text-sm text-white/90">WhatsApp</span>
              </a>

              <a
                href={`mailto:?body=${encodeURIComponent(url)}`}
                className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors"
              >
                <Mail size={18} className="text-white/70" />
                <span className="text-sm text-white/90">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;
