import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
const inter = Inter({ subsets: ['latin'] });

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
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
