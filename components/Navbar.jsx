'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { logoImage } from '../lib/images'

const navLinks = [
  { name: 'Overview',   href: '#about' },
  { name: 'Highlights', href: '#directions' },
  { name: 'Amenities',  href: '#amenities' },
  { name: 'Floor Plan', href: '#masterplan' },
  { name: 'Location',   href: '#location' },
  { name: 'Gallery',    href: '#gallery' },
  { name: 'Contact',    href: '#developer' },
]

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
    >
      {/* Gold accent line at top */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, var(--color-gold), var(--color-gold-dark), var(--color-gold))` }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[66px]">

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <div className="relative h-10 w-32 lg:h-12 lg:w-44 transition-all duration-300">
              <Image
                src={logoImage}
                alt="Sobha Realty"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[12px] font-semibold tracking-wide text-gray-700 hover:text-gold transition-colors relative group"
                style={{ fontFamily: 'var(--font-sans), sans-serif', letterSpacing: '0.5px' }}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'var(--color-gold)' }}
                />
              </a>
            ))}
          </div>

          {/* Enquire Now Button — Desktop */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden lg:flex items-center gap-2 text-[12px] font-bold px-5 py-2.5 rounded-full transition-all hover:opacity-90 animate-pulseGlow"
            style={{
              background: 'var(--color-gold)',
              color: '#fff',
              fontFamily: 'var(--font-sans), sans-serif',
              letterSpacing: '1px',
            }}
          >
            Enquire Now
            <span className="text-base leading-none">→</span>
          </button>

          {/* Mobile: Call + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:+919718344024"
              className="text-[11px] font-bold px-3 py-2 rounded text-white"
              style={{
                background: 'var(--color-gold)',
                fontFamily: 'var(--font-sans), sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              Call Us
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 p-1"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-6 py-3.5 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-50 hover:text-gold transition-colors"
              style={{ fontFamily: 'var(--font-sans), sans-serif', letterSpacing: '0.5px' }}
            >
              {link.name}
            </a>
          ))}
          <div className="p-4">
            <button
              onClick={() => { setIsOpen(true); setMobileOpen(false) }}
              className="w-full py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
              style={{
                background: 'var(--color-gold)',
                fontFamily: 'var(--font-sans), sans-serif',
                letterSpacing: '1.5px',
              }}
            >
              ENQUIRE NOW →
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
