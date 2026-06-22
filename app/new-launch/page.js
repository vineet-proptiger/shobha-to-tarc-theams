'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Static imports (LCP critical)
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import About from '../../components/About'

// Dynamic imports (SSR: true — SEO sections)
const Highlights = dynamic(() => import('../../components/Highlights'), { ssr: true })
const Directions = dynamic(() => import('../../components/Directions'), { ssr: true })
const Amenities = dynamic(() => import('../../components/Amenities'), { ssr: true })
const MasterPlan = dynamic(() => import('../../components/MasterPlan'), { ssr: true })
const PriceCard = dynamic(() => import('../../components/PriceCard'), { ssr: true })
const Location = dynamic(() => import('../../components/Location'), { ssr: true })
const PressCenter = dynamic(() => import('../../components/PressCenter'), { ssr: true })
const Developer = dynamic(() => import('../../components/Developer'), { ssr: true })
const Footer = dynamic(() => import('../../components/Footer'), { ssr: true })

// Dynamic imports (SSR: false — heavy/interactive)
const VirtualTour = dynamic(() => import('../../components/VirtualTour'), { ssr: false })
const Gallery = dynamic(() => import('../../components/Gallery'), { ssr: false })
const EnquireModal = dynamic(() => import('../../components/EnquireModal'), { ssr: false })
const AosInit = dynamic(() => import('../../components/AosInit'), { ssr: false })

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
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center font-bold text-xs py-3 px-3 shadow-lg"
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
          id="mobile-call"

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
      </div>

      {/* Spacer so content doesn't hide behind mobile sticky bar */}
      <div className="h-14 lg:hidden" />
    </main>
  )
}
