import type { Metadata } from 'next';
import { Bebas_Neue, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';

const bebasNeue = Bebas_Neue({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Rodrigo Costa — Full Stack Developer',
  description:
    'Desenvolvedor apaixonado por transformar ideias em produtos digitais que funcionam de verdade. Desde 2020 entregando interfaces rápidas, escaláveis e com boa experiência de uso.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'São Paulo',
    'Desenvolvedor',
  ],
  authors: [{ name: 'Rodrigo Costa' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rodrigocosta.dev',
    title: 'Rodrigo Costa — Full Stack Developer',
    description:
      'Desenvolvedor apaixonado por transformar ideias em produtos digitais que funcionam de verdade.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} ${manrope.variable} antialiased`}
      style={{ cursor: 'none' }}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="overflow-x-hidden">
        <CustomCursor />
        <Navigation />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}