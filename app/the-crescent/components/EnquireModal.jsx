'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import LeadForm from './LeadForm'

const F_SANS = 'var(--font-sans), Montserrat, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const EnquireModal = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsOpen(false)}>

      <div className="relative bg-white w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row"
        style={{ maxWidth: '960px', width: '95vw', maxHeight: '95vh', animation: 'slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards' }}
        onClick={(e) => e.stopPropagation()}>

        {/* LEFT — Image */}
        <div className="hidden sm:block sm:w-[45%] shrink-0 relative min-h-[480px]">
          <Image src="/images/hero/banner.webp" alt="Sobha Crescent" fill className="object-cover" style={{ objectPosition: '30% center' }} sizes="(max-width: 768px) 0vw, 45vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,37,64,0.85) 0%, rgba(14,37,64,0.1) 60%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
            <p className="text-[10px] font-semibold tracking-[3px] uppercase opacity-80 mb-1" style={{ fontFamily: F_SANS, color: 'var(--color-gold)' }}>Sobha Crescent</p>
            <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: 500, opacity: 0.85 }}>Sector 63A, Golf Course Extension Road, Gurgaon</p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <button onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 z-10 text-gray-500 hover:text-gray-900 transition-colors bg-white rounded-full w-8 h-8 flex items-center justify-center shadow border border-gray-100">
            <X size={16} />
          </button>

          <div className="sm:hidden w-full h-44 relative shrink-0">
            <Image src="/images/hero/banner.webp" alt="Sobha Crescent" fill className="object-cover object-top" sizes="100vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,37,64,0.6) 0%, transparent 60%)' }} />
            <div className="absolute bottom-3 left-4 text-white z-10">
              <p className="text-[9px] uppercase tracking-[2px] opacity-80" style={{ fontFamily: F_SANS }}>Sobha Crescent</p>
              <p className="text-[11px] font-medium opacity-85" style={{ fontFamily: F_JOST }}>Sector 63A, Gurgaon</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
            <div className="text-center mb-6">
              <span style={{ display: 'inline-block', padding: '4px 16px', background: 'var(--color-gold-bg)', borderRadius: '50px', fontSize: '10px', fontWeight: '700', color: 'var(--color-gold)', fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--color-gold-light)', marginBottom: '10px' }}>
                Exclusive Benefits
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug uppercase tracking-tight" style={{ fontFamily: F_JOST }}>
                Book A Free Site Visit
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <span style={{ display: 'block', width: '36px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
              </div>
            </div>
            <p className="text-center text-[13px] text-gray-500 mb-6" style={{ fontFamily: F_SANS }}>
              Register Now To Get <span className="blink-price font-bold" style={{ color: 'var(--color-gold-dark)' }}>Best Offers</span>
            </p>
            <LeadForm formName="Popup Modal" btnText="Submit Details" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquireModal
