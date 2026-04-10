'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Static imports (LCP critical)
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

// Dynamic imports (SSR: true — SEO sections)
const Highlights = dynamic(() => import('../components/Highlights'), { ssr: true })
const Directions = dynamic(() => import('../components/Directions'), { ssr: true })
const Amenities = dynamic(() => import('../components/Amenities'), { ssr: true })
const MasterPlan = dynamic(() => import('../components/MasterPlan'), { ssr: true })
const PriceCard = dynamic(() => import('../components/PriceCard'), { ssr: true })
const Location = dynamic(() => import('../components/Location'), { ssr: true })
const PressCenter = dynamic(() => import('../components/PressCenter'), { ssr: true })
const Developer = dynamic(() => import('../components/Developer'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

// Dynamic imports (SSR: false — heavy/interactive)
const VirtualTour = dynamic(() => import('../components/VirtualTour'), { ssr: false })
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false })
const EnquireModal = dynamic(() => import('../components/EnquireModal'), { ssr: false })
const AosInit = dynamic(() => import('../components/AosInit'), { ssr: false })

const GOLD = 'var(--color-gold)'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let interval;
    // Initial popup after 10 seconds
    const timeout = setTimeout(() => {
      setIsOpen(true);

      // Subsequent popups every 20 seconds
      interval = setInterval(() => {
        setIsOpen(true);
      }, 20000);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <AosInit />
      <Navbar setIsOpen={setIsOpen} />
      <Hero onEnquire={() => setIsOpen(true)} />
      <About onEnquire={() => setIsOpen(true)} />
      {/* <Highlights /> */}
      <Directions onEnquire={() => setIsOpen(true)} />
      <Amenities />
      <MasterPlan onEnquire={() => setIsOpen(true)} />
      <PriceCard onEnquire={() => setIsOpen(true)} />
      <Location />
      <VirtualTour onEnquire={() => setIsOpen(true)} />
      <Gallery />
      {/* <PressCenter /> */}
      <Developer />
      <Footer />
      <EnquireModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Floating Vertical Enquire Tab — Desktop only */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center font-bold text-xs py-3 px-3 shadow-lg animate-pulseGlow"
        style={{
          background: GOLD,
          color: '#fff',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          letterSpacing: '2px',
          borderRadius: '6px 0 0 6px',
          fontFamily: 'var(--font-sans), sans-serif',
          textTransform: 'uppercase',
        }}
      >
        Enquire Now
      </button>

      {/* Mobile Sticky Bottom Bar */}
      <div className="sticky-bottom-bar">
        <a
          href="tel:+919718344024"
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-white font-semibold text-sm"
          style={{ background: 'var(--color-navy)', fontFamily: 'var(--font-sans)' }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Call
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-white font-bold text-sm"
          style={{
            background: `linear-gradient(270deg, var(--color-gold), var(--color-gold-dark), var(--color-gold))`,
            backgroundSize: '300% 300%',
            animation: 'priceBtn 4s ease infinite',
            fontFamily: 'var(--font-sans)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Enquire
        </button>
        <a
          href="https://wa.me/919560582493?text=Hi%20I%20am%20interested%20in%20Sobha%20Sector%2063A"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-white font-semibold text-sm"
          style={{ background: '#25D366', fontFamily: 'var(--font-sans)' }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>

      {/* Spacer so content doesn't hide behind mobile sticky bar */}
      <div className="h-14 lg:hidden" />
    </main>
  )
}
