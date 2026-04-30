'use client'
import Image from 'next/image'
import { heroImages } from '../lib/images'
import { logoImage } from '../lib/images'

export default function Hero({ onEnquire, onMenuClick }) {
  return (
    <>
      <section id="home" className="hero-grid" style={{ minHeight: '100vh' }}>

        {/* LEFT: image panel */}
        <div className="relative overflow-hidden flex flex-col justify-between hero-left">
          <Image
            src={heroImages.bg}
            alt="Sobha Sector 63A"
            fill
            priority
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(10,8,4,0.72) 0%, rgba(10,8,4,0.45) 50%, rgba(10,8,4,0.60) 100%)' }} />

          {/* Top bar */}
          <div className="relative z-10 flex items-start justify-between px-5 sm:px-7 pt-[22px]">
            <p className="text-[7.5px] sm:text-[8.5px] leading-[1.65] text-white/75 tracking-[0.3px] uppercase max-w-[200px] sm:max-w-[340px]">
              RERA REGISTERED PROJECT SOBHA SECTOR 63A GURUGRAM
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative h-6 w-20 sm:h-8 sm:w-28 opacity-90 grayscale brightness-200">
                <Image src={logoImage} alt="Sobha Realty" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Main headline */}
          <div className="relative z-10 px-5 sm:px-9 pb-4 sm:pb-5">
            <h1 className="font-serif font-normal leading-[1.0] text-gold-bright tracking-[1px] uppercase"
              style={{ fontSize: 'clamp(38px, 7vw, 100px)' }}>
              SOBHA<br />SECTOR 63A
            </h1>
            <p className="font-sans font-bold text-white mt-2 sm:mt-3"
              style={{ fontSize: 'clamp(14px, 2.5vw, 32px)', letterSpacing: '-0.04em' }}>
              New Launch Golf Course Extension Road
            </p>
          </div>

          {/* Bottom row */}
          <div className="relative z-10 flex items-end justify-between px-4 sm:px-6 pb-4 sm:pb-5 gap-3 sm:gap-5 flex-wrap">
            <p className="text-[8px] text-white/55 leading-[1.6] max-w-[280px] sm:max-w-[320px] italic">
              Disclaimer: Images are indicative and for representational purposes only.
              This advertisement is and shall be construed only as an invitation to offer.
            </p>
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="flex flex-col items-center leading-[1.1]">
                <span className="font-serif text-[28px] sm:text-[34px] tracking-[6px] text-white uppercase mt-2">Crescent</span>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[2px] text-white/70 uppercase mt-0.5">Gurugram</span>
              </div>
              <span className="font-sans text-[8px] italic text-white/50 tracking-[1px] mt-1.5">Artistic Impression</span>
            </div>
          </div>
        </div>

        {/* RIGHT: white panel */}
        <div className="bg-white flex flex-col hero-right">
          {/* MENU top — only on desktop where right panel is visible */}
          <div className="hero-menu-bar justify-end px-7 pt-[22px] pb-[18px] border-b border-gold/[0.12]">
            <span onClick={onMenuClick}
              className="font-sans text-[11px] font-bold tracking-[4px] text-gold uppercase border-b-2 border-gold pb-1 cursor-pointer hover:text-gold-light transition-colors">
              MENU
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 text-center gap-4 sm:gap-[18px] py-8 sm:py-10">
            <h2 className="font-serif font-normal text-navy leading-[1.25] tracking-[0.5px]"
              style={{ fontSize: 'clamp(22px, 3vw, 40px)' }}>
              Sobha Crescent<br />Sector 63A
            </h2>

            <div className="w-[60px] h-[1px] bg-gold/30 mx-auto" />

            <p className="font-sans text-[15px] sm:text-[15px] font-bold tracking-[1px] sm:tracking-[1.5px] text-gold uppercase">
              3 &amp; 4 BHK LUXURY RESIDENCES
            </p>

            <div className="w-[60px] h-[1px] bg-gold/30 mx-auto" />

            <p className="font-sans text-[12px] text-text-light tracking-[0.5px] -mb-2.5">Price Starts From</p>
            <p className="font-serif font-normal text-gold leading-none"
              style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}>
              ₹ 5.57 Cr<sup className="text-[0.45em] text-gold">*</sup>
            </p>

            <button onClick={onEnquire}
              className="btn-gold w-full max-w-[280px] py-4 mt-2.5">
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </section>

      <style>{`
        /* Desktop: 70/30 split */
        .hero-grid {
          display: grid;
          grid-template-columns: 70% 30%;
        }
        .hero-left {
          min-height: 100vh;
        }
        .hero-right {
          /* always visible on desktop */
        }
        .hero-menu-bar {
          display: flex;
        }

        /* Tablet / small laptop: stack vertically */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 60vh auto;
            min-height: 100vh;
          }
          .hero-left {
            min-height: 60vh;
          }
          .hero-menu-bar {
            display: none; /* MENU button hidden — navbar handles this */
          }
        }

        /* Mobile */
        @media (max-width: 500px) {
          .hero-grid {
            grid-template-rows: 55vh auto;
          }
          .hero-left {
            min-height: 55vh;
          }
        }
      `}</style>
    </>
  )
}
