'use client'
import Image from 'next/image'
import { useState } from 'react'
import { directionsImages, logoImage } from '../lib/images'

const descs = [
  'Strategically located on Golf Course Extension Road with easy access to major expressways and city centers. Elevate your everyday living experience in the heart of Gurugram.',
  'A rare low-density enclave ensuring enhanced privacy and spacious living within a secure, gated community. Enjoy the peace of mind that comes with exclusive living.',
  'Only four residences per level for maximum exclusivity, featuring private elevator lobbies and 100% corner views. An architectural masterpiece designed for the select few.',
  'Panoramic Aravalli vistas and uninterrupted skyline views to elevate your everyday living experience. Unmatched luxury with seamless indoor-outdoor connectivity.',
]

const directions = directionsImages.map((d, i) => ({ ...d, desc: descs[i] }))

function CompassWheel({ label }) {
  const gold = 'var(--color-gold)'
  return (
    <svg style={{ width: '140px', height: '140px', flexShrink: 0 }} viewBox="0 0 220 220" fill="none">
      <circle cx="110" cy="110" r="105" stroke={gold} strokeWidth="0.8" opacity="0.4" />
      <circle cx="110" cy="110" r="90" stroke={gold} strokeWidth="0.5" opacity="0.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        return <line key={angle}
          x1={110 + 88 * Math.sin(rad)} y1={110 - 88 * Math.cos(rad)}
          x2={110 + 100 * Math.sin(rad)} y2={110 - 100 * Math.cos(rad)}
          stroke={gold} strokeWidth="1" opacity="0.5" />
      })}
      <text x="110" y="20" textAnchor="middle" fontSize="11" fill={gold} fontFamily="Montserrat,sans-serif" letterSpacing="1" opacity="0.7">N</text>
      <text x="200" y="114" textAnchor="middle" fontSize="11" fill={gold} fontFamily="Montserrat,sans-serif" letterSpacing="1" opacity="0.7">E</text>
      <text x="110" y="208" textAnchor="middle" fontSize="11" fill={gold} fontFamily="Montserrat,sans-serif" letterSpacing="1" opacity="0.7">S</text>
      <text x="18" y="114" textAnchor="middle" fontSize="11" fill={gold} fontFamily="Montserrat,sans-serif" letterSpacing="1" opacity="0.7">W</text>
      <circle cx="110" cy="110" r="60" stroke={gold} strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
      <text x="110" y="115" textAnchor="middle" fontSize="13" fill={gold} fontFamily="Montserrat,sans-serif" fontWeight="700" letterSpacing="3">{label}</text>
      <circle cx="110" cy="110" r="4" fill={gold} opacity="0.6" />
    </svg>
  )
}

export default function Directions({ onEnquire }) {
  const [active, setActive] = useState(0)
  const d = directions[active]

  return (
    <section id="directions" className="bg-cream-dark pb-0">
      {/* Header */}
      {/* <div className="text-center flex flex-col items-center gap-3.5 opacity-85 px-5" style={{ padding: '10px 20px 30px' }}>
        <div className="relative h-12 w-28 opacity-70 grayscale brightness-0">
          <Image src={logoImage} alt="Sobha Realty" fill className="object-contain" />
        </div>
        <p className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[1.5px] text-text-mid uppercase">
          Sobha Crescent — Sector 63A, Gurugram
        </p>
      </div> */}

      {/* Tabs */}
      <div className="flex justify-center max-w-[560px] mx-auto flex-wrap px-4 pt-6"
        style={{ paddingBottom: '40px' }}>
        {directions.map((item, i) => (
          <button key={item.name} onClick={() => setActive(i)}
            className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[1.5px] uppercase transition-all duration-[250ms] cursor-pointer directions-tab"
            style={{
              padding: '12px 10px',
              background: active === i ? 'var(--color-gold)' : '#fff',
              color: active === i ? '#fff' : 'var(--color-text-dark)',
              border: `1px solid rgba(175,117,28,0.3)`,
              borderRight: i < directions.length - 1 ? 'none' : undefined,
              ...(active === i ? { borderColor: 'var(--color-gold)' } : {}),
            }}>
            {item.name}
          </button>
        ))}
      </div>

      {/* Split panel */}
      <div className="directions-grid">

        {/* Left image */}
        <div className="relative overflow-hidden directions-img">
          {directions.map((item, i) => (
            <div key={item.name} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === active ? 1 : 0 }}>
              <Image src={item.img} alt={item.name} fill className="object-cover" />
            </div>
          ))}
          <span className="absolute bottom-4 left-5 text-[10px] italic text-white/65 tracking-[1px] z-10">
            Artistic Impression
          </span>
        </div>

        {/* Right content */}
        <div className="bg-white flex flex-col justify-center items-center text-center gap-5 directions-content">
          <CompassWheel label={d.compassLabel} />
          <h3 className="font-serif italic text-gold leading-[1.3]"
            style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            {d.subtitle}
          </h3>
          <p className="font-sans text-[13px] leading-[1.9] text-text-mid text-center max-w-[420px] px-2">
            {d.desc}
          </p>
          <button onClick={onEnquire}
            className="inline-block bg-gold hover:bg-gold-light text-white font-sans text-[11px] font-bold tracking-[2px] uppercase py-3.5 px-9 border-none transition-colors duration-300 cursor-pointer mt-1">
            Download Brochure
          </button>
        </div>
      </div>

      <style>{`
        .directions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 500px;
        }
        .directions-img { min-height: 280px; }
        .directions-content { padding: 50px 40px; }
        .directions-tab { flex: 1; min-width: 80px; }
        @media (max-width: 768px) {
          .directions-grid { grid-template-columns: 1fr; }
          .directions-img { height: 260px; }
          .directions-content { padding: 40px 24px; }
        }
        @media (max-width: 480px) {
          .directions-tab { min-width: 70px; font-size: 10px; padding: 10px 6px; }
        }
      `}</style>
    </section>
  )
}
