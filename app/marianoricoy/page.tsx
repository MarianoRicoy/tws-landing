import NfcProfileView from '@/components/nfc/NfcProfileView';

export default function MarianoRicoyPage() {
  return (
    <NfcProfileView
      name="Mariano Ricoy"
      photoSrc="/DreamTeam/Marianoricoy.png"
      bannerSrc="/nfc/MeetandWork-sin marca.jpg"
      vcard={{
        firstName: 'Mariano',
        lastName: 'Ricoy',
        organization: 'TWS - Tech With Soul',
        title: 'Co-Founder / Head of Operations',
      }}
      phone="+5492291542408"
      email="marianoricoy@tws.ar"
      linkedinUrl="https://www.linkedin.com/in/mariano-ricoy/"
      websiteUrl="https://www.tws.ar"
      content={{
        es: {
          role: 'Co-Founder / Head of Operations',
          bio: 'Lidera la construcción visual e interactiva de TWS, combinando diseño de interfaz riguroso con arquitectura frontend moderna.',
          saveContact: 'Contacto para guardar',
          whatsapp: 'WhatsApp',
          linkedin: 'LinkedIn',
          website: 'tws.ar',
          footer: 'Tecnología con Propósito — TWS Tech With Soul',
        },
        en: {
          role: 'Co-Founder / Head of Operations',
          bio: 'Leads the visual and interactive development at TWS, blending rigorous interface design with modern frontend architecture.',
          saveContact: 'Save Contact',
          whatsapp: 'WhatsApp',
          linkedin: 'LinkedIn',
          website: 'tws.ar',
          footer: 'Technology with Purpose — TWS Tech With Soul',
        },
      }}
    />
  );
}
