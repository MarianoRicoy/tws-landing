'use client';

import { useState } from 'react';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { ModalProvider, useModal } from '@/contexts/ModalContext';

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'] 
});

function AppLayout({ children }: { children: React.ReactNode }) {
  const { isModalOpen, closeModal } = useModal();

  return (
    <html lang="en">
      <body className={`${outfit.className} text-white bg-background-dark`}>
        <div className="fixed top-0 left-0 w-full h-screen bg-background-dark -z-10" style={{ backgroundImage: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(54, 115, 237, 0.2), transparent)' }} />
        <div className="relative z-0 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
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
