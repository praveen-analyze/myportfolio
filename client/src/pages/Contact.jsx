import { useState } from 'react';
import { submitContact } from '../api/api.js';

const PROJECT_TYPES = ['Landing Page', 'Business Website', 'E-commerce Store', 'Custom App', 'Not sure yet'];
const BUDGETS = ['Under ₹2,000', '₹2,000–₹5,000', '₹5,000–₹10,000', '₹10,000–₹20,000', '₹20,000+'];
const TIMELINES = [
  'As soon as possible (within 1 week)',
  'In 2–3 weeks',
  'Within a month',
  'No rush, just planning',
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  business: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async () => {
    setError('');
    if (!form.name.trim() || !form.phone.trim() || !form.description.trim() || !form.projectType) {
      setError('Please fill in your name, phone, project type, and description.');
      return;
    }
    setSubmitting(true);
    try {
      await submitContact(form);
      setSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Something went wrong sending your request. Please try again, or WhatsApp me directly at +91 88258 40357.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    setError('');
  };

  return (
    <div id="page-contact">
      <div style={{ background: 'var(--navy)', padding: '72px 5% 56px', textAlign: 'center' }}>
        <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Let's talk</span>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Get a free quote today</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)', margin: '0 auto' }}>
          Fill out the form and I'll reply within 24 hours with a proposal and price.
        </p>
      </div>

      <section className="section">
        <div className="contact-layout">
          {/* LEFT INFO */}
          <div className="contact-info">
            <h3 className="contact-info-title">What happens next?</h3>
            <p className="contact-info-p">
              After you fill out this form, I'll review your requirements and send a detailed proposal —
              including the exact price, timeline, and what's included. No sales calls, no pressure.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="cd-icon">📧</div>
                <div>
                  <div className="cd-label">Email</div>
                  <div className="cd-val">epraveen952@gmail.com</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="cd-icon">📱</div>
                <div>
                  <div className="cd-label">WhatsApp / Phone</div>
                  <div className="cd-val">+91 88258 40357</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="cd-icon">📍</div>
                <div>
                  <div className="cd-label">Location</div>
                  <div className="cd-val">Chennai, India · Works remotely</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="cd-icon">🕐</div>
                <div>
                  <div className="cd-label">Working hours</div>
                  <div className="cd-val">Mon–Sat, 9 AM – 8 PM IST</div>
                </div>
              </div>
            </div>

            <div className="response-badge">
              <span>⚡</span> Usually responds within 4 hours
            </div>

            <div style={{ marginTop: '28px', padding: '20px', background: 'var(--blue-lt)', borderRadius: '12px', border: '1px solid rgba(37,99,235,0.15)' }}>
              <div style={{ fontFamily: 'var(--font-d)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)', marginBottom: '4px' }}>
                Quick prices for reference
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--slate)' }}>Landing Page</span>
                  <span style={{ fontFamily: 'var(--font-m)', color: 'var(--blue)' }}>from ₹1,999</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--slate)' }}>Business Website</span>
                  <span style={{ fontFamily: 'var(--font-m)', color: 'var(--blue)' }}>from ₹4,999</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--slate)' }}>E-commerce</span>
                  <span style={{ fontFamily: 'var(--font-m)', color: 'var(--blue)' }}>from ₹9,999</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--slate)' }}>Custom App</span>
                  <span style={{ fontFamily: 'var(--font-m)', color: 'var(--blue)' }}>from ₹19,999</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-card">
            {!submitted ? (
              <div>
                <div className="form-title">Tell me about your project</div>
                <div className="form-sub">Takes about 2 minutes. No spam — ever.</div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="e.g. Ravi Kumar"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input
                      className="form-input"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Business / Company</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="e.g. Ravi's Restaurant"
                      value={form.business}
                      onChange={(e) => update('business', e.target.value)}
                    />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">What type of website do you need? *</label>
                    <div className="form-radio-group">
                      {PROJECT_TYPES.map((t) => (
                        <div
                          key={t}
                          className={`form-radio-btn ${form.projectType === t ? 'selected' : ''}`}
                          onClick={() => update('projectType', t)}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Your budget range</label>
                    <div className="form-radio-group">
                      {BUDGETS.map((b) => (
                        <div
                          key={b}
                          className={`form-radio-btn ${form.budget === b ? 'selected' : ''}`}
                          onClick={() => update('budget', b)}
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="form-group full">
                    <label className="form-label">When do you need it?</label>
                    <select
                      className="form-select"
                      value={form.timeline}
                      onChange={(e) => update('timeline', e.target.value)}
                    >
                      <option value="">Select a timeline</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Describe your project *</label>
                    <textarea
                      className="form-textarea"
                      rows="4"
                      placeholder="Tell me what your business does, what the website should do, any features you need, and any sites you like as reference..."
                      value={form.description}
                      onChange={(e) => update('description', e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>

                {error && (
                  <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '14px' }}>{error}</p>
                )}

                <button className="form-submit" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send My Request →'}
                </button>
                <div className="form-note">🔒 Your info is private. I'll reply within 24 hours.</div>
              </div>
            ) : (
              <div className="form-success" style={{ display: 'block' }}>
                <div className="form-success-icon">🎉</div>
                <h3>Message received!</h3>
                <p>
                  Thanks for reaching out. I'll review your requirements and reply within 24 hours with a
                  proposal and pricing.
                  <br />
                  <br />
                  In the meantime, feel free to WhatsApp me at <strong>+91 88258 40357</strong> if you want to
                  chat right away.
                </p>
                <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={resetForm}>
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
