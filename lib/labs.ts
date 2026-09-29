export interface LabProject {
  slug: string;
  title: string;
  summary: string;
  status: string;
  imageSrc: string;
  href: string;
}

export const LABS_DOSSIER_URL = '/labs/tws-labs-dossier-partnership-2026-09.pdf';

export const labsProjects: LabProject[] = [
  {
    slug: 'inteligencia-ganadera',
    title: 'Plataforma integral de inteligencia ganadera',
    summary:
      'Captura aérea, autonomía de misión, visión artificial y software TWS para convertir relevamientos ganaderos en información accionable.',
    status: 'Investigación y experimentación',
    imageSrc: '/nfc/inteligencia-ganadera.png',
    href: '/labs/inteligencia-ganadera',
  },
];
