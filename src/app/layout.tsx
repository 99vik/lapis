import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export const metadata: Metadata = {
  title: {
    template: '%s | LAPIS',
    default: 'LAPIS',
  },
  description: 'Laboratory for Manufacturing and Assembly Systems Planning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background antialiased scrollbar-thin scrollbar-primary bg-grid-small-white/[0.125] sm:bg-grid-small-white/[0.2]',
          roboto.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
