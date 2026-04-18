'use client'
import Image from 'next/image'
import { useState } from 'react'
import { highlightImages } from '../lib/images'

export default function Highlights() {
  const [active, setActive] = useState(1)

  return (
    <section style={{ background: 'var(--color-cream-dark)', padding: '20px 0 36px' }}>
      {/* Strip — horizontal accordion on desktop, vertical stack on mobile */}
      <div className="highlights-strip overflow-hidden" style={{ gap: '5px', padding: '0 30px' }}>
        {highlightImages.map((h, i) => (
          <div key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="relative overflow-hidden cursor-pointer group highlights-item"
            style={{ flex: active === i ? 8 : 1, transition: 'flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <Image src={h.img} alt={h.caption} fill className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-600" />
            {/* Dark overlay for inactive items on mobile */}
            <div className="absolute inset-0 transition-opacity duration-300"
              style={{ background: 'rgba(0,0,0,0.3)', opacity: active === i ? 0 : 0.5 }} />
            <span className="absolute bottom-3.5 left-[18px] font-sans text-[10px] italic text-white/70 tracking-[1px] whitespace-nowrap transition-opacity duration-400"
              style={{ opacity: active === i ? 1 : 0 }}>
              Artistic Impression
            </span>
            {/* Caption visible on mobile for non-active items */}
            <span className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[10px] font-bold tracking-[1.5px] text-white uppercase whitespace-nowrap transition-opacity duration-300"
              style={{ opacity: active === i ? 0 : 1 }}>
              {h.caption}
            </span>
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="font-serif font-normal text-text-dark text-center tracking-[0.5px] transition-opacity duration-300 px-5"
        style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', padding: '28px 20px 10px' }}>
        {highlightImages[active].caption}
      </p>

      <style>{`
        .highlights-strip {
          display: flex;
          height: 390px;
        }
        .highlights-item {
          min-width: 40px;
        }
        @media (max-width: 1024px) {
          .highlights-strip {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .highlights-strip {
            flex-direction: column;
            height: auto;
            padding: 0 16px !important;
          }
          .highlights-item {
            flex: none !important;
            height: 80px;
            transition: height 0.55s cubic-bezier(0.4, 0, 0.2, 1) !important;
            min-width: unset;
          }
          /* active item taller */
          .highlights-item:nth-child(${active + 1}) {
            height: 220px;
          }
        }
      `}</style>
    </section>
  )
}
