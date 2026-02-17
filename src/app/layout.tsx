import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://constructioninnova.com'),
  title: {
    default: 'Construction Innova Company | Home Builders & Renovation',
    template: '%s | Construction Innova'
  },
  description: 'Professional home builders and renovation services in Alabama. Kitchen remodeling, bathroom renovation, roofing, and complete home construction. We take care of everything.',
  keywords: ['construction', 'home builders', 'renovation', 'remodeling', 'kitchen renovation', 'bathroom remodel', 'Alabama construction', 'home improvement'],
  authors: [{ name: 'Construction Innova' }],
  creator: 'Construction Innova',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://constructioninnova.com',
    siteName: 'Construction Innova',
    title: 'Construction Innova Company | Home Builders & Renovation',
    description: 'Professional home builders and renovation services. Kitchen remodeling, bathroom renovation, roofing, and complete home construction.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Innova - Professional Home Builders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Innova Company | Home Builders & Renovation',
    description: 'Professional home builders and renovation services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://constructioninnova.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Construction Innova Company',
  description: 'Professional home builders and renovation services. Kitchen remodeling, bathroom renovation, roofing, and complete home construction.',
  url: 'https://constructioninnova.com',
  telephone: '+1-251-284-2842',
  email: 'info@constructioninnova.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4100 Ross Street',
    addressLocality: 'Okawville',
    addressRegion: 'IL',
    addressCountry: 'US'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  priceRange: '$$',
  image: 'https://constructioninnova.com/og-image.jpg',
  sameAs: [],
  areaServed: {
    '@type': 'State',
    name: 'Alabama'
  },
  serviceType: [
    'Home Construction',
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Home Renovation',
    'Roofing'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CSWH6BZVCE"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CSWH6BZVCE');`}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
