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

          {/* Call Now - Desktop */}
          <a href="tel:9718344024"
            className="hidden lg:flex btn-gold"
            style={{ borderRadius: '50px', textDecoration: 'none', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            9718344024
          </a>

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
            <a href="tel:9718344024"
              className="w-full btn-gold"
              style={{ borderRadius: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              9718344024
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
