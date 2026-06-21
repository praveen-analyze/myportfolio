const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    business: { type: String, trim: true },
    projectType: {
      type: String,
      required: true,
      enum: ['Landing Page', 'Business Website', 'E-commerce Store', 'Custom App', 'Not sure yet'],
    },
    budget: {
      type: String,
      enum: ['Under ₹2,000', '₹2,000–₹5,000', '₹5,000–₹10,000', '₹10,000–₹20,000', '₹20,000+', ''],
      default: '',
    },
    timeline: { type: String, trim: true, default: '' },
    description: { type: String, required: true, trim: true },
    status: { type: String, enum: ['new', 'contacted', 'in-progress', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
