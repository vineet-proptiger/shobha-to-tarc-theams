'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { amenityImages } from '../lib/images'

export default function Amenities() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % amenityImages.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="amenities" className="bg-cream-dark">
      <div className="amenities-grid">

        {/* Left */}
        <div className="bg-cream-dark flex flex-col justify-center items-start relative amenities-left">

          {/* White card */}
          <div className="bg-white flex flex-col items-center gap-4 w-full amenities-card"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            <span className="font-sans text-[10px] font-bold tracking-[3.5px] uppercase text-text-mid text-center">
              OUR AMENITIES
            </span>
            <h3 className="font-serif italic text-gold text-center leading-[1.25]"
              style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}>
              {amenityImages[active].title}
            </h3>
            <p className="font-sans text-[13px] leading-[1.9] text-text-light text-center" style={{ minHeight: '90px' }}>
              {amenityImages[active].desc}
            </p>
            <div className="flex gap-[9px] mt-2.5">
              {amenityImages.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Amenity ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${
                    i === active ? 'bg-text-dark scale-[1.15]' : 'bg-muted hover:bg-text-light'
                  }`} />
              ))}
            </div>
          </div>

          {/* Bottom label */}
          <div className="amenities-bottom-label flex items-center gap-3.5">
            <span className="font-sans text-[11px] font-bold tracking-[4px] text-gold uppercase">AMENITIES</span>
            <div className="w-11 h-[1px] bg-gold" />
          </div>
        </div>

        {/* Right image */}
        <div className="relative overflow-hidden amenities-img">
          {amenityImages.map((a, i) => (
            <div key={i}
              className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}>
              <Image src={a.img} alt={a.title} fill className="object-cover object-center" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .amenities-grid {
          display: grid;
          grid-template-columns: 42% 58%;
          min-height: 580px;
        }
        .amenities-left {
          padding: 70px 60px 50px;
        }
        .amenities-card {
          padding: 48px 44px 40px;
          max-width: 400px;
        }
        .amenities-bottom-label {
          position: absolute;
          bottom: 28px;
          left: 60px;
        }
        .amenities-img {
          min-height: 320px;
        }
        @media (max-width: 900px) {
          .amenities-grid { grid-template-columns: 1fr; }
          .amenities-left { padding: 50px 30px 60px; }
          .amenities-card { max-width: 100%; padding: 36px 28px 32px; }
          .amenities-bottom-label { left: 30px; bottom: 20px; }
          .amenities-img { height: 320px; }
        }
        @media (max-width: 500px) {
          .amenities-left { padding: 40px 16px 60px; }
          .amenities-bottom-label { left: 16px; }
          .amenities-card { padding: 28px 20px 24px; }
        }
      `}</style>
    </section>
  )
}
