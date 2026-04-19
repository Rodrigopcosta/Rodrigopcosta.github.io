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

        {/* Segurança: Proteção contra XSS e injeção de scripts */}
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com; frame-ancestors 'none';"
        />

        {/* Segurança: Impede que o navegador tente adivinhar o tipo de conteúdo */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

        {/* Segurança: Controla as informações de origem enviadas em links */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
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
