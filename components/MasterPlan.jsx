'use client'
import Image from 'next/image'
import { masterplanImages } from '../lib/images'
import { FlameLogo } from './Logos'

export default function MasterPlan({ onEnquire }) {
  return (
    <section id="masterplan" className="bg-cream">
      <div className="masterplan-grid">

        {/* Left */}
        <div className="bg-cream flex flex-col justify-center items-start relative masterplan-left">

          {/* White card */}
          <div className="bg-white flex flex-col items-center gap-4 w-full masterplan-card"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            <div className="mb-1"><FlameLogo size={64} /></div>
            <span className="font-sans text-[10px] font-bold tracking-[3.5px] uppercase text-text-mid text-center">
              MASTER PLAN
            </span>
            <h3 className="font-serif italic text-gold text-center leading-[1.35]"
              style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
              Thoughtfully Planned Ecosystem
            </h3>
            <p className="font-sans text-[13px] leading-[1.9] text-text-light text-center">
              A thoughtfully designed ecosystem promoting biodiversity and environmental
              balance, featuring rainwater harvesting, waste management and energy-efficient
              systems. This is more than luxury — it's a fusion of extravagance and
              sustainability, fostering connections with both people and the planet.
            </p>
            <button onClick={onEnquire}
              className="btn-gold mt-2 px-10 py-3.5">
              View Plan
            </button>
          </div>

          {/* Bottom label */}
          <div className="masterplan-bottom-label flex items-center gap-3.5">
            <span className="font-sans text-[11px] font-bold tracking-[4px] text-gold uppercase">MASTER PLAN</span>
            <div className="w-11 h-[1px] bg-gold" />
          </div>
        </div>

        {/* Right image */}
        <div className="relative overflow-hidden cursor-zoom-in group masterplan-img" onClick={onEnquire}>
          <Image
            src={masterplanImages.aerial}
            alt="Master Plan"
            fill
            className="object-cover transition-all duration-400 blur-[1px] group-hover:blur-0 brightness-[0.9] group-hover:brightness-[0.95]"
          />
          <div className="absolute inset-0 transition-colors duration-300 z-10"
            style={{ background: 'rgba(249,245,238,0.15)' }} />
        </div>
      </div>

      <style>{`
        .masterplan-grid {
          display: grid;
          grid-template-columns: 42% 58%;
          min-height: 580px;
        }
        .masterplan-left {
          padding: 70px 60px 50px;
        }
        .masterplan-card {
          padding: 48px 44px 44px;
          max-width: 400px;
        }
        .masterplan-bottom-label {
          position: absolute;
          bottom: 28px;
          left: 60px;
        }
        .masterplan-img {
          min-height: 320px;
        }
        @media (max-width: 900px) {
          .masterplan-grid { grid-template-columns: 1fr; }
          .masterplan-left { padding: 50px 30px 60px; }
          .masterplan-card { max-width: 100%; padding: 36px 28px 32px; }
          .masterplan-bottom-label { left: 30px; bottom: 20px; }
          .masterplan-img { height: 320px; }
        }
        @media (max-width: 500px) {
          .masterplan-left { padding: 40px 16px 60px; }
          .masterplan-bottom-label { left: 16px; }
          .masterplan-card { padding: 28px 20px 24px; }
        }
      `}</style>
    </section>
  )
}
