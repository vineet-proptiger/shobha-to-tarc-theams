import Image from 'next/image'
import { aboutImages } from '../lib/images'
import { logoImage } from '../lib/images'

const H = ({ children }) => <span className="text-gold font-medium">{children}</span>

export default function About({ onEnquire }) {
  return (
    <section id="about" className="relative flex items-center justify-center md:justify-end overflow-hidden py-20 md:py-0" style={{ minHeight: '90vh' }}>
      <Image
        src={aboutImages.bg}
        alt="TARC Ishva"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.0) 100%)' }} />

      {/* Top center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10 w-full px-4">
        <div className="relative h-12 w-28 opacity-70 grayscale brightness-0">
          <Image src={logoImage} alt="Sobha Realty" fill className="object-contain" />
        </div>
        <p className="font-sans text-[11px] sm:text-[13px] font-semibold tracking-[2.5px] uppercase text-center mt-1"
          style={{ color: 'var(--color-text-mid)' }}>
          SOBHA CRESCENT — SECTOR 63A, GURUGRAM
        </p>
      </div>

      {/* Right card */}
      <div className="
        relative z-[3] bg-white mt-36 md:mt-0
        w-[calc(100%-24px)] mx-auto
        sm:w-[calc(100%-40px)] sm:mx-auto
        md:ml-auto md:mx-0 md:w-[44%] md:mr-[30px]
        xl:mr-[70px]
      "
        style={{
          padding: '40px 24px',
          maxWidth: '580px',
          boxShadow: '0 8px 50px rgba(0,0,0,0.14)',
        }}>
        <span className="block font-sans text-[10px] font-semibold tracking-[3px] text-gold uppercase mb-3.5 text-center md:text-right">ABOUT US</span>
        <h2 className="font-serif italic text-gold leading-[1.25] mb-6"
          style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
          Sobha Crescent <span className="font-sans font-normal text-xl not-italic text-text-dark">Sector 63A</span>
        </h2>
        <p className="font-sans text-[13px] sm:text-[14px] leading-[1.9] text-text-dark text-justify mb-8">
          Sobha Crescent in Sector 63A, Gurgaon sets a new benchmark of <H>refined luxury living</H> along the prestigious Golf Course Extension Road, thoughtfully spread across a sprawling <H>12-acre estate</H>. Among the most anticipated new launch projects in Gurgaon, this Sobha Sector 63A development is designed as a rare <H>low-density residential enclave</H> featuring 4 towers with limited inventory in this premium phase launch. A <H>40-storey landmark</H> living experience, it is an iconic high-rise address where you rise above the ordinary and claim your place among the finest. Offering thoughtfully crafted luxury apartments in Gurgaon, every residence is a <H>100% corner home</H> planned to maximize natural light, cross ventilation, and uninterrupted views of the majestic <H>Aravalli Range</H>.
        </p>
        <button onClick={onEnquire}
          className="bg-gold hover:bg-gold-light text-white font-sans text-[11px] font-bold tracking-[2.5px] uppercase px-8 py-3.5 transition-colors duration-300 border-none cursor-pointer">
          KNOW MORE
        </button>
      </div>

      <span className="absolute bottom-5 left-6 text-[10px] italic text-white/70 tracking-[1px] z-10">
        Artistic Impression
      </span>
    </section>
  )
}
