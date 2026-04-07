'use client'
import Link from 'next/link'

const btnBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--color-gold-dark)',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background 0.25s',
}

export default function SideButtons({ onEnquire }) {
  return (
    <>
      {/* ── Desktop: right-side vertical strip ── */}
      <div className="side-desktop">
        {/* Download Brochure */}
        <button onClick={onEnquire}
          style={{ ...btnBase, flexDirection: 'column', gap: '7px', padding: '16px 10px 14px', width: '70px' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gold)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold-dark)'}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.2"/>
            <path d="M14 8v9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 13.5l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 20h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6, color: '#fff' }}>
            DOWNLOAD<br />BROCHURE
          </span>
        </button>

        {/* Get In Touch */}
        <Link href="tel:+917827178271"
          style={{ ...btnBase, flexDirection: 'column', gap: '7px', padding: '16px 10px 14px', width: '70px' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gold)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold-dark)'}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.2"/>
            <path d="M10 9.5h2l1 2.5-1.5 1c.8 1.6 2 2.7 3.5 3.5l1-1.5 2.5 1v2c0 .8-.7 1.5-1.5 1.5C12.4 19 9 15.6 9 11c0-.8.7-1.5 1-1.5z"
              stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6, color: '#fff' }}>
            GET IN<br />TOUCH
          </span>
        </Link>
      </div>

      {/* ── Mobile: bottom horizontal bar ── */}
      <div className="side-mobile">
        <button onClick={onEnquire}
          style={{ ...btnBase, flex: 1, flexDirection: 'row', gap: '10px', padding: '15px 12px' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gold)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold-dark)'}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.2"/>
            <path d="M14 8v9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 13.5l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 20h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>
            Download Brochure
          </span>
        </button>

        <Link href="tel:+917827178271"
          style={{ ...btnBase, flex: 1, flexDirection: 'row', gap: '10px', padding: '15px 12px' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gold)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold-dark)'}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.2"/>
            <path d="M10 9.5h2l1 2.5-1.5 1c.8 1.6 2 2.7 3.5 3.5l1-1.5 2.5 1v2c0 .8-.7 1.5-1.5 1.5C12.4 19 9 15.6 9 11c0-.8.7-1.5 1-1.5z"
              stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>
            Get In Touch
          </span>
        </Link>
      </div>

      <style>{`
        /* Desktop: fixed right-side vertical */
        .side-desktop {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 900;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        /* Mobile bottom bar: hidden on desktop */
        .side-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .side-desktop { display: none; }
          .side-mobile {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            gap: 1px;
            box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
          }
        }
      `}</style>
    </>
  )
}
