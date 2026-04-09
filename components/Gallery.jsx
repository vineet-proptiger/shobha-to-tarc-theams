'use client'
import Image from 'next/image'
import { useState } from 'react'
import { galleryImages } from '../lib/images'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const images = galleryImages

  const prev = () => setLightbox((lightbox - 1 + images.length) % images.length)
  const next = () => setLightbox((lightbox + 1) % images.length)

  return (
    <section id="gallery" className="bg-cream-dark py-[60px] md:py-[80px]">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-2.5 mb-10 px-4">
        <span className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-text-mid">
          OUR PROJECT IMAGES
        </span>
        <h2 className="font-serif italic text-gold tracking-[0.5px]"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
          Once In A Lifetime Experience
        </h2>
      </div>

      {/* Grid */}
      <div className="gallery-grid px-2 sm:px-4 md:px-[30px]">
        {images.map((img, i) => (
          <div key={i} onClick={() => setLightbox(i)}
            className={`gallery-item relative overflow-hidden rounded-[4px] sm:rounded-[6px] cursor-pointer group ${i === 0 ? 'gallery-item-featured' : ''
              }`}>
            <Image src={img.src} alt={img.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end z-10"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)', padding: '20px 16px 12px' }}>
              <span className="font-sans text-[11px] font-semibold tracking-[0.5px] text-white uppercase">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)', padding: '20px' }}
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-[1000px] w-full h-[80vh]" onClick={e => e.stopPropagation()}>
            <Image src={images[lightbox].src} alt={images[lightbox].caption} fill className="object-contain" />
            <p className="text-center text-white/70 font-sans text-[13px] mt-3 tracking-[1px] uppercase">
              {images[lightbox].caption}
            </p>
            {/* Prev / Next — inside on mobile, outside on desktop */}
            <button onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-2xl rounded-sm cursor-pointer hover:bg-gold transition-colors"
              style={{ left: '6px', background: 'rgba(175,117,28,0.8)', width: '44px', height: '44px', border: 'none' }}>‹</button>
            <button onClick={next}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-2xl rounded-sm cursor-pointer hover:bg-gold transition-colors"
              style={{ right: '6px', background: 'rgba(175,117,28,0.8)', width: '44px', height: '44px', border: 'none' }}>›</button>
            <button onClick={() => setLightbox(null)}
              className="absolute flex items-center justify-center bg-gold hover:bg-gold-light text-white cursor-pointer transition-colors"
              style={{ top: '-44px', right: 0, width: '36px', height: '36px', border: 'none', fontSize: '14px' }}>✕</button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          grid-auto-rows: 260px;
        }
        .gallery-item { height: 100%; }
        .gallery-item-featured {
          grid-column: span 2;
          height: 380px;
        }
        @media (max-width: 768px) {
          .gallery-grid { 
            grid-template-columns: repeat(2, 1fr); 
            grid-auto-rows: 200px;
          }
          .gallery-item { height: 100%; }
          .gallery-item-featured { grid-column: span 1; height: 100%; }
        }
        @media (max-width: 500px) {
          .gallery-grid { 
            grid-template-columns: 1fr; 
            gap: 4px; 
            grid-auto-rows: 220px;
          }
          .gallery-item { height: 100%; border-radius: 0; }
          .gallery-item-featured { grid-column: span 1; height: 100%; }
        }
      `}</style>
    </section>
  )
}
