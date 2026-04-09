import { SobhaLogo } from './Logos'

const press = [
  {
    bg: 'linear-gradient(135deg, #e8e0d5 0%, #d4c8b8 100%)',
    headline: 'Sobha Realty Achieves 900% Growth in Q2 FY25!',
    sub: 'Sobha reports record growth in quarterly earnings',
    dark: false,
  },
  {
    bg: 'linear-gradient(135deg, #0d2240 0%, #1a3a5c 60%, #8a6520 100%)',
    headline: 'HITS 50% SALES MILESTONE WORTH ₹1,350 CR!',
    sub: 'Sobha reports Rs 1,350 crore pre-sale from Gurugram project',
    dark: true,
  },
  {
    bg: 'linear-gradient(135deg, #f5f0e8 0%, #ede6d8 100%)',
    headline: 'Business Standard',
    sub: 'Sobha shares zoom 5% on making sales worth Rs 1,350 cr in Gurugram project',
    dark: false,
    isBs: true,
  },
]

export default function PressCenter() {
  return (
    <section id="press" className="press-section">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-2.5 mb-11 px-4">
        <span className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-text-mid">PRESS CENTER</span>
        <h2 className="font-serif italic text-gold tracking-[0.5px]" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
          Sobha Realty Through The Headlines
        </h2>
      </div>

      {/* Cards */}
      <div className="press-grid max-w-[1000px] mx-auto">
        {press.map((item, i) => (
          <div key={i}
            className="rounded-lg overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
            style={{ background: item.bg, minHeight: '220px' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

            {/* Logo row */}
            <div className="flex items-center gap-2"
              style={{ padding: '20px 20px 12px', borderBottom: `1px solid ${item.dark ? 'rgba(255,255,255,0.1)' : 'rgba(175,117,28,0.15)'}` }}>
              <SobhaLogo size={18} />
              <span className="font-sans text-[14px] font-bold tracking-[3px]"
                style={{ color: item.dark ? '#c9983e' : 'var(--color-navy)' }}>
                {item.isBs ? 'Business Standard' : 'SOBHA'}
              </span>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col gap-3 justify-center" style={{ padding: '20px' }}>
              <p className="leading-[1.35]"
                style={{
                  fontFamily: item.dark ? "var(--font-sans), sans-serif" : "var(--font-serif), 'Cormorant Garamond', Georgia, serif",
                  fontSize: item.dark ? '20px' : '18px',
                  fontWeight: item.dark ? 700 : 500,
                  color: item.dark ? '#fff' : 'var(--color-text-dark)',
                  letterSpacing: item.dark ? '0.5px' : undefined,
                }}>
                {item.headline}
              </p>
              {item.sub && (
                <p className="font-sans text-[11px] leading-[1.6]"
                  style={item.dark
                    ? { color: 'rgba(255,255,255,0.65)', background: 'rgba(0,0,0,0.3)', padding: '8px 10px', fontSize: '10.5px', textAlign: 'center' }
                    : { color: 'var(--color-text-light)' }}>
                  {item.sub}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .press-section {
          background: var(--color-cream-dark);
          padding: 60px 30px 80px;
        }
        .press-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .press-section { padding: 50px 16px 60px; }
          .press-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}
