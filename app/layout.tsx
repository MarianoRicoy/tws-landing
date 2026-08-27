'use client';

import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { ModalProvider, useModal } from '@/contexts/ModalContext';
import { usePathname } from 'next/navigation';

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'] 
});

// Standalone NFC card views render without the site chrome (Navbar/Footer/ContactModal).
const STANDALONE_ROUTES = ['/marianoricoy', '/ezequielpetruzzi'];

function AppLayout({ children }: { children: React.ReactNode }) {
  const { isModalOpen, closeModal } = useModal();
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Isologo.svg" type="image/svg+xml" />
        <title>TWS | Tech With Soul</title>
        <meta name="description" content="Tecnología con Propósito. Desarrollo de software y factoría de productos digitales." />
      </head>
      <body className={`${outfit.className} text-white bg-tws-solid min-h-screen relative`}>
        {/* Background Mesh Grid */}
        <div className="fixed inset-0 bg-mesh-grid opacity-20 pointer-events-none -z-10" />
        
        {isStandalone ? (
          children
        ) : (
          <div className="relative z-0 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        )}
        {!isStandalone && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <AppLayout>{children}</AppLayout>
    </ModalProvider>
  );
}
