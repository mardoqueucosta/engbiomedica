import type { Metadata } from 'next';
import { DM_Sans, DM_Mono } from 'next/font/google';
import { Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://engenhariabiomedica.com'),
  title: {
    default: 'Engenharia Biomédica — Portal de Referência no Brasil',
    template: '%s | Engenharia Biomédica',
  },
  description:
    'O portal mais completo sobre Engenharia Biomédica no Brasil. Cursos, mercado de trabalho, salários, regulamentação CREA/ANVISA, pesquisa, startups e referências internacionais.',
  keywords: [
    'engenharia biomédica',
    'engenheiro biomédico',
    'engenharia biomédica curso',
    'engenharia biomédica salário',
    'dispositivos médicos',
    'engenharia clínica',
    'healthtech Brasil',
    'CREA engenharia biomédica',
    'ANVISA dispositivos médicos',
  ],
  authors: [{ name: 'engenhariabiomedica.com' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://engenhariabiomedica.com',
    siteName: 'Engenharia Biomédica',
    title: 'Engenharia Biomédica — Portal de Referência no Brasil',
    description:
      'Cursos, mercado de trabalho, salários, regulamentação, pesquisa, startups e referências internacionais sobre Engenharia Biomédica no Brasil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engenharia Biomédica — Portal de Referência no Brasil',
    description:
      'O portal mais completo sobre Engenharia Biomédica no Brasil.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${fraunces.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Engenharia Biomédica',
              url: 'https://engenhariabiomedica.com',
              description:
                'Portal de referência sobre Engenharia Biomédica no Brasil. Cursos, mercado de trabalho, regulamentação, pesquisa e startups.',
              sameAs: ['https://github.com/mardoqueucosta/engbiomedica'],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
