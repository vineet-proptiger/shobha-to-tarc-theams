import Image from 'next/image'
import { virtualTourImages } from '../lib/images'

export default function VirtualTour() {
  return (
    <section id="virtualtour" className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '600px' }}>
      {/* BG */}
      <div className="absolute inset-0">
        <Image src={virtualTourImages.bg} alt="Virtual Tour" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(26,18,8,0.78)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4" style={{ padding: '80px 20px' }}>
        <span className="section-label" style={{ color: '#e8d5a3' }}>Immersive Experience</span>
        <div className="w-[60px] h-[2px] bg-gold mx-auto" />
        <h2 className="font-serif font-light text-white leading-[1.2]" style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}>
          Take a 360°<br />
          <em className="italic" style={{ color: '#e8d5a3' }}>Virtual Tour</em>
        </h2>
        <p className="font-sans text-[14px] leading-[1.8] max-w-[500px] mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Walk through Tarc Ishva from wherever you are. Experience every detail,
          every corner, and every view — as if you were there.
        </p>

        {/* Animated circle */}
        <div className="relative flex items-center justify-center" style={{ width: '100px', height: '100px', margin: '10px 0' }}>
          <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(175,117,28,0.4)', animation: 'vtRing 3s linear infinite' }} />
          <div className="absolute rounded-full" style={{ inset: '-15px', border: '1px solid rgba(175,117,28,0.2)', animation: 'vtRing 4s linear infinite reverse' }} />
          <span className="font-serif text-gold relative z-10" style={{ fontSize: '22px', fontWeight: 500 }}>360°</span>
        </div>

        <button className="inline-flex items-center gap-3 bg-transparent text-white font-sans text-[12px] font-semibold tracking-[3px] uppercase transition-all duration-300 hover:bg-gold mt-2.5"
          style={{ padding: '16px 40px', border: '1px solid var(--color-gold)' }}>
          <span className="flex items-center justify-center rounded-full bg-gold text-[10px] transition-all duration-300"
            style={{ width: '30px', height: '30px' }}>▶</span>
          Watch Now
        </button>
      </div>

      <style>{`
        @keyframes vtRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
