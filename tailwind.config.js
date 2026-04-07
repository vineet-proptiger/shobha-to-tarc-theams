/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: 'var(--color-gold)',
          light:   'var(--color-gold-light)',
          bright:  'var(--color-gold-bright)',
          dark:    'var(--color-gold-dark)',
          pale:    'var(--color-gold-pale)',
          bg:      'var(--color-gold-bg)',
        },
        navy:    'var(--color-navy)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          light:   'var(--color-primary-light)',
          dark:    'var(--color-primary-dark)',
        },
        dark: {
          DEFAULT: 'var(--color-dark)',
          mid:     'var(--color-dark-mid)',
        },
        cream: {
          DEFAULT: 'var(--color-cream)',
          dark:    'var(--color-cream-dark)',
        },
        muted:        'var(--color-muted)',
        'text-dark':  'var(--color-text-dark)',
        'text-mid':   'var(--color-text-mid)',
        'text-light': 'var(--color-text-light)',
      },

      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)',  'Montserrat', 'sans-serif'],
        jost:  ['var(--font-sans)',  'Montserrat', 'sans-serif'],
      },

      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.25em',
      },

      // ── Animations (shobha-next pattern) ───────────────────
      keyframes: {
        priceBtn: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blinkPrice: {
          '0%, 49%':   { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        waveMix: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(175,117,28,0.5)' },
          '50%':       { boxShadow: '0 0 0 10px rgba(175,117,28,0)' },
        },
      },
      animation: {
        priceBtn:   'priceBtn 4s ease infinite',
        blinkPrice: 'blinkPrice 0.9s step-end infinite',
        waveMix:    'waveMix 4s ease infinite',
        fadeUp:     'fadeUp 0.7s ease forwards',
        pulseGlow:  'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
