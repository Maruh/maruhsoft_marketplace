import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Maruhsoft Marketplace - Digital Products',
  description: 'Buy and sell digital products with ease',
  keywords: ['digital products', 'marketplace', 'e-commerce'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marketplace.maruhsoft.com',
    title: 'Maruhsoft Marketplace',
    description: 'Buy and sell digital products with ease',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
