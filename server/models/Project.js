const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    categories: { type: [String], required: true }, // e.g. ['ecommerce','fullstack']
    categoryLabel: { type: String, required: true }, // e.g. "E-commerce · Food Tech"
    description: { type: String, required: true },
    tags: { type: [String], default: [] },
    icon: { type: String, default: '💻' },
    gradientFrom: { type: String, default: '#1e3a5f' },
    gradientTo: { type: String, default: '#2563EB' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
