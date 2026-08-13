# TWS Landing

Landing page de **Tech With Soul (TWS)**, construida con Next.js (App Router), React, TypeScript y Tailwind CSS.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- Tailwind CSS
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [EmailJS](https://www.emailjs.com/) para el formulario de contacto

## Requisitos

- Node.js 18+
- Variables de entorno en `.env.local` (ver `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`)

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — servidor de producción
- `npm run lint` — linting con ESLint

## Estructura

- `app/` — rutas (App Router): home, `nosotros`, `servicios/product-lab`, `servicios/software-factory`, `en-desarrollo`
- `components/` — componentes UI reutilizables
- `contexts/` — contexto de React (`ModalContext` para el modal de contacto)
