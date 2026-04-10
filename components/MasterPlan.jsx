'use client'
import Image from 'next/image'
import { useState } from 'react'
import { masterplanImages } from '../lib/images'

const plans = [
  {
    label: 'MASTER PLAN',
    title: 'Thoughtfully Planned Ecosystem',
    desc: 'A thoughtfully designed ecosystem promoting biodiversity and environmental balance, featuring rainwater harvesting, waste management and energy-efficient systems. This is more than luxury — it\'s a fusion of extravagance and sustainability, fostering connections with both people and the planet.',
    img: masterplanImages.aerial,
  },
  {
    label: '3 BHK FLOOR PLAN',
    title: 'Spacious 3 BHK Residences',
    desc: 'Thoughtfully crafted 3 BHK floor plans designed to maximise space and natural light. Each residence offers generous living areas, well-appointed bedrooms, and expansive balconies that bring the outdoors in — redefining modern luxury living.',
    img: masterplanImages.aerial,
  },
  {
    label: '4 BHK FLOOR PLAN',
    title: 'Ultra-Luxury 4 BHK Residences',
    desc: 'Expansive 4 BHK floor plans curated for those who seek the finest in luxury living. With private elevator lobbies, panoramic views, and meticulously planned interiors, these residences set a new benchmark for exclusivity and comfort.',
    img: masterplanImages.aerial,
  },
]

export default function MasterPlan({ onEnquire }) {
  const [active, setActive] = useState(0)
  const plan = plans[active]

  return (
    <section id="masterplan" className="bg-cream">
      <div className="masterplan-grid">

        {/* Left */}
        <div className="bg-cream flex flex-col justify-center items-start relative masterplan-left">

          {/* White card */}
          <div className="bg-white flex flex-col items-center gap-4 w-full masterplan-card"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            <span className="font-sans text-[10px] font-bold tracking-[3.5px] uppercase text-text-mid text-center">
              {plan.label}
            </span>
            <h3 className="font-serif italic text-gold text-center leading-[1.35]"
              style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
              {plan.title}
            </h3>
            <p className="font-sans text-[13px] leading-[1.9] text-text-light text-center" style={{ minHeight: '90px' }}>
              {plan.desc}
            </p>
            {/* Dots */}
            <div className="flex gap-[9px] mt-1">
              {plans.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Plan ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${i === active ? 'bg-text-dark scale-[1.15]' : 'bg-muted hover:bg-text-light'
                    }`} />
              ))}
            </div>
            <button onClick={onEnquire}
              className="btn-gold mt-2 px-10 py-3.5">
              View Plan
            </button>
          </div>

          {/* Bottom label */}
          {/* <div className="masterplan-bottom-label flex items-center gap-3.5">
            <span className="font-sans text-[11px] font-bold tracking-[4px] text-gold uppercase">MASTER PLAN</span>
            <div className="w-11 h-[1px] bg-gold" />
          </div> */}
        </div>

        {/* Right image */}
        <div className="relative overflow-hidden cursor-pointer group masterplan-img" onClick={onEnquire}>
          {plans.map((p, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}>
              <Image
                src={p.img}
                alt={p.label}
                fill
                className="object-cover transition-all duration-400 blur-[3px] brightness-[0.8]"
              />
            </div>
          ))}
          <div className="absolute inset-0 transition-colors duration-300 z-10 bg-black/20" />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <button className="btn-gold px-8 py-3.5 shadow-2xl scale-110">
              View Plan
            </button>
          </div>

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
