'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import LeadForm from './LeadForm'
import { enquireImages } from '../lib/images'

const EnquireModal = ({ isOpen, setIsOpen }) => {
  const autoTriggered = useRef(false)

  // Auto-open after 15 seconds (only once)
  useEffect(() => {
    if (autoTriggered.current) return
    const timer = setTimeout(() => {
      if (!autoTriggered.current) {
        autoTriggered.current = true
        setIsOpen(true)
      }
    }, 15000)
    return () => clearTimeout(timer)
  }, [setIsOpen])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsOpen(false)}
    >
      {/* Modal box */}
      <div
        className="relative bg-white w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row"
        style={{
          maxWidth: '960px',
          width: '95vw',
          maxHeight: '95vh',
          animation: 'slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT — Image panel (hidden on mobile) */}
        <div className="hidden sm:block sm:w-[45%] shrink-0 relative min-h-[480px]">
          <Image
            src={enquireImages.bg}
            alt="Sobha Realty"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 45vw"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.1) 60%)' }}
          />
          {/* Caption */}
          <div
            className="absolute bottom-0 left-0 right-0 p-5 text-white z-10"
          >
            <p
              className="text-[10px] font-semibold tracking-[3px] uppercase opacity-80 mb-0.5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Sobha Realty
            </p>
            <p
              className="font-bold"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400 }}
            >
              Sector 63A, Gurugram
            </p>
          </div>
        </div>

        {/* RIGHT — Form panel */}
        <div className="flex-1 flex flex-col overflow-y-auto">

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 z-10 text-gray-500 hover:text-gray-900 transition-colors bg-white rounded-full w-8 h-8 flex items-center justify-center shadow border border-gray-100"
          >
            <X size={16} />
          </button>

          {/* Mobile top image strip */}
          <div className="sm:hidden w-full h-44 relative shrink-0">
            <Image
              src={enquireImages.bg}
              alt="Sobha Realty"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.6) 0%, transparent 60%)' }}
            />
            <div className="absolute bottom-3 left-4 text-white z-10">
              <p className="text-[9px] font-semibold tracking-[2.5px] uppercase opacity-80"
                style={{ fontFamily: 'var(--font-sans)' }}>Sobha Realty</p>
              <p className="text-sm font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}>Sector 63A, Gurugram</p>
            </div>
          </div>

          {/* Form content */}
          <div className="p-5 sm:p-8 flex flex-col justify-center flex-1">

            {/* Title */}
            <h3
              className="text-lg sm:text-xl font-normal text-gray-900 text-center mb-2 leading-snug"
              style={{ fontFamily: 'var(--font-serif), serif' }}
            >
              We&apos;re Just a Message Away
            </h3>

            {/* Subtitle */}
            <p
              className="text-center text-sm text-gray-500 mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Register Now To Get{' '}
              <span className="blink-price font-bold" style={{ color: 'var(--color-gold-dark)' }}>
                Best Offers
              </span>
            </p>

            {/* Form */}
            <LeadForm formName="Popup Modal" btnText="Submit Details" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquireModal
