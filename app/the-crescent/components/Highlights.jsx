'use client'
import React, { useState } from 'react'
import { BedDouble, MapPin, Building2, LayoutPanelLeft, Navigation, TrendingUp, Shield, Sparkles } from 'lucide-react'

const F_SANS = 'var(--font-sans), Montserrat, sans-serif'
const highlightIconProps = { size: 26, strokeWidth: 1.5 }

const highlights = [
  { text: 'Luxury 3 & 4 BHK 100% Corner Residences', icon: <BedDouble {...highlightIconProps} /> },
  { text: 'Located at Sector 63A, Golf Course Extension Road', icon: <MapPin {...highlightIconProps} /> },
  { text: 'Panoramic Aravalli Range & City Views', icon: <LayoutPanelLeft {...highlightIconProps} /> },
  { text: '40-Storey Iconic High-Rise Tower', icon: <Building2 {...highlightIconProps} /> },
  { text: '12-Acre Low-Density Luxury Estate', icon: <TrendingUp {...highlightIconProps} /> },
  { text: 'Limited Inventory — 4 Towers Only', icon: <Shield {...highlightIconProps} /> },
  { text: 'Seamless Connectivity to Delhi & Gurgaon', icon: <Navigation {...highlightIconProps} /> },
  { text: 'World-Class Specifications & Finishes', icon: <Sparkles {...highlightIconProps} /> },
]

const HighlightCard = ({ item, idx }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      data-aos="fade-up" data-aos-delay={idx * 60}
      style={{
        background: '#fff', border: '1px solid var(--color-gold-light)', borderTop: '5px solid var(--color-gold)',
        borderRadius: '14px', padding: '28px 16px 20px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', cursor: 'default',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered ? '0 10px 32px var(--color-shadow-inner)' : '0 4px 15px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        position: 'relative', overflow: 'hidden', height: '100%',
      }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '0 0 10px 10px' }} />
      <div style={{ width: '62px', height: '62px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', background: hovered ? 'var(--color-gold)' : 'var(--color-gold-bg)', border: `2px solid ${hovered ? 'var(--color-gold)' : 'var(--color-gold-light)'}`, color: hovered ? '#fff' : 'var(--color-gold)', transition: 'all 0.3s ease', boxShadow: hovered ? '0 0 20px var(--color-shadow-inner)' : 'none' }}>
        {item.icon}
      </div>
      <p style={{ fontFamily: F_SANS, fontSize: '13px', lineHeight: 1.6, color: 'var(--color-gold)', fontWeight: '600', margin: 0 }}>
        {item.text}
      </p>
    </div>
  )
}

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ padding: '56px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
    <div className="container mx-auto px-4 md:px-8">
      <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
        <span style={{ display: 'inline-block', padding: '4px 16px', background: 'var(--color-gold-bg)', borderRadius: '50px', fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)', fontFamily: F_SANS, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--color-gold-light)', marginBottom: '10px' }}>Project Excellence</span>
        <h2 style={{ fontFamily: F_SANS, fontWeight: '800', fontSize: '26px', color: '#111827', margin: 0, letterSpacing: '-0.01em' }}>
          Key <span style={{ color: 'var(--color-gold)' }}>Highlights</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <span style={{ display: 'block', width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => <HighlightCard key={idx} item={item} idx={idx} />)}
      </div>
      <div style={{ textAlign: 'center', marginTop: '36px' }} data-aos="fade-up">
        <button onClick={() => setIsOpen(true)} className="btn-gold" style={{ padding: '13px 44px', letterSpacing: '0.08em' }}>Enquire Now</button>
      </div>
    </div>
  </section>
)

export default Highlights
