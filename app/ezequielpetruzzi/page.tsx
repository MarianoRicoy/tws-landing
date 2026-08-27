import NfcProfileView from '@/components/nfc/NfcProfileView';

export default function EzequielPetruzziPage() {
  return (
    <NfcProfileView
      name="Ezequiel Petruzzi"
      photoSrc="/DreamTeam/EzeTwsTeam.png"
      bannerSrc="/nfc/MeetandWork-sin marca.jpg"
      vcard={{
        firstName: 'Ezequiel',
        lastName: 'Petruzzi',
        organization: 'TWS - Tech With Soul',
        title: 'Co-Founder / CEO & CTO',
      }}
      phone="+5492215681182"
      email="ezequielpetruzzi@tws.ar"
      linkedinUrl="https://www.linkedin.com/in/ezequielpetruzzi/"
      websiteUrl="https://www.tws.ar"
      content={{
        es: {
          role: 'Co-Founder / CEO & CTO',
          bio: 'Lidera la visión tecnológica y estratégica de TWS, integrando arquitectura técnica con los objetivos de negocio.',
          saveContact: 'Contacto para guardar',
          whatsapp: 'WhatsApp',
          linkedin: 'LinkedIn',
          website: 'tws.ar',
          footer: 'Tecnología con Propósito — TWS Tech With Soul',
        },
        en: {
          role: 'Co-Founder / CEO & CTO',
          bio: 'Leads the technological and strategic vision of TWS, integrating technical architecture with business goals.',
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
