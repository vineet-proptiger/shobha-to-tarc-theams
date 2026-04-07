'use client'
// ═══════════════════════════════════════════════════════════════
//  LOGOS — TARC ISHVA (Next.js)
//
//  Custom logo lagana ho to:
//    public/images/logo/TARC-logo.png  → TarcLogo mein use hoga
//    public/images/logo/ishva-logo.png → IshvaLogo mein use hoga
//    public/images/logo/flame-logo.png → FlameLogo mein use hoga
//
//  File nahi mili → default SVG design use hoga
// ═══════════════════════════════════════════════════════════════

import Image from 'next/image'

export function TarcLogo({ size = 44, dark = false, color }) {
  return (
    <Image
      src="/images/logo/TARC-l.png"
      alt="TARC Logo"
      width={100}
      height={size}
      style={{ display: 'block', height: `${size}px`, width: 'auto', maxWidth: 'none' }}
    />
  )
}

export function IshvaLogo({ size = 44, color = 'var(--color-gold-light)', hero = false }) {
  return (
    <Image
      src="/images/logo/logo-symbol-img.png"
      alt="Ishva Logo"
      width={size}
      height={size}
      className="object-contain"
      style={{ display: 'block', maxWidth: 'none' }}
    />
  )
}

export function FlameLogo({ size = 42 }) {
  return (
    <Image
      src="/images/logo/logo-symbol-img.png"
      alt="TARC"
      width={size}
      height={size}
      className="object-contain"
      style={{ display: 'block', maxWidth: 'none' }}
    />
  )
}
