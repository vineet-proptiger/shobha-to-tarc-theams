'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { logoImage } from '../lib/images'
import { API_ENDPOINT, PROJECT_ID, PROJECT_NAME, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../lib/config'

let _geoPromise = null
function getGeo() {
  if (!_geoPromise) {
    _geoPromise = fetch('/api/geo')
      .then(r => r.json())
      .catch(() => null)
  }
  return _geoPromise
}

function getParam(name) {
  if (typeof window === 'undefined') return ''
  return new URLSearchParams(window.location.search).get(name) || ''
}

function validatePhone(phone, dialCode, countryCode) {
  if (!phone) return 'Mobile number is required'
  const national = phone.replace(/\D/g, '').slice(dialCode.replace(/\D/g, '').length)
  if (countryCode === 'in') return /^[6-9]\d{9}$/.test(national) ? '' : 'Enter a valid 10-digit Indian mobile number'
  return national.length >= 4 ? '' : 'Enter a valid mobile number'
}

const H = ({ children }) => <span className="text-gold font-medium">{children}</span>

export default function Developer() {
  const [form, setForm] = useState({ name: '', email: '', comments: '', consent: true })
  const [phone, setPhone] = useState('')
  const [phoneInfo, setPhoneInfo] = useState({ dialCode: '91', countryCode: 'in' })
  const [phoneError, setPhoneError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [apiError, setApiError] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [geoAddress, setGeoAddress] = useState({ city: '', region: '', postal_code: '', country: '' })

  useEffect(() => {
    getGeo().then(d => {
      if (!d) return
      setIpAddress(d.ip || '')
      setGeoAddress({ city: d.city, region: d.region, postal_code: d.postal_code, country: d.country })
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault(); setApiError('')
    const err = validatePhone(phone, phoneInfo.dialCode, phoneInfo.countryCode)
    if (err) { setPhoneError(err); return }
    setLoading(true)
    const body = new FormData()
    const fields = {
      fullname: form.name, email: form.email, phone, comments: form.comments,
      projectId: PROJECT_ID, projectName: PROJECT_NAME, city: CITY_DISPLAY, form_name: 'contact_form',
      sheet_name: SHEET_NAME, secret: SECRET_KEY, utm_source: getParam('utm_source'),
      utm_medium: getParam('utm_medium'), utm_campaign: getParam('utm_campaign'), utm_term: getParam('utm_term'),
      utm_content: getParam('utm_content'), campaign_name: getParam('campaign_name'), adgroup_name: getParam('adgroup_name'),
      gclid: getParam('gclid'), gbraid: getParam('gbraid'), wbraid: getParam('wbraid'),
      SourceURL: typeof window !== 'undefined' ? window.location.href : '',
      landing_page: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      device: typeof window !== 'undefined' ? (window.innerWidth < 768 ? 'mobile' : 'desktop') : '',
      ip_address: ipAddress, website: '',
      geo_city: geoAddress.city, geo_region: geoAddress.region,
      geo_postal: geoAddress.postal_code, geo_country: geoAddress.country
    }
    Object.entries(fields).forEach(([k, v]) => body.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body })
      const data = await res.json()
      if (data.status === true) {
        const nameParts = form.name.trim().split(' ')
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'lead_submit_success',
          form_name: 'contact_form',
          user_data: {
            email: form.email.trim() || undefined,
            phone: phone.replace(/\D/g, '').slice(-10),
            first_name: nameParts[0] || '',
            last_name: nameParts.slice(1).join(' ') || '',
            address: geoAddress
          }
        })
        setSubmitted(true)
      } else setApiError(data.msg || 'Submission failed. Please try again.')
    } catch { setApiError('Network error. Please check your connection and try again.') }
    finally { setLoading(false) }
  }

  const inputStyle = { width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(175,117,28,0.35)', padding: '10px 0', fontFamily: "var(--font-sans), sans-serif", fontSize: '13px', color: 'var(--color-text-dark)', outline: 'none' }

  return (
    <section id="developer" className="relative overflow-hidden developer-section">
      {/* Faint bg silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0" style={{ height: '60%', opacity: 0.06 }}>
        {/* Placeholder for faint bg silhouette */}
      </div>

      {/* Top header */}
      <div className="flex flex-col items-center gap-2 mb-4 relative z-10">
        <div className="relative h-12 w-28 opacity-70 grayscale brightness-0">
          <Image src={logoImage} alt="Sobha Realty" fill className="object-contain" />
        </div>
        <span className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-text-mid mt-2">CONTACT US</span>
      </div>

      <h2 className="font-serif italic text-gold text-center mb-8 sm:mb-12 tracking-[0.3px] relative z-10 px-4"
        style={{ fontSize: 'clamp(20px, 2.8vw, 34px)' }}>
        Visit Sobha Sector 63A Today
      </h2>

      {/* Grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto developer-grid">

        {/* Left */}
        <p className="font-sans leading-[2] text-text-dark text-justify"
          style={{ fontSize: '13.5px' }}>
          Sobha Limited is redefining luxury real estate through innovation, craftsmanship and unmatched design.
          With a focus on creating timeless spaces, our exceptional developments blend modern sophistication with
          meticulous attention to detail. 'Sobha Crescent' reflects our progressive mindset, blending India's
          rich cultural heritage with contemporary luxury. This fusion of tradition and modernity creates a unique
          narrative that distinguishes Sobha in the luxury real estate market. Our unique value proposition lies in
          offering bespoke living experiences that stand out in a cluttered market. We combine distinctive
          architectural design, hospitality and an unparalleled lifestyle to make each home a reflection of
          individuality and refinement. With a commitment to providing a better lifestyle, state-of-the-art
          amenities, sustainable and digitally advanced homes in prime locations, Sobha ensures that every
          development is not just a home, but a statement. Built on a legacy of trust and excellence, Sobha
          continues to shape the future of luxury <H>living</H>.
        </p>

        {/* Right form card */}
        <div className="bg-white" style={{ padding: '36px 28px', boxShadow: '0 8px 40px rgba(0,0,0,0.1)' }}>
          <h3 className="font-serif italic text-gold text-center mb-7"
            style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
            Have questions? Get in touch!
          </h3>

          {submitted ? (
            <p className="font-serif italic text-gold text-center py-8 text-[18px]">
              Thank you! We'll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <input type="text" placeholder="Enter Name *" value={form.name} required style={inputStyle}
                onChange={e => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Enter Email (Optional)" value={form.email} style={inputStyle}
                onChange={e => setForm({ ...form, email: e.target.value })} />

              <div className="dev-phone">
                <PhoneInput country="in" value={phone}
                  onChange={(val, data) => { setPhone(val); setPhoneInfo(data); setPhoneError('') }}
                  preferredCountries={['in', 'us', 'gb', 'ae', 'sg', 'au', 'ca', 'nz']}
                  enableSearch searchPlaceholder="Search country..."
                  inputProps={{ placeholder: 'Enter Number *', required: true }} />
                {phoneError && <span className="font-sans text-[11px] text-red-600 mt-1 block">{phoneError}</span>}
              </div>

              <input type="text" placeholder="Enter Comments (Optional)" value={form.comments} style={inputStyle}
                onChange={e => setForm({ ...form, comments: e.target.value })} />

              <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {apiError && <p className="font-sans text-[12px] text-red-600 bg-red-50 px-3 py-2.5 border-l-[3px] border-red-600">{apiError}</p>}

              <button type="submit" disabled={loading}
                className="w-full font-sans text-[11px] font-bold tracking-[2.5px] uppercase py-[15px] mt-1.5 border-none cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed"
                style={{ background: loading ? 'var(--color-text-light)' : 'var(--color-gold)', color: '#fff' }}
                onMouseEnter={e => !loading && (e.target.style.background = 'var(--color-gold-light)')}
                onMouseLeave={e => !loading && (e.target.style.background = 'var(--color-gold)')}>
                {loading ? 'SUBMITTING...' : 'SUBMIT NOW'}
              </button>

              <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                <input type="checkbox" checked={form.consent} style={{ marginTop: '3px', flexShrink: 0, accentColor: 'var(--color-gold)' }}
                  onChange={e => setForm({ ...form, consent: e.target.checked })} />
                <span className="font-sans text-[10px] leading-[1.6] text-text-light">
                  I authorize Sobha Realty &amp; its representatives to contact me with updates and notifications
                  via Email/ SMS/ WhatsApp/ Call. This will override DND/ NDNC settings.
                </span>
              </label>
            </form>
          )}
        </div>
      </div>

      {/* Dev phone input styles */}
      <style>{`
        .developer-section {
          background: var(--color-cream-dark);
          padding: 70px 60px 80px;
        }
        .developer-grid {
          display: grid;
          grid-template-columns: 55% 42%;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .developer-section { padding: 50px 30px 60px; }
          .developer-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 500px) {
          .developer-section { padding: 40px 16px 50px; }
        }
        .dev-phone .react-tel-input .form-control {
          background: transparent !important; border: none !important;
          border-bottom: 1px solid rgba(175,117,28,0.35) !important;
          border-radius: 0 !important; width: 100% !important; height: auto !important;
          padding: 10px 0 10px 54px !important; font-size: 13px !important;
          color: var(--color-text-dark) !important; font-family: var(--font-sans), sans-serif !important;
          box-shadow: none !important;
        }
        .dev-phone .react-tel-input .flag-dropdown {
          background: transparent !important; border: none !important;
          border-bottom: 1px solid rgba(175,117,28,0.35) !important; border-radius: 0 !important;
        }
        .dev-phone .react-tel-input .selected-flag { background: transparent !important; padding-left: 0 !important; }
        .dev-phone .react-tel-input .form-control:focus { border-bottom-color: var(--color-gold) !important; box-shadow: none !important; }
        .dev-phone .react-tel-input .form-control::placeholder { color: var(--color-text-light) !important; font-size: 12px !important; }
      `}</style>
    </section>
  )
}
