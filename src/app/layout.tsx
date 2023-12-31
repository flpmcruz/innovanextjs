import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Construction Innova Company',
  description: 'Home Builders and Renovation. Whatever you need to build or remodel in your home, we do it for you. We take care of everything.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="my-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CSWH6BZVCE"
        />

        <Script id="my-inline-script" strategy="afterInteractive">
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
