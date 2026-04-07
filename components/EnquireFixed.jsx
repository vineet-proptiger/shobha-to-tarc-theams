'use client'
import { useState, useEffect } from 'react'

export default function EnquireFixed({ onEnquire }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] flex gap-3 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'} sm:hidden`}>
      <button
        onClick={onEnquire}
        className="flex items-center gap-2 bg-gold text-white font-sans text-[11px] font-bold tracking-[2px] uppercase px-5 py-3 shadow-lg hover:bg-gold-light transition-colors"
      >
        💬 Enquire Now
      </button>
      <a
        href="tel:7827178271"
        className="flex items-center gap-2 bg-dark text-white font-sans text-[11px] font-bold tracking-[2px] uppercase px-5 py-3 shadow-lg hover:bg-dark-mid transition-colors"
        style={{ border: '1px solid var(--color-gold-pale)' }}
      >
        📞 Call Us
      </a>
    </div>
  )
}
