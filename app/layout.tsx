import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://esotericebb-guide.sbs'),
  title: {
    default: 'Esoteric Ebb Guide — Walkthrough, Riddles & Tips',
    template: '%s | Esoteric Ebb Guide',
  },
  description:
    'The ultimate Esoteric Ebb guide: Sphinx riddle solutions, Star Witness walkthrough, best builds, rest mechanics & bug workarounds.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Esoteric Ebb Guide',
  },
  icons: { icon: '/icon.svg' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
  },
}

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Esoteric Ebb Guide',
  url: 'https://esotericebb-guide.sbs',
  description: 'Community-driven walkthrough and tips for Esoteric Ebb.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://esotericebb-guide.sbs/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X85GM3BKRY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X85GM3BKRY');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-deep text-brand-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
