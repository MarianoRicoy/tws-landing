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
      <body className={`${outfit.className} text-white bg-tws-solid min-h-screen relative`}>
        {/* Background Mesh Grid */}
        <div className="fixed inset-0 bg-mesh-grid opacity-20 pointer-events-none -z-10" />
        
        {/* Main Content Container */}
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
