import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import { Providers } from '@/components/Providers';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://m-chihana.vercel.app'),
  title: 'Misheck Chihana | Software Engineer & Systems Architect',
  description:
    'Editorial portfolio of Misheck Chihana. Full-stack software engineering, backend systems, AI/ML engineering, GIS accessibility decision support, and network infrastructure.',
  keywords: [
    'Misheck Chihana',
    'Software Engineer',
    'Systems Architect',
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Network Engineer',
    'GIS Decision Support',
    'Malawi Developer',
    'NestJS',
    'Next.js',
    'TypeScript',
    'OpenGL',
    'Payment Gateways',
  ],
  authors: [{ name: 'Misheck Chihana', url: 'https://m-chihana.vercel.app' }],
  creator: 'Misheck Chihana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://m-chihana.vercel.app',
    siteName: 'Misheck Chihana Portfolio',
    title: 'Misheck Chihana | Software Engineer & Systems Architect',
    description:
      'Engineering practical solutions to complex problems across full-stack applications, backend systems, AI/ML, and infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misheck Chihana | Software Engineer & Systems Architect',
    description:
      'Engineering practical solutions to complex problems across full-stack applications, backend systems, AI/ML, and infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Misheck Chihana',
    jobTitle: 'Software Engineer',
    description:
      'Software engineer focused on building practical, dependable technology across full-stack systems, AI/ML exploration, spatial decision support, and network infrastructure.',
    url: 'https://m-chihana.vercel.app',
    sameAs: [
      'https://github.com/MCHIHANA',
      'https://www.linkedin.com/in/misheck-chihana-b02252343/',
    ],
    knowsAbout: [
      'Full-Stack Web Development',
      'Backend Systems & REST APIs',
      'Artificial Intelligence & Machine Learning',
      'GIS Decision Support',
      'Database Architecture',
      'Network Engineering',
      'Mobile Payment Gateway Integrations',
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} font-sans bg-canvas text-ink-primary antialiased selection:bg-technical-lime selection:text-canvas`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
