'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const galleryImages = [
  { src: '/images/gallery/gallery1.webp', alt: 'Sobha Crescent' },
  { src: '/images/gallery/gallery2.webp', alt: 'Sobha Crescent' },
  { src: '/images/gallery/gallery3.webp', alt: 'Sobha Crescent' },
  { src: '/images/gallery/gallery4.webp', alt: 'Sobha Crescent' },
  { src: '/images/gallery/gallery5.webp', alt: 'Sobha Crescent' },
  { src: '/images/gallery/gallery6.webp', alt: 'Sobha Crescent' },
]

const Gallery = ({ setIsOpen }) => {
  const [lightbox, setLightbox] = useState(null)
  const [hovered, setHovered] = useState(null)

  return (
    <section id="gallery" style={{ padding: '56px 0', background: '#f8f9fa', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '48px 48px', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{ display: 'inline-block', padding: '4px 16px', background: 'var(--color-gold-bg)', borderRadius: '50px', fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)', fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--color-gold-light)', marginBottom: '10px' }}>Visual Tour</span>
          <h2 style={{ fontFamily: F_JOST, fontWeight: '800', fontSize: '26px', color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
            A Life That <span style={{ color: 'var(--color-gold)' }}>Awaits For You</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} onClick={() => setLightbox(idx)} onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)}
              data-aos="zoom-in" data-aos-delay={idx * 40}
              style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: hovered === idx ? '0 12px 32px var(--color-shadow-inner)' : '0 2px 10px rgba(0,0,0,0.08)', transform: hovered === idx ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)', transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)', border: hovered === idx ? '2px solid var(--color-gold)' : '2px solid transparent' }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" style={{ transition: 'transform 0.5s ease', transform: hovered === idx ? 'scale(1.08)' : 'scale(1)' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(175,117,28,0.75) 0%, transparent 55%)', opacity: hovered === idx ? 1 : 0, transition: 'opacity 0.32s ease', display: 'flex', alignItems: 'flex-end', padding: '14px 12px' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontFamily: F_JOST, fontWeight: '600' }}>View</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }} data-aos="fade-up">
          <button onClick={() => setIsOpen(true)} className="btn-gold" style={{ padding: '13px 44px', letterSpacing: '0.08em' }}>Schedule a Site Visit</button>
        </div>
      </div>

      {lightbox !== null && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-gold)', opacity: 0.85, border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '80vh' }} onClick={e => e.stopPropagation()}>
            <Image src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} fill className="object-contain" sizes="100vw" />
            <div style={{ position: 'absolute', bottom: '-36px', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: F_JOST, fontSize: '12px', letterSpacing: '0.1em' }}>
              {lightbox + 1} / {galleryImages.length}
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length) }} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length) }} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>
      )}
    </section>
  )
}

export default Gallery
