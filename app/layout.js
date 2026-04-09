import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  display: 'swap',
  variable: '--font-serif',
})

export const metadata = {
  title: 'Sobha Sector 63A Crescent | Luxury Residences Gurugram',
  description: '3 & 4 BHK Ultra-Luxury Residences at Sobha Sector 63A on Golf Course Extension Road, Gurugram. Starting ₹5.75 Cr*. 12-acre township, 4 towers, 100% corner homes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable}`}>
      <GoogleTagManager gtmId="GTM-NWR7SPL4" />
      <body>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
