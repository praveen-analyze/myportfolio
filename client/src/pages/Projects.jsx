import { useState } from 'react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    _id: 'project-1',
    title: 'Smart Public Issue Reporting',
    categories: ['webapp', 'fullstack'],
    categoryLabel: 'Web App · Civic Tech',
    description:
      'Full-stack civic platform with role-based access, complaint management, image uploads, and real-time status tracking.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloudinary', 'JWT'],
    icon: '🗺️',
    gradientFrom: '#1e3a5f',
    gradientTo: '#2563EB',
    liveUrl: 'https://pprs-6.onrender.com/',
  },
  {
    _id: 'project-2',
    title: 'Pizza Palace — Food Ordering',
    categories: ['ecommerce', 'fullstack'],
    categoryLabel: 'E-commerce · Full Stack',
    description:
      'Food ordering platform with cart management, user authentication, order tracking, and Razorpay payment integration.',
    tags: ['React', 'Firebase', 'Razorpay', 'MongoDB', 'Vercel', 'Render'],
    icon: '🍕',
    gradientFrom: '#7c2d12',
    gradientTo: '#ea580c',
    liveUrl: 'https://pizza-itf6.vercel.app/',
  },
  {
    _id: 'project-3',
    title: 'Nostra E-Commerce Website',
    categories: ['frontend', 'ecommerce'],
    categoryLabel: 'Frontend · E-commerce',
    description:
      'Responsive e-commerce website featuring real-time product search, dynamic filtering, and a modern user-friendly interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    icon: '🛍️',
    gradientFrom: '#1e3a8a',
    gradientTo: '#3b82f6',
    liveUrl: 'https://praveen-analyze.github.io/nostra/',
  },
  {
    _id: 'project-4',
    title: 'Greenden Plant Store',
    categories: ['frontend'],
    categoryLabel: 'Frontend · Responsive Website',
    description:
      'Modern plant store website built with Tailwind CSS using mobile-first responsive layouts.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    icon: '🌿',
    gradientFrom: '#14532d',
    gradientTo: '#22c55e',
    liveUrl: 'https://praveen-analyze.github.io/Greenden-tailwind/',
  },
  {
    _id: 'project-5',
    title: 'MediDesk Clinic Website',
    categories: ['frontend', 'webapp'],
    categoryLabel: 'Web App · Healthcare',
    description:
      'Responsive clinic website with doctor profiles, appointment form, and Google Maps integration.',
    tags: ['React', 'Tailwind CSS', 'Google Maps'],
    icon: '🏥',
    gradientFrom: '#0c4a6e',
    gradientTo: '#0284c7',
    liveUrl: 'https://praveen-analyze.github.io/medidesk/',
  },
  {
    _id: 'project-6',
    title: 'Portfolio & Blog CMS',
    categories: ['webapp', 'fullstack'],
    categoryLabel: 'Web App · Personal Branding',
    description:
      'Dynamic portfolio system with blog management, markdown support, SEO optimization, and analytics.',
    tags: ['React', 'Express', 'MongoDB', 'Markdown', 'Vercel'],
    icon: '📝',
    gradientFrom: '#1e1b4b',
    gradientTo: '#6366f1',
    liveUrl: 'https://myportfolio-aj7g.vercel.app/projects',
  },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'webapp', label: 'Web App' },
  { key: 'fullstack', label: 'Full Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <div id="page-projects">
      <div className="projects-hero section">
        <span
          className="section-eyebrow"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Portfolio
        </span>

        <h2 className="section-title">Projects I've built</h2>

        <p
          className="section-sub"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Real websites and applications built to solve real-world problems.
        </p>
      </div>

      <section className="section">
        <div className="filter-bar">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div className="proj-card" key={project._id}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="proj-thumb"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              >
                <span>{project.icon}</span>

                <div className="proj-thumb-overlay">
                  <span className="proj-view-btn">
                    View Project
                  </span>
                </div>
              </a>

              <div className="proj-body">
                <div className="proj-cat">
                  {project.categoryLabel}
                </div>

                <h3 className="proj-title">
                  {project.title}
                </h3>

                <p className="proj-desc">
                  {project.description}
                </p>

                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span className="proj-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: 'var(--navy)',
          padding: '64px 5%',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-d)',
            fontWeight: 700,
            fontSize: '1.6rem',
            color: 'var(--white)',
            marginBottom: '8px',
          }}
        >
          Want a site like these?
        </h3>

        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '24px',
          }}
        >
          Tell me about your business and I’ll provide a free quote within 24 hours.
        </p>

        <Link className="btn btn-primary" to="/contact">
          Get an Appointment →
        </Link>
      </section>
    </div>
  );
}