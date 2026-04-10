'use client'

const plans = [
  {
    type: '3 BHK',
    size: '2277.45 Sq.ft.',
    price: '5.4 Cr*',
    priceLabel: 'Price Start From',
    btnText: 'Get Cost Sheet',
    showRupee: false,
  },
  {
    type: '4 BHK',
    size: '2669.47 Sq.ft.',
    price: 'Ask For Price',
    priceLabel: 'Price Start From',
    btnText: 'Ask For Price',
    showRupee: false,
  },
  {
    type: '4 BHK + Utility Room',
    size: '2966.67 Sq.ft.',
    price: 'Ask For Price',
    priceLabel: 'Price Start From',
    btnText: 'Ask For Price',
    showRupee: false,
  },
]

export default function PriceCard({ onEnquire }) {
  return (
    <section id="pricing" className="bg-[#f4f4f4] py-14 px-4">
      {/* Section heading */}
      <h2
        className="text-center font-bold text-[#1a1a1a] mb-10"
        style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(20px, 3vw, 28px)' }}
      >
        Configuration &amp; Price
      </h2>

      {/* Cards grid */}
      <div className="price-cards-grid">
        {plans.map((plan, i) => (
          <div key={i} className="price-card">
            {/* Top section */}
            <div className="price-card-top">
              <p className="price-card-label">APARTMENTS</p>
              <div className="price-card-divider" />
              <div className="price-card-dashed" />

              <div className="price-card-meta">
                <div>
                  <span className="meta-sub">Type</span>
                  <span className="meta-val">{plan.type}</span>
                </div>
                <div>
                  <span className="meta-sub">Size</span>
                  <span className="meta-val">{plan.size}</span>
                </div>
              </div>
            </div>

            {/* Gold bottom section */}
            <div className="price-card-bottom">
              <p className="price-start-label">{plan.priceLabel}</p>
              <p className="price-value">
                {plan.showRupee && <span>&#8377; </span>}
                {plan.price}
              </p>

              {/* Triangle notch */}
              <div className="price-notch" />

              <button
                onClick={onEnquire}
                className="price-btn"
              >
                {plan.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .price-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 960px;
          margin: 0 auto;
        }

        .price-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
        }

        .price-card-top {
          padding: 28px 24px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .price-card-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #1a1a1a;
          text-align: center;
        }

        .price-card-divider {
          width: 40px;
          height: 2px;
          background: #1a1a1a;
        }

        .price-card-dashed {
          width: 100%;
          border-top: 1px dashed #ccc;
          margin: 4px 0 8px;
        }

        .price-card-meta {
          display: flex;
          justify-content: space-around;
          width: 100%;
          gap: 12px;
        }

        .price-card-meta > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .meta-sub {
          font-family: var(--font-sans);
          font-size: 11px;
          color: #888;
          letter-spacing: 0.5px;
        }

        .meta-val {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .price-card-bottom {
          background: #c9a84c;
          padding: 18px 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .price-start-label {
          font-family: var(--font-sans);
          font-size: 11px;
          color: #fff;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .price-value {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }

        /* Triangle notch pointing down */
        .price-notch {
          width: 0;
          height: 0;
          border-left: 22px solid transparent;
          border-right: 22px solid transparent;
          border-top: 14px solid #c9a84c;
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }

        .price-btn {
          background: #c9a84c;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.5);
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 22px;
          margin-top: 24px;
          margin-bottom: 20px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          border-radius: 2px;
        }

        .price-btn:hover {
          background: #fff;
          color: #c9a84c;
          border-color: #c9a84c;
        }

        @media (max-width: 800px) {
          .price-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 520px) {
          .price-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 360px;
          }
        }
      `}} />
    </section>
  )
}
