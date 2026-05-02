'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const GOLD = 'var(--color-gold)'
const F_SANS = 'var(--font-sans), Montserrat, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SERIF = 'var(--font-serif), Cormorant Garamond, Georgia, serif'

const slides = ['/images/hero/banner.webp', '/images/gallery/gallery1.webp']

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="!pt-[82px] !pb-0 relative" style={{ minHeight: 'calc(100vh - 82px)', background: '#0a0a0a' }}>

      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {slides.map((src, idx) => (
          <div key={idx} style={{ position: 'absolute', inset: 0, opacity: current === idx ? 1 : 0, transition: 'opacity 1.2s ease' }}>
            <Image src={src} alt={`Sobha Crescent ${idx + 1}`} fill className="object-cover" priority={idx === 0} sizes="100vw" />
          </div>
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.28) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }} />
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold), var(--color-gold-dark))', padding: '9px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: F_JOST, fontSize: '11px', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
          <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.55)', display: 'inline-block' }} />
          New Launch — Limited Inventory
          <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.55)', display: 'inline-block' }} />
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8" style={{ minHeight: 'calc(100vh - 82px)', display: 'flex', alignItems: 'center', paddingTop: '48px', paddingBottom: '56px' }}>
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 w-full">

          {/* LEFT — Hero text */}
          <div className="flex-1 w-full" data-aos="fade-right">
            <div style={{ marginBottom: '18px' }}>
              <span style={{ display: 'inline-block', padding: '5px 16px', background: GOLD, borderRadius: '4px', fontSize: '10px', fontWeight: '800', color: '#fff', fontFamily: F_JOST, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                New Launch in gurgaon
              </span>
            </div>

            <h1 style={{ fontFamily: F_JOST, fontWeight: '900', fontSize: 'clamp(28px, 5vw, 58px)', color: '#fff', margin: '0 0 4px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
              Sobha Crescent
            </h1>
            <p style={{ fontFamily: F_SERIF, fontSize: 'clamp(15px, 2vw, 21px)', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', margin: '0 0 14px', letterSpacing: '0.02em' }}>
              Sobha Sector 63A of Luxury Apartments in Gurgaon
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '26px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: F_SANS, fontSize: '12px', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: '600' }}>
                Sector 63A, Golf Course Extension Road &nbsp;·&nbsp; By Sobha Realty
              </span>
            </div>

            <div style={{ width: '56px', height: '2px', background: 'linear-gradient(90deg, var(--color-gold), transparent)', marginBottom: '26px' }} />

            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontFamily: F_JOST, fontSize: '10px', color: GOLD, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700', margin: '0 0 12px' }}>
                Exclusive Launch Privileges
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                {[
                  'Priority Access for Select Homebuyers',
                  'Special Pre-Launch Ownership Advantages',
                  'First Choice of Premium Residences',
                  'Limited-Time Invitation Benefits',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                    <span style={{ fontFamily: F_SANS, fontSize: '12.5px', color: 'rgba(255,255,255,0.78)', fontWeight: '500' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontFamily: F_SANS, fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 3px', fontWeight: '600' }}>Configuration</p>
                <p style={{ fontFamily: F_JOST, fontSize: '15px', fontWeight: '700', color: '#fff', margin: 0 }}>Luxury 3 &amp; 4 BHK 100% Corner Residences</p>
              </div>
              <div style={{ width: '1px', height: '38px', background: 'rgba(255,255,255,0.18)' }} />
              <div>
                <p style={{ fontFamily: F_SANS, fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 3px', fontWeight: '600' }}>Starting From</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  <span style={{ fontFamily: F_JOST, fontSize: '22px', fontWeight: '700', color: 'rgba(255,255,255,0.38)', textDecoration: 'line-through', lineHeight: 1 }}>
                    ₹5.75 Cr*
                  </span>
                  <p className="blink-price" style={{ fontFamily: F_JOST, fontSize: '30px', fontWeight: '900', color: GOLD, margin: 0, lineHeight: 1 }}>
                    ₹5.57 Cr*
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => setIsOpen(true)} className="btn-gold" style={{ padding: '14px 36px', fontSize: '13px', letterSpacing: '0.1em' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Save upto 18 Lacs*
              </button>
              <button onClick={() => setIsOpen(true)} style={{ padding: '14px 36px', fontSize: '13px', letterSpacing: '0.1em', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.32)', borderRadius: '6px', color: '#fff', fontFamily: F_JOST, fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'border-color 0.25s, background 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.background = 'rgba(175,117,28,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.32)'; e.currentTarget.style.background = 'transparent' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Enquire Now
              </button>
            </div>
          </div>

          {/* RIGHT — Floating glass card */}
          <div className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0" data-aos="fade-left" data-aos-delay="200">
            <div style={{ background: 'rgba(8,8,8,0.78)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.09)', borderTop: '3px solid var(--color-gold)', overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.55)' }}>
              <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{ fontFamily: F_JOST, fontSize: '10px', fontWeight: '800', color: GOLD, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 3px' }}>
                  Reserved for the Truly Distinguished
                </p>
                <p style={{ fontFamily: F_SANS, fontSize: '11.5px', color: 'rgba(255,255,255,0.38)', margin: 0 }}>
                  An ultra-exclusive release · Limited residences
                </p>
              </div>
              <div style={{ padding: '14px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {[
                    { label: 'Land parcer', value: '12 Acres' },
                    { label: 'Floors', value: 'G + 40' },
                    { label: 'Possession', value: 'Dec 2030' },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '11px 4px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: '800', color: '#fff', margin: '0 0 3px' }}>{s.value}</p>
                      <p style={{ fontFamily: F_SANS, fontSize: '9px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0, fontWeight: '600' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '14px 22px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px' }}>
                  {[
                    { icon: '🎧', label: 'Instant Call Back' },
                    { icon: '🚗', label: 'Free Site Visit' },
                    { icon: '🏷️', label: 'Best Price' },
                  ].map((b, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '10px 4px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <span style={{ fontSize: '18px', lineHeight: 1 }}>{b.icon}</span>
                      <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.38)', fontFamily: F_SANS, fontWeight: '600', textAlign: 'center', letterSpacing: '0.02em' }}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '14px' }}>
              {slides.map((_, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)}
                  style={{ width: current === idx ? '28px' : '8px', height: '3px', background: current === idx ? GOLD : 'rgba(255,255,255,0.28)', border: 'none', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.4s ease', padding: 0 }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
