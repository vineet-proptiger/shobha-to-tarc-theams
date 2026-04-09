import Image from 'next/image'
import { locationImages } from '../lib/images'

const proximities = [
  { time: '3 Min',  label: 'Ayu Health Hospital' },
  { time: '1 Min',  label: 'DPS International Edge' },
  { time: '10 Min', label: 'CK Birla Hospital' },
  { time: '10 Min', label: 'Golf Course Road' },
  { time: '15 Min', label: 'Rapid Metro' },
  { time: '15 Min', label: 'Delhi Jaipur Expressway' },
  { time: '20 Min', label: 'Dwarka Expressway' },
  { time: '45 Min', label: 'IGI Airport' },
]

export default function Location() {
  return (
    <section id="location" className="bg-cream py-[60px] px-5 sm:px-[30px] xl:py-[100px]">
      <div className="max-w-[1200px] mx-auto location-grid">

        {/* Left */}
        <div>
          <span className="section-label">Connectivity</span>
          <div className="w-[60px] h-[2px] bg-gold my-4" />
          <h2 className="font-serif font-light text-text-dark leading-[1.25] mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            Embrace The Perfect<br />
            <em className="italic text-gold">Location Advantages</em>
          </h2>
          <p className="font-sans text-[14px] leading-[1.8] text-text-mid mb-8 sm:mb-10">
            Sector 63A, Gurugram — perfectly positioned at the heart of the city's
            most coveted corridor, offering unmatched access to all that matters.
          </p>

          {/* Proximity grid */}
          <div className="proximity-grid"
            style={{ border: '1px solid rgba(175,117,28,0.15)' }}>
            {proximities.map((p, i) => (
              <div key={i} className="flex flex-col gap-1.5 hover:bg-white transition-colors duration-300"
                style={{ padding: '16px 20px', border: '1px solid rgba(175,117,28,0.15)' }}>
                <span className="font-serif text-[20px] sm:text-[22px] font-medium text-gold leading-none">{p.time}</span>
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.5px] text-text-mid uppercase">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right map */}
        <div className="relative overflow-hidden rounded-[4px] location-map">
          <Image
            src={locationImages.map}
            alt="Location Map — Sector 63A, Gurugram"
            fill
            className="object-cover"
            style={{ filter: 'saturate(0.7) brightness(0.9)' }}
          />

          {/* Pin */}
          <div className="absolute flex flex-col items-center gap-1.5"
            style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="relative">
              <div className="w-4 h-4 bg-gold rounded-full z-10 relative"
                style={{ border: '3px solid white', boxShadow: '0 0 0 4px rgba(175,117,28,0.4)' }} />
              <div className="absolute rounded-full"
                style={{
                  top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '50px', height: '50px',
                  border: '2px solid rgba(175,117,28,0.5)',
                  animation: 'ping 1.5s ease infinite'
                }} />
            </div>
            <span className="bg-gold text-white font-sans text-[10px] font-bold tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ padding: '5px 12px' }}>
              Sobha Reality
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .location-map { height: 540px; }
        .proximity-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1000px) {
          .location-grid { grid-template-columns: 1fr; gap: 50px; }
          .location-map { height: 360px; }
        }
        @media (max-width: 600px) {
          .proximity-grid { grid-template-columns: 1fr; }
          .location-map { height: 280px; }
        }
        @keyframes ping {
          0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2);   opacity: 0; }
        }
      `}</style>
    </section>
  )
}
