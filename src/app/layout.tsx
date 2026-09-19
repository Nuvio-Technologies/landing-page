import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { JsonLd } from '@/components/seo/json-ld';
import { ThemeProvider } from '@/components/theme-provider';
import { SITE } from '@/lib/site';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.seoTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.seoDescription,
  applicationName: SITE.name,
  keywords: [
    'custom software development Malaysia',
    'software development company Malaysia',
    'web application development',
    'mobile app development Malaysia',
    'business systems',
    'ERP CRM development',
    'system integration',
    'MyInvois e-invoicing integration',
    'Humio HR software',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: '/',
    siteName: SITE.name,
    title: SITE.seoTitle,
    description: SITE.seoDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.seoTitle,
    description: SITE.seoDescription,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: SITE.themeColor },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${figtree.variable} antialiased`}>
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
