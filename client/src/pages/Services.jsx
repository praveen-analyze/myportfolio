import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: '🎯',
    name: 'Landing Page',
    featured: false,
    tagline: 'Best for: campaigns, freelancers, new businesses',
    desc: 'A focused, single-page website designed to convert visitors into leads or customers. Great for launching a product, service, or personal brand fast.',
    features: [
      'Custom design — no templates',
      'Mobile-first, fast loading',
      'WhatsApp / call CTA button',
      'Contact form with email alerts',
      'Deployed on your domain',
      '30-day free support',
    ],
    price: '1,999',
  },
  {
    icon: '🏢',
    name: 'Business Website',
    featured: true,
    tagline: 'Best for: companies, clinics, schools, restaurants',
    desc: 'Multi-page professional website with all the sections your business needs — Home, About, Services, Gallery, and Contact. Most popular choice for established businesses.',
    features: [
      '5–8 pages, fully custom design',
      'Google Maps integration',
      'Image gallery / portfolio section',
      'Contact form + WhatsApp button',
      'SEO-ready structure',
      '30-day free support',
    ],
    price: '4,999',
  },
  {
    icon: '🛒',
    name: 'E-commerce Store',
    featured: false,
    tagline: 'Best for: product sellers, boutiques, shops',
    desc: 'A complete online store where customers can browse products, add to cart, and pay online using Razorpay or UPI. You manage products through a simple admin panel.',
    features: [
      'Product catalog with search & filter',
      'Razorpay / UPI payment gateway',
      'Cart & checkout flow',
      'Order management dashboard',
      'Email order notifications',
      '30-day free support',
    ],
    price: '9,999',
  },
  {
    icon: '⚡',
    name: 'Custom Web App',
    featured: false,
    tagline: 'Best for: SaaS, portals, admin systems',
    desc: "Full-stack MERN application with user accounts, dashboards, and real-time features. If you need something beyond a website — a booking system, a portal, or a SaaS tool — this is it.",
    features: [
      'User authentication (login/signup)',
      'Admin dashboard',
      'MongoDB database design',
      'REST API with Node.js',
      'Hosted on Vercel + Render',
      '30-day free support',
    ],
    price: '19,999',
  },
];

const ADDONS = [
  { icon: '🔍', name: 'Basic SEO', price: '+₹999', desc: 'Meta tags, sitemap, Google indexing' },
  { icon: '📊', name: 'Analytics Setup', price: '+₹499', desc: 'Google Analytics 4 + Search Console' },
  { icon: '🔧', name: 'Monthly Maintenance', price: '₹499/mo', desc: 'Updates, backups & uptime monitoring' },
];

export default function Services() {
  return (
    <div id="page-services">
      <div className="services-hero section">
        <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>What I offer</span>
        <h2 className="section-title">Services for growing businesses</h2>
        <p className="section-sub">Every package is built for a real business need — not just a pretty website.</p>
      </div>

      <section className="section">
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className={`svc-card ${s.featured ? 'featured' : ''}`} key={s.name}>
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-name">{s.name}</div>
              <div className="svc-tagline">{s.tagline}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-features">
                {s.features.map((f) => (
                  <div className="svc-feature" key={f}>{f}</div>
                ))}
              </div>
              <div className="svc-price-row">
                <span className="svc-from">Starting from</span>
                <span className="svc-amount">₹{s.price}</span>
                <span className="svc-note">one-time</span>
              </div>
              <Link className={`svc-btn ${s.featured ? '' : 'outline'}`} to="/contact">Get Quote →</Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '80px 5%' }}>
        <div className="section-header text-center">
          <span className="section-eyebrow">Add-ons</span>
          <h2 className="section-title">Extra services</h2>
          <p className="section-sub">Add these to any package for a complete solution.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          {ADDONS.map((a) => (
            <div key={a.name} style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--ivory)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{a.icon}</div>
              <div style={{ fontFamily: 'var(--font-d)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)', marginBottom: '4px' }}>{a.name}</div>
              <div style={{ fontFamily: 'var(--font-m)', fontSize: '0.75rem', color: 'var(--blue)', marginBottom: '6px' }}>{a.price}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--slate)' }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
