require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Project = require('../models/Project');

const projects = [
  {
    title: 'Smart Public Issue Reporting',
    categories: ['webapp', 'fullstack'],
    categoryLabel: 'Web App · Civic Tech',
    description: 'Full-stack civic platform for 3 user roles with real-time complaint tracking across 5 status stages.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloudinary', 'JWT'],
    icon: '🗺️',
    gradientFrom: '#1e3a5f',
    gradientTo: '#2563EB',
    order: 1,
  },
  {
    title: 'Pizza Palace — Food Ordering',
    categories: ['ecommerce', 'fullstack'],
    categoryLabel: 'E-commerce · Food Tech',
    description: 'Full-stack food ordering platform with cart, order tracking, and live Razorpay payment gateway.',
    tags: ['React', 'Firebase', 'Razorpay', 'MongoDB', 'Vercel', 'Render'],
    icon: '🍕',
    gradientFrom: '#7c2d12',
    gradientTo: '#ea580c',
    order: 2,
  },
  {
    title: 'Bulk Email Application',
    categories: ['webapp', 'fullstack'],
    categoryLabel: 'Web App · SaaS Tool',
    description: 'MERN bulk email platform with per-recipient delivery tracking, Tiptap rich editor, and campaign history.',
    tags: ['React', 'Nodemailer', 'JWT', 'Tiptap', 'MongoDB'],
    icon: '✉️',
    gradientFrom: '#1a2e1a',
    gradientTo: '#16a34a',
    order: 3,
  },
  {
    title: 'Sample: Boutique Store',
    categories: ['ecommerce'],
    categoryLabel: 'E-commerce · Retail',
    description: 'Demo e-commerce site for a clothing boutique — product gallery, size selector, WhatsApp order flow.',
    tags: ['React', 'Tailwind', 'WhatsApp API'],
    icon: '🛍️',
    gradientFrom: '#312e81',
    gradientTo: '#7c3aed',
    order: 4,
  },
  {
    title: 'Sample: Clinic Website',
    categories: ['webapp'],
    categoryLabel: 'Web App · Healthcare',
    description: 'Demo website for a medical clinic — doctor profiles, appointment form, Google Maps integration.',
    tags: ['React', 'Tailwind', 'Google Maps'],
    icon: '🏥',
    gradientFrom: '#0c4a6e',
    gradientTo: '#0284c7',
    order: 5,
  },
  {
    title: 'Sample: Restaurant Landing',
    categories: ['webapp'],
    categoryLabel: 'Business Website · F&B',
    description: 'Demo landing page for a restaurant — menu display, location, reservation call-to-action.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: '☕',
    gradientFrom: '#1c1917',
    gradientTo: '#78350f',
    order: 6,
  },
];

const run = async () => {
  await connectDB();
  await Project.deleteMany();
  await Project.insertMany(projects);
  console.log('Seeded', projects.length, 'projects');
  await mongoose.connection.close();
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
