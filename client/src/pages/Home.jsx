import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="page-home">
      {/* HERO */}
      <section id="home-hero">
        <div className="hero-grid">
          <div>
            <div className="hero-badge"><span className="dot"></span>Open for new projects</div>
            <h1 className="hero-h1">Your website,<br /><span className="accent">your first</span><br />impression.</h1>
            <p className="hero-p">Professional websites built for Indian businesses, startups &amp; freelancers. Fast delivery. Fixed pricing. No hidden costs.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/contact">Start My Project →</Link>
              <Link
                className="btn btn-outline btn-lg"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}
                to="/projects"
              >
                View Work
              </Link>
            </div>
            <div className="hero-proof">
              <div className="proof-item">
                <div>
                  <div className="proof-num">3+</div>
                  <div className="proof-lbl">Projects<br />Delivered</div>
                </div>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div className="proof-item">
                <div>
                  <div className="proof-num">7 days</div>
                  <div className="proof-lbl">Avg. delivery<br />time</div>
                </div>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div className="proof-item">
                <div>
                  <div className="proof-num">₹1,999</div>
                  <div className="proof-lbl">Starting<br />price</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="hero-card">
              <div className="hero-card-title">Quick Price Estimate</div>
              <div className="price-preview-row">
                <div className="pprow-left">
                  <div className="pprow-name">Landing Page</div>
                  <div className="pprow-desc">1–3 pages · fast</div>
                </div>
                <div className="pprow-price">from ₹1,999</div>
              </div>
              <div className="price-preview-row">
                <div className="pprow-left">
                  <div className="pprow-name">Business Website</div>
                  <div className="pprow-desc">5–8 pages · CMS</div>
                </div>
                <div className="pprow-price">from ₹4,999</div>
              </div>
              <div className="price-preview-row">
                <div className="pprow-left">
                  <div className="pprow-name">E-commerce Store</div>
                  <div className="pprow-desc">Full shop · payments</div>
                </div>
                <div className="pprow-price hot">from ₹9,999</div>
              </div>
              <div className="price-preview-row">
                <div className="pprow-left">
                  <div className="pprow-name">Custom MERN App</div>
                  <div className="pprow-desc">Full-stack · auth · DB</div>
                </div>
                <div className="pprow-price">from ₹19,999</div>
              </div>
              <Link className="hero-card-cta" to="/pricing">See Full Pricing →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section id="services-strip">
        <div className="strip-grid">
          <div className="strip-item">
            <div className="strip-icon">🎯</div>
            <div className="strip-name">Landing Pages</div>
            <div className="strip-price">from ₹1,999</div>
            <div className="strip-desc">Single-page websites that convert visitors into leads. Perfect for campaigns.</div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">🏢</div>
            <div className="strip-name">Business Sites</div>
            <div className="strip-price">from ₹4,999</div>
            <div className="strip-desc">Multi-page websites for companies, clinics, restaurants &amp; professionals.</div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">🛒</div>
            <div className="strip-name">E-commerce</div>
            <div className="strip-price">from ₹9,999</div>
            <div className="strip-desc">Full online stores with product catalog, cart, and Razorpay payments.</div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">⚡</div>
            <div className="strip-name">Custom Apps</div>
            <div className="strip-price">from ₹19,999</div>
            <div className="strip-desc">MERN stack web apps with user auth, dashboards, and real-time features.</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="section-header text-center">
          <span className="section-eyebrow">The Process</span>
          <h2 className="section-title">How we build your website</h2>
          <p className="section-sub">Simple 4-step process from idea to live website — usually in under 2 weeks.</p>
        </div>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-num active-step">1</div>
            <div className="step-title">You tell me your idea</div>
            <div className="step-desc">Fill out the contact form or WhatsApp me. We discuss what your business needs.</div>
          </div>
          <div className="step-item">
            <div className="step-num">2</div>
            <div className="step-title">I send a proposal</div>
            <div className="step-desc">Fixed quote, timeline, and tech plan — no surprise charges later.</div>
          </div>
          <div className="step-item">
            <div className="step-num">3</div>
            <div className="step-title">Design &amp; Build</div>
            <div className="step-desc">I design and develop your website. You get progress updates every 2 days.</div>
          </div>
          <div className="step-item">
            <div className="step-num">4</div>
            <div className="step-title">Launch &amp; Support</div>
            <div className="step-desc">Go live on your domain. 30 days free support for any fixes or changes.</div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section id="about-strip">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-eyebrow">Who builds your site</span>
            <h2 className="section-title">A developer who thinks like a business owner</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '20px' }}>
              I'm Praveen Kumar, a MERN Stack developer from Chennai. I don't just write code — I build websites
              that help real businesses get more customers, more calls, and more sales.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '28px' }}>
              Whether you're a restaurant, a clinic, a boutique, or a startup — I've worked with businesses like
              yours and I understand what makes a website actually work.
            </p>
            <Link className="btn btn-primary" to="/contact">Work With Me →</Link>
          </div>
          <div className="about-name-card">
            <div className="about-avatar">PK</div>
            <div className="about-card-name">Praveen Kumar </div>
            <div className="about-card-role">Full Stack Developer · Chennai</div>
            <div className="skill-chips">
              <span className="skill-chip">React.js</span>
              <span className="skill-chip">Node.js</span>
              <span className="skill-chip">MongoDB</span>
              <span className="skill-chip">Express.js</span>
              <span className="skill-chip">Tailwind CSS</span>
              <span className="skill-chip">Razorpay</span>
              <span className="skill-chip">Firebase</span>
              <span className="skill-chip">Vercel</span>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-val">10+</div>
                <div className="about-stat-lbl">Projects</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-val">8.2</div>
                <div className="about-stat-lbl">CGPA</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-val">1yr</div>
                <div className="about-stat-lbl">Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="home-cta-banner">
        <h2 className="cta-banner-h">Ready to go online?</h2>
        <p className="cta-banner-p">Your website could be live in 7 days. Let's start today.</p>
        <div className="cta-banner-actions">
          <Link className="btn btn-white btn-lg" to="/contact">Get a Free Appointment →</Link>
          <Link
            className="btn btn-lg"
            style={{
              color: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              padding: '16px 36px',
              fontFamily: 'var(--font-d)',
              fontWeight: 700,
              fontSize: '1rem',
            }}
            to="/pricing"
          >
            See Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
