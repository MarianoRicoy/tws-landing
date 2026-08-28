'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Contact, Linkedin, MessageCircle, ChevronRight } from 'lucide-react';
import { ArgentinaFlag, UsaFlag } from './FlagIcon';
import ShareButton from './ShareButton';
import { downloadVCard } from '@/lib/vcard';
import InfiniteMarquee from '@/components/InfiniteMarquee';

type Lang = 'es' | 'en';

interface LocalizedContent {
  role: string;
  bio: string;
  saveContact: string;
  whatsapp: string;
  linkedin: string;
  website: string;
  footer: string;
}

export interface NfcProfileViewProps {
  name: string;
  photoSrc: string;
  bannerSrc: string;
  vcard: {
    firstName: string;
    lastName: string;
    organization: string;
    title: string;
  };
  phone: string;
  email: string;
  linkedinUrl: string;
  websiteUrl: string;
  content: {
    es: LocalizedContent;
    en: LocalizedContent;
  };
}

const ActionRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  onClick?: () => void;
  href?: string;
}> = ({ icon, label, sublabel, onClick, href }) => {
  const inner = (
    <>
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <p className="text-sm font-semibold text-white/90">{label}</p>
        {sublabel && <p className="text-xs text-white/40">{sublabel}</p>}
      </div>
      <ChevronRight size={16} className="text-white/30" />
    </>
  );

  const className =
    'w-full flex items-center gap-3 bg-surface-dark/40 hover:bg-white/[0.06] border border-white/10 hover:border-accent-cyan/30 rounded-2xl px-4 py-3 transition-colors';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {inner}
    </button>
  );
};

const NfcProfileView: React.FC<NfcProfileViewProps> = ({
  name,
  photoSrc,
  bannerSrc,
  vcard,
  phone,
  email,
  linkedinUrl,
  websiteUrl,
  content,
}) => {
  const [lang, setLang] = useState<Lang>('es');
  const t = content[lang];
  const pageUrl = typeof window !== 'undefined' ? window.location.href : websiteUrl;

  const handleSaveContact = () => {
    downloadVCard(
      {
        firstName: vcard.firstName,
        lastName: vcard.lastName,
        organization: vcard.organization,
        title: vcard.title,
        phone,
        email,
        url: websiteUrl,
      },
      `${vcard.firstName}-${vcard.lastName}.vcf`
    );
  };

  const whatsappHref = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;

  return (
    <main className="min-h-screen bg-tws-solid flex flex-col items-center px-6 py-8">
      {/* Top Bar */}
      <div className="w-full max-w-sm flex items-center justify-between mb-10">
        <Image src="/Isologo.svg" alt="TWS" width={28} height={28} className="h-7 w-auto opacity-90" />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label="Cambiar idioma"
            className="w-9 h-9 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center"
          >
            {lang === 'es' ? <UsaFlag className="w-full h-full" /> : <ArgentinaFlag className="w-full h-full" />}
          </button>
          <ShareButton url={pageUrl} name={name} role={t.role} photoSrc={photoSrc} />
        </div>
      </div>

      {/* Profile */}
      <div className="w-full max-w-sm flex flex-col items-center text-center mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl mb-5">
          <Image src={photoSrc} alt={name} fill className="object-cover" />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight mb-1">{name}</h1>
        <p className="text-xs uppercase tracking-wider text-accent-cyan/90 font-semibold mb-3">{t.role}</p>
        <p className="text-sm text-white/50 leading-relaxed max-w-xs">{t.bio}</p>
      </div>

      {/* Banner Image */}
      <div className="w-full max-w-sm relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8">
        <Image src={bannerSrc} alt="TWS" fill className="object-cover" />
      </div>

      {/* Actions */}
      <div className="w-full max-w-sm space-y-3 mb-16">
        <ActionRow
          icon={<Contact size={17} className="text-accent-cyan" />}
          label={t.saveContact}
          onClick={handleSaveContact}
        />
        <ActionRow
          icon={<MessageCircle size={17} className="text-[#25D366]" />}
          label={t.whatsapp}
          href={whatsappHref}
        />
        <ActionRow
          icon={<Linkedin size={17} className="text-[#0A66C2]" />}
          label={t.linkedin}
          href={linkedinUrl}
        />
        <ActionRow
          icon={<Image src="/Isologo.svg" alt="TWS" width={16} height={16} className="opacity-90" />}
          label={t.website}
          href={websiteUrl}
        />
      </div>

      {/* Marquee */}
      <div className="w-full mb-6">
        <InfiniteMarquee speed="25s">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold mx-4">
                NERDEARLA 2026
              </span>
              <Image src="/Isologo.svg" alt="" width={12} height={12} className="opacity-30 shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold mx-4">
                TECH WITH SOUL
              </span>
              <Image src="/Isologo.svg" alt="" width={12} height={12} className="opacity-30 shrink-0" />
            </div>
          ))}
        </InfiniteMarquee>
      </div>

      {/* Footer text */}
      <p className="text-[11px] text-white/30 text-center">{t.footer}</p>
    </main>
  );
};

export default NfcProfileView;
