import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export const metadata: Metadata = {
  title: 'LAPIS-dev',
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
          'min-h-screen bg-background antialiased bg-grid-small-white/[0.2]',
          roboto.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
