import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../api/api.js';

// Used if the backend/API isn't reachable yet, so the page still renders nicely in dev.
const FALLBACK_PROJECTS = [
  {
    _id: 'fallback-1',
    title: 'Smart Public Issue Reporting',
    categories: ['webapp', 'fullstack'],
    categoryLabel: 'Web App · Civic Tech',
    description: 'Full-stack civic platform for 3 user roles with real-time complaint tracking across 5 status stages.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloudinary', 'JWT'],
    icon: '🗺️',
    gradientFrom: '#1e3a5f',
    gradientTo: '#2563EB',
    liveUrl: 'https://pprs-6.onrender.com/',
  },
  {
    _id: 'fallback-2',
    title: 'Pizza Palace — Food Ordering',
    categories: ['ecommerce', 'fullstack'],
    categoryLabel: 'E-commerce · Food Tech',
    description: 'Full-stack food ordering platform with cart, order tracking, and live Razorpay payment gateway.',
    tags: ['React', 'Firebase', 'Razorpay', 'MongoDB', 'Vercel', 'Render'],
    icon: '🍕',
    gradientFrom: '#7c2d12',
    gradientTo: '#ea580c',
    liveUrl: 'https://pizza-itf6.vercel.app/',
  },
  {
  _id: 'fallback-4',
  title: 'Nostra E-Commerce Website',
  categories: ['frontend', 'website'],
  categoryLabel: 'Frontend · E-Commerce',
  description: 'Responsive multi-page e-commerce website featuring real-time product search, dynamic filtering, and a modern user-friendly interface.',
  tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  icon: '🛍️',
  gradientFrom: '#1e3a8a',
  gradientTo: '#3b82f6',
  liveUrl: 'https://lnkd.in/g5a5WHqW',
},

{
  _id: 'fallback-5',
  title: 'Greenden Plant Store',
  categories: ['frontend', 'website'],
  categoryLabel: 'Frontend · Responsive Website',
  description: 'Responsive multi-page plant store website built with Tailwind CSS, featuring modern UI design, mobile-first layouts, and scalable components.',
  tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
  icon: '🌿',
  gradientFrom: '#14532d',
  gradientTo: '#22c55e',
  liveUrl: 'https://lnkd.in/gBa2iwJt',
},

  {
    _id: 'fallback-5',
    title: 'Sample: Clinic Website',
    categories: ['webapp'],
    categoryLabel: 'Web App · Healthcare',
    description: 'Demo website for a medical clinic — doctor profiles, appointment form, Google Maps integration.',
    tags: ['React', 'Tailwind', 'Google Maps'],
    icon: '🏥',
    gradientFrom: '#0c4a6e',
    gradientTo: '#0284c7',
    liveUrl: 'https://praveen-analyze.github.io/medidesk/',
  },

  {
    _id: 'fallback-10',
    title: 'Portfolio & Blog CMS',
    categories: ['webapp'],
    categoryLabel: 'Web App · Personal Branding',
    description: 'Dynamic portfolio with admin panel, markdown blog editor, SEO optimization, and analytics dashboard.',
    tags: ['React', 'Express', 'MongoDB', 'Markdown', 'Vercel'],
    icon: '📝',
    gradientFrom: '#1e1b4b',
    gradientTo: '#6366f1',
    liveUrl: 'https://myportfolio-aj7g.vercel.app/projects',
  },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'webapp', label: 'Web App' },
  { key: 'fullstack', label: 'Full Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [usingFallback, setUsingFallback] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getProjects(activeFilter)
      .then((res) => {
        if (!cancelled && res.data?.data) {
          setProjects(res.data.data);
          setUsingFallback(false);
        }
      })
      .catch(() => {
        // backend not reachable yet — keep showing fallback data
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [activeFilter]);

  const visibleProjects =
    usingFallback && activeFilter !== 'all'
      ? FALLBACK_PROJECTS.filter((p) => p.categories.includes(activeFilter))
      : projects;

  return (
    <div id="page-projects">
      <div className="projects-hero section">
        <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Portfolio</span>
        <h2 className="section-title">Projects I've built</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Real websites and apps built for real problems — from civic tech to food delivery.
        </p>
      </div>

      <section className="section">
        <div className="filter-bar">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((p) => {
            const projectUrl = p.liveUrl || p.githubUrl || p.url || p.link;

            return (
              <div className="proj-card" key={p._id}>
                {projectUrl ? (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-thumb"
                    style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}
                  >
                    <span>{p.icon}</span>
                    <div className="proj-thumb-overlay">
                      <span className="proj-view-btn">View Project</span>
                    </div>
                  </a>
                ) : (
                  <div
                    className="proj-thumb"
                    style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}
                  >
                    <span>{p.icon}</span>
                    <div className="proj-thumb-overlay">
                      <span className="proj-view-btn">View Project</span>
                    </div>
                  </div>
                )}
                <div className="proj-body">
                  <div className="proj-cat">{p.categoryLabel}</div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-desc">{p.description}</div>
                  <div className="proj-tags">
                    {(p.tags || []).map((t) => (
                      <span className="proj-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {loading && (
          <p style={{ textAlign: 'center', color: 'var(--slate)', marginTop: '24px', fontSize: '0.85rem' }}>
            Loading latest projects…
          </p>
        )}
      </section>

      <section style={{ background: 'var(--navy)', padding: '64px 5%', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-d)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--white)', marginBottom: '8px' }}>
          Want a site like these?
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
          Tell me about your business and I'll give you a free quote within 24 hours.
        </p>
        <Link className="btn btn-primary" to="/contact">Get a Free Quote →</Link>
      </section>
    </div>
  );
}
