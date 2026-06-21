import { useState } from 'react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    plan: 'Plan 01',
    name: 'Landing Page',
    price: '1,999',
    period: 'one-time · delivery 3–5 days',
    popular: false,
    lines: [
      ['Pages', '1–3 pages', null],
      ['Design', 'Custom', null],
      ['Mobile-ready', '✓ Yes', true],
      ['Contact form', '✓ Yes', true],
      ['WhatsApp CTA', '✓ Yes', true],
      ['CMS/Admin', '✗ No', false],
      ['E-commerce', '✗ No', false],
      ['Support', '30 days', null],
    ],
    total: '1,999',
    cta: 'Order This →',
    dark: true,
  },
  {
    plan: 'Plan 02',
    name: 'Business Site',
    price: '4,999',
    period: 'one-time · delivery 5–7 days',
    popular: false,
    lines: [
      ['Pages', '5–8 pages', null],
      ['Design', 'Custom', null],
      ['Mobile-ready', '✓ Yes', true],
      ['Contact form', '✓ Yes', true],
      ['Google Maps', '✓ Yes', true],
      ['Gallery section', '✓ Yes', true],
      ['E-commerce', '✗ No', false],
      ['Support', '30 days', null],
    ],
    total: '4,999',
    cta: 'Order This →',
    dark: true,
  },
  {
    plan: 'Plan 03',
    name: 'E-commerce Store',
    price: '9,999',
    period: 'one-time · delivery 10–14 days',
    popular: true,
    lines: [
      ['Pages', 'Full store', null],
      ['Product catalog', '✓ Yes', true],
      ['Cart & checkout', '✓ Yes', true],
      ['Razorpay/UPI', '✓ Yes', true],
      ['Admin dashboard', '✓ Yes', true],
      ['Order emails', '✓ Yes', true],
      ['Search & filter', '✓ Yes', true],
      ['Support', '30 days', null],
    ],
    total: '9,999',
    cta: 'Order This →',
    dark: false,
  },
  {
    plan: 'Plan 04',
    name: 'Custom App',
    price: '19,999',
    period: 'one-time · delivery 3–4 weeks',
    popular: false,
    lines: [
      ['User auth', '✓ Yes', true],
      ['Admin dashboard', '✓ Yes', true],
      ['REST API', '✓ Yes', true],
      ['Database design', '✓ Yes', true],
      ['Payment gateway', '✓ Optional', true],
      ['Custom features', '✓ Yes', true],
      ['Source code', '✓ Yours', true],
      ['Support', '30 days', null],
    ],
    total: '19,999',
    totalLabel: 'Starting',
    cta: 'Get Custom Quote →',
    dark: true,
    note: 'Price varies by requirements',
  },
];

const COMPARE_ROWS = [
  ['Custom design', true, true, true, true],
  ['Mobile responsive', true, true, true, true],
  ['Contact form', true, true, true, true],
  ['WhatsApp button', true, true, true, true],
  ['Multiple pages', false, true, true, true],
  ['Google Maps', false, true, true, true],
  ['Product catalog', false, false, true, true],
  ['Payment gateway', false, false, true, true],
  ['Admin dashboard', false, false, true, true],
  ['User accounts', false, false, false, true],
  ['Custom API', false, false, false, true],
];

const FAQS = [
  {
    q: 'Do I need to pay the full amount upfront?',
    a: 'No. I follow a 50/50 model — you pay 50% when we agree on the project, and the remaining 50% only after you see the finished website and approve it. No payment without delivery.',
  },
  {
    q: 'What if I need changes after delivery?',
    a: 'All projects come with 30 days of free support after delivery. This covers bug fixes and minor content changes. For bigger feature additions, I charge a small add-on fee which we agree before starting.',
  },
  {
    q: 'Do you buy the domain and hosting?',
    a: 'You own your domain and hosting accounts. I help you set them up and connect everything — but they stay in your name and you keep full control. For most projects I use Vercel (free) and Render for hosting.',
  },
  {
    q: "Can you build something that's not in these packages?",
    a: "Yes. The packages cover most common needs but every business is different. Fill out the contact form with your idea and I'll put together a custom quote for you — no obligation.",
  },
  {
    q: 'How do I provide content — text, images, logo?',
    a: "You share your content via WhatsApp or Google Drive. I'll give you a simple checklist of exactly what to send. If you don't have professional photos, I can use high-quality free stock images for now.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div id="page-pricing">
      <div className="pricing-hero section">
        <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Transparent pricing</span>
        <h2 className="section-title">Fixed prices. No surprises.</h2>
        <p className="section-sub">Every project has a clear price upfront. Pay 50% to start, 50% on delivery.</p>
      </div>

      <section className="section">
        <div className="pricing-grid">
          {PLANS.map((p) => (
            <div className={`receipt-card ${p.popular ? 'popular' : ''}`} key={p.plan}>
              {p.popular && <div className="popular-badge">Most Popular</div>}
              <div className="receipt-top" style={p.popular ? { background: 'var(--blue)' } : undefined}>
                <div className="receipt-plan">{p.plan}</div>
                <div className="receipt-name">{p.name}</div>
                <div className="receipt-price"><sup>₹</sup>{p.price}</div>
                <div className="receipt-period">{p.period}</div>
              </div>
              <div className="receipt-body">
                {p.lines.map(([label, val, ok]) => (
                  <div className="receipt-line" key={label}>
                    <span className="receipt-item">{label}</span>
                    <span className={`receipt-val ${ok === true ? 'yes' : ok === false ? 'no' : ''}`}>{val}</span>
                  </div>
                ))}
                <div className="receipt-divider"></div>
                <div className="receipt-total-row">
                  <span className="receipt-total-lbl">{p.totalLabel || 'Total'}</span>
                  <span className="receipt-total-val">₹{p.total}</span>
                </div>
                <Link className={`receipt-cta ${p.dark ? 'dark' : ''}`} to="/contact">{p.cta}</Link>
                <div className="receipt-note">{p.note || '50% upfront · 50% on delivery'}</div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div style={{ marginTop: '72px' }}>
          <div className="section-header text-center">
            <span className="section-eyebrow">Compare</span>
            <h2 className="section-title">Full feature comparison</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Landing ₹1,999</th>
                  <th>Business ₹4,999</th>
                  <th>E-commerce ₹9,999</th>
                  <th>Custom App ₹19,999+</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([label, ...cols]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {cols.map((c, i) => (
                      <td key={i}>
                        <span className={c ? 'check' : 'cross'}>{c ? '✓' : '✗'}</span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td>Delivery time</td>
                  <td>3–5 days</td>
                  <td>5–7 days</td>
                  <td>10–14 days</td>
                  <td>3–4 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '72px' }}>
          <div className="section-header text-center">
            <span className="section-eyebrow">FAQs</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="faq-section">
            {FAQS.map((f, idx) => (
              <div
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                key={f.q}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-q">{f.q} <span className="faq-icon">+</span></div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
