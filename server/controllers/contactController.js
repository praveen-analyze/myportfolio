const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendLeadNotification } = require('../utils/mailer');

// POST /api/contact — public, used by the contact form
const createContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors: errors.array() });
    }

    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Thanks! Your request has been received. We will reply within 24 hours.',
      data: contact,
    });

    void sendLeadNotification(contact).catch((emailErr) => {
      console.error('Email notify failed:', emailErr.message);
      console.error(emailErr.stack);
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/contact — admin only, list leads
const getContacts = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    next(err);
  }
};

// PATCH /api/contact/:id — admin only, update lead status
const updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!contact) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

module.exports = { createContact, getContacts, updateContactStatus };
