import type { Metadata } from 'next';
import AppLayoutProvider from './AppLayoutProvider';
import Navbar from '@/components/layouts/Navbar';
import './globals.css';

import Footer from '@/components/layouts/Footer';

import AuthProvider from '../providers/authProvider';


export const metadata: Metadata = {
  title: 'The Dunk Web',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>


        <AuthProvider>
          <AppLayoutProvider>
            <Navbar />
            {children}
            <Footer />
          </AppLayoutProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
