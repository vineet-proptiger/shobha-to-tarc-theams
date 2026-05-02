'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../../../lib/config'
import { getGeo, buildTrackingFields } from '../../../lib/formMeta'

const GOLD = 'var(--color-gold)'
const F_SANS = 'var(--font-sans), Montserrat, sans-serif'

const PREVIEW_TEXT = `Sobha Crescent in Sector 63A, Gurgaon sets a new benchmark of refined luxury living along the prestigious Golf Course Extension Road, thoughtfully spread across a sprawling 12-acre estate. Among the most anticipated new launches in Gurgaon, this development is designed as a rare low-density residential enclave featuring 4 towers with limited inventory.`
const MORE_TEXT = ` A 42-storey landmark living experience, it is an iconic high-rise address where every residence is a 100% corner home planned to maximize natural light, cross ventilation, and uninterrupted views of the majestic Aravali Range. Offering thoughtfully crafted luxury 3 & 4 BHK apartments, each home redefines what it means to live luxuriously in Gurgaon.`

const inputStyle = {
  width: '100%', padding: '11px 14px', border: '1.5px solid #e5e7eb',
  borderRadius: '8px', outline: 'none', fontSize: '14px', color: '#374151',
  background: '#ffffff', fontFamily: F_SANS, transition: 'border-color 0.25s, box-shadow 0.25s',
}

const EarlyForm = () => {
  const [form, setForm] = useState({ fullname: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [geoAddress, setGeoAddress] = useState(null)
  const [focused, setFocused] = useState('')

  useEffect(() => {
    getGeo().then(d => {
      if (!d) return
      setIpAddress(d.ip || '')
      setGeoAddress({ city: d.city, region: d.region, postal_code: d.postal_code, country: d.country })
    })
  }, [])

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (form.phone.replace(/\D/g, '').length < 10) { setError('Enter valid 10-digit number'); return }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields(ipAddress, geoAddress)
    const payload = new FormData()
    payload.append('fullname', form.fullname)
    payload.append('email', form.email)
    payload.append('phone', form.phone)
    payload.append('projectId', PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name', 'Overview Form')
    payload.append('sheet_name', SHEET_NAME)
    payload.append('secret', SECRET_KEY)
    payload.append('city', CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) setSuccess(true)
      else setError(data.msg || 'Something went wrong.')
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  if (success) return (
    <div style={{ textAlign: 'center', padding: '32px 0' }}>
      <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
        <svg width="26" height="26" fill="none" stroke={GOLD} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p style={{ fontWeight: '700', fontSize: '18px', color: '#111827', fontFamily: F_SANS }}>Thank You!</p>
      <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '6px', fontFamily: F_SANS }}>Our team will contact you shortly.</p>
    </div>
  )

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
      {[
        { name: 'fullname', label: 'Full Name', placeholder: 'Enter your full name', required: true },
        { name: 'email', label: 'Email Address', placeholder: 'Email Id (optional)', required: false },
        { name: 'phone', label: 'Mobile Number', placeholder: '10-digit mobile number', required: true, maxLength: 10 },
      ].map(field => (
        <div key={field.name}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280', fontFamily: F_SANS, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px' }}>
            {field.label} {field.required && <span style={{ color: GOLD }}>*</span>}
          </label>
          <input name={field.name} required={field.required} value={form[field.name]} onChange={handle}
            placeholder={field.placeholder} maxLength={field.maxLength}
            onFocus={() => setFocused(field.name)} onBlur={() => setFocused('')}
            style={{ ...inputStyle, borderColor: focused === field.name ? GOLD : '#e5e7eb', boxShadow: focused === field.name ? '0 0 0 3px var(--color-shadow-inner)' : 'none' }} />
        </div>
      ))}
      {error && <p style={{ color: GOLD, fontSize: '12px', fontFamily: F_SANS, marginTop: '-6px' }}>{error}</p>}
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: 'auto' }}>
        <input type="checkbox" required defaultChecked style={{ accentColor: GOLD, marginTop: '3px', flexShrink: 0, width: '14px', height: '14px' }} />
        <span style={{ fontSize: '11px', color: '#9ca3af', fontFamily: F_SANS, lineHeight: 1.6 }}>
          I authorize the developer &amp; its representatives to contact me via Email / SMS / WhatsApp / Call.
        </span>
      </label>
      <button type="submit" disabled={loading} className="btn-gold" style={{ width: '100%', padding: '13px', fontSize: '13px', letterSpacing: '0.08em' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {loading ? 'Submitting...' : 'Book Now'}
      </button>
    </form>
  )
}

const Overview = () => (
  <section id="overview" className="!pt-1 !pb-4 sm:!py-10" style={{
    background: '#f8f9fa',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
    backgroundSize: '48px 48px', borderBottom: '1px solid #e5e7eb',
  }}>
    <div className="container mx-auto px-4 md:px-8">
      <div style={{ textAlign: 'center', marginBottom: '36px' }} data-aos="fade-up">
        <span style={{ display: 'inline-block', padding: '4px 16px', background: 'var(--color-gold-bg)', borderRadius: '50px', fontSize: '11px', fontWeight: '700', color: GOLD, fontFamily: F_SANS, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--color-gold-light)', marginBottom: '10px' }}>
          Sobha Sector 63A
        </span>
        <h2 style={{ fontFamily: F_SANS, fontWeight: '800', fontSize: '26px', color: '#111827', margin: 0, letterSpacing: '-0.01em' }}>
          Sobha Crescent Project <span style={{ color: GOLD }}>Overview</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <span style={{ display: 'block', width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Image */}
        <div data-aos="fade-right" style={{ display: 'flex' }}>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.14)', border: '3px solid #fff', width: '100%', minHeight: '340px' }}>
            <Image src="/images/about/overview1.webp" alt="Sobha Crescent" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 33vw" priority />
          </div>
        </div>

        {/* Description */}
        <div data-aos="fade-up" style={{ display: 'flex' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px 22px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <p style={{ color: '#374151', fontFamily: F_SANS, lineHeight: 1.85, fontSize: '14px', margin: 0, textAlign: 'justify' }}>
              {PREVIEW_TEXT}{MORE_TEXT}
            </p>
          </div>
        </div>

        {/* Form */}
        <div data-aos="fade-left" style={{ display: 'flex' }}>
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px var(--color-shadow-card)', border: '1px solid var(--color-gold-light)', overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))', padding: '18px 20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))' }} />
              <h3 style={{ fontFamily: F_SANS, fontWeight: '800', fontSize: '16px', color: '#fff', margin: '0 0 4px', letterSpacing: '-0.01em' }}>Get Early Booking Advantages</h3>
              <p style={{ fontFamily: F_SANS, fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Limited Inventory Available — Hurry Now!</p>
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <EarlyForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Overview
