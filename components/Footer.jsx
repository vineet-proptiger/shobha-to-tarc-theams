import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-cream-dark" style={{ borderTop: '1px solid rgba(175,117,28,0.2)' }}>

      {/* Three columns */}
      <div className="flex items-start justify-center max-w-[1100px] mx-auto max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-6 max-[768px]:px-[30px] max-[768px]:py-10"
        style={{ padding: '44px 60px' }}>

        <div className="flex-1 flex flex-col gap-2 text-center px-10 max-[768px]:px-0">
          <h4 className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-text-dark mb-1.5">Corporate Office</h4>
          <address className="not-italic font-sans text-[12.5px] leading-[1.75] text-text-mid">
            Sector-63A, Gurugram,<br />Haryana - 122101
          </address>
        </div>

        <div className="w-[1px] self-center flex-shrink-0 max-[768px]:w-[60px] max-[768px]:h-[1px]"
          style={{ height: '80px', background: 'rgba(175,117,28,0.25)' }} />

        <div className="flex-1 flex flex-col gap-2 text-center px-10 max-[768px]:px-0">
          <h4 className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-text-dark mb-1.5">Site Office</h4>
          <address className="not-italic font-sans text-[12.5px] leading-[1.75] text-text-mid">
            Sobha Crescent Site, Sector 63A,<br />Gurugram, Haryana - 122101
          </address>
        </div>

        <div className="w-[1px] self-center flex-shrink-0 max-[768px]:w-[60px] max-[768px]:h-[1px]"
          style={{ height: '80px', background: 'rgba(175,117,28,0.25)' }} />

        <div className="flex-1 flex flex-col gap-2 text-center px-10 max-[768px]:px-0">
          <h4 className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-text-dark mb-1.5">Contact Us</h4>
          <Link href="tel:+919718344024" className="font-sans text-[13px] text-text-mid hover:text-gold transition-colors block">+91 9718344024</Link>
          <Link href="mailto:sales@sobha.com" className="font-sans text-[13px] text-text-mid hover:text-gold transition-colors block">sales@sobha.com</Link>
        </div>
      </div>

      <div className="h-[1px] mx-10 max-[768px]:mx-5" style={{ background: 'rgba(175,117,28,0.2)' }} />

      {/* Meta */}
      <div className="flex flex-col items-center gap-2.5 text-center" style={{ padding: '20px 40px' }}>
        <p className="font-sans text-[12px] text-text-mid tracking-[0.3px]">
          Project RERA NO.: Coming Soon (Subject to official approvals)
        </p>
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          {['Disclaimer & Privacy Policy', 'Environment Compliance', 'Building Plan'].map((label, i) => (
            <span key={label} className="flex items-center gap-2.5">
              <Link href="#" className="font-sans text-[11.5px] text-text-mid hover:text-gold transition-colors">{label}</Link>
              {i < 2 && <span className="font-sans text-[11.5px]" style={{ color: 'rgba(175,117,28,0.4)' }}>|</span>}
            </span>
          ))}
          <span style={{ color: 'rgba(175,117,28,0.4)' }}>|</span>
          <span className="font-sans text-[11.5px] text-text-mid">Crafted by GTF Technologies</span>
        </div>
      </div>

      <div className="h-[1px] mx-10 max-[768px]:mx-5" style={{ background: 'rgba(175,117,28,0.2)' }} />

      {/* Disclaimer */}
      <div className="max-w-[1200px] mx-auto text-center max-[768px]:px-6" style={{ padding: '16px 60px 24px' }}>
        <p className="font-sans text-[10.5px] leading-[1.7] text-text-light">
          <strong className="text-text-mid">Disclaimer :</strong> The information depicted herein, for e.g. master plans, floor plans,
          furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours,
          amenities and facilities etc. are subject to change without notifications as may be required by the
          relevant authorities or the Developer's architect.{' '}
          <Link href="#" className="text-gold font-semibold underline hover:text-gold-light transition-colors">Read More</Link>
        </p>
      </div>
    </footer>
  )
}
