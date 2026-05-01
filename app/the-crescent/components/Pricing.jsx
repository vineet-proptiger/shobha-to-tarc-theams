import { Check } from 'lucide-react'

const F_SANS = 'var(--font-sans), Montserrat, sans-serif'
const GOLD = 'var(--color-gold)'
const PRIMARY = 'var(--color-primary)'

const units = [
  {
    type: '3 BHK',
    size: '2277 Sq.ft.',
    price: '₹ 5.57 Cr*',
    features: ['100% Corner Homes', 'Attractive Payment Plan', 'Ultra-Luxury Residence'],
    isPopular: true,
  },
  {
    type: '3 BHK + Study',
    size: '2669 Sq.ft.',
    price: 'On Request',
    features: ['100% Corner Homes', 'Attractive Payment Plan', 'Ultra-Luxury Residence'],
    isPopular: false,
  },
  {
    type: '3 BHK + Servant',
    size: '2966 Sq.ft.',
    price: 'On Request',
    features: ['100% Corner Homes', 'Attractive Payment Plan', 'Ultra-Luxury Residence'],
    isPopular: false,
  },
]

const Pricing = ({ setIsOpen }) => (
  <section id="pricing" className="py-10 sm:py-14 px-4 md:px-8 relative overflow-hidden" style={{ background: 'var(--color-bg-muted)' }}>
    <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`, filter: 'blur(40px)' }} />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16" data-aos="fade-up">
        <span style={{ display: 'inline-block', padding: '4px 16px', background: 'var(--color-gold-bg)', borderRadius: '50px', fontSize: '11px', fontWeight: '700', color: GOLD, fontFamily: F_SANS, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--color-gold-light)', marginBottom: '10px' }}>
          Premium Residences
        </span>
        <h2 className="font-bold mb-4" style={{ fontFamily: F_SANS, color: PRIMARY, fontSize: '26px', letterSpacing: '-0.01em' }}>
          Configuration &amp; <span style={{ color: GOLD }}>Price</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ background: GOLD }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {units.map((unit, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}
            className={`group pricing-card relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 ${unit.isPopular ? 'lg:scale-105 z-20' : 'z-10'}`}
            style={{ borderColor: GOLD }}>
            {unit.isPopular && (
              <div className="absolute top-4 right-6 px-3 py-1 rounded-full text-white text-[9px] font-bold tracking-widest uppercase z-30" style={{ background: GOLD }}>
                Most Preferred
              </div>
            )}
            <div className="relative p-7 pb-4 border-b border-gray-50 pt-12">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, transparent 100%)` }} />
              <h3 className="text-xl font-bold mb-1 relative z-10" style={{ fontFamily: F_SANS, color: PRIMARY, letterSpacing: '0.02em' }}>{unit.type}</h3>
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-gray-400 text-[11px] uppercase tracking-wider" style={{ fontFamily: F_SANS }}>Size:</span>
                <p className="text-sm font-semibold" style={{ fontFamily: F_SANS, color: PRIMARY }}>{unit.size}</p>
              </div>
            </div>
            <div className="p-7 pt-6">
              <div className="mb-6">
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium block mb-1" style={{ fontFamily: F_SANS }}>Starting At</span>
                <p className="text-lg sm:text-2xl font-bold" style={{ fontFamily: F_SANS, color: GOLD }}>{unit.price}</p>
              </div>
              <div className="space-y-3 mb-8">
                {unit.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-amber-50">
                      <Check size={12} strokeWidth={3} style={{ color: GOLD }} />
                    </div>
                    <span className="text-gray-700 font-medium text-[14px]" style={{ fontFamily: F_SANS }}>{feature}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsOpen(true)} className="btn-gold w-full py-3 text-sm tracking-widest uppercase transition-all duration-300" style={{ borderRadius: '1rem' }}>
                Get Cost Sheet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing
